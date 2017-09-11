import csv
from enum import Enum
import re

toursfile = open('toursfile.csv', 'rb')
worksfile = open('collections.csv', 'rb')
outputfile = open('output.js', 'wb')
workSchemaFile = open('./schema/work.js', 'wb')
tourSchemaFile = open('./schema/tour.js', 'wb')

#begin function
outputfile.write("(function() {\n")
reader = csv.reader(toursfile, delimiter=',')

class Type(Enum):
	Start = 1 
	Attributes = 2 
	Data = 3

t = Type.Start
is_tours = True
tour_names = []
work_names = []
tour_attributes = None

for row in reader:
	#format: 1 word for section, next line for attributes, next line(s) for data points, and empty line for next section.
	if len("".join(row)) == 0:
		work_str = ""
		if not is_tours:
			c = 0
			for work in work_names:
				if c == 0: 
					work_str += work
				if c != 0:
					work_str += ", " + work
				c += 1
			outputfile.write("\t{}.works = [{}]\n".format(section, work_str))
			work_names = []
		is_tours = False
		t = Type.Start
	elif t == Type.Start:
		section = row[0].replace(" ", "_")
		outputfile.write("\t// " + section + "\n")
		counter = 1
		t = Type.Attributes 
	elif t == Type.Attributes:
		if is_tours:
			tour_attributes = row

		attributes = row
		isAttributes = False
		t = Type.Data
		counter = 0
	else:
		dict_str = "{"
		for i in range(len(attributes)):
			if attributes[i] == "":
				continue
			dict_str += re.sub('[^0-9a-zA-Z]+', '_', attributes[i]) + " : " + "\"" + row[i] + "\""
			if i != len(attributes) - 1:
				dict_str += ", "
		dict_str += "}"
		if is_tours:
			outputfile.write("\tvar {} = {}\n".format(row[0].replace(" ", "_"), dict_str))
		else:
			outputfile.write("\tvar {}_{} = {}\n".format(section, counter, dict_str))
		if is_tours:
			tour_names.append(row[0].replace(" ", "_"))
		else:
			work_names.append("{}_{}".format(section, counter))
		counter += 1

work_str = ""
if not is_tours:
	c = 0
	for work in work_names:
		if c == 0: 
			work_str += work
		if c != 0:
			work_str += ", " + work
		c += 1
	outputfile.write("\t{}.works = [{}]\n".format(section, work_str))
is_tours = False
tour_str = ""
c = 0
for tour in tour_names:
	if c == 0:
		tour_str += tour.replace(" ", "_")
	else:
		tour_str += ", " + tour
	c += 1
outputfile.write("\tvar tours = [{}]\n".format(tour_str))
outputfile.write("\tvar toursModel = function() {\n");
outputfile.write("\t\treturn tours;\n");
outputfile.write("\t};\n");

reader = csv.reader(worksfile, delimiter=',')

### Fill in Tours Schema

tourSchemaFile.write("\"use strict;\"\n")
tourSchemaFile.write("var mongoose = require('mongoose');\n");

works_str = ""
for attribute in attributes:
	attr = re.sub('[^0-9a-zA-Z]+', '_', attribute)
	if attr != '':
		works_str += "{}: String, ".format(attr)
tourSchemaFile.write("var workSchema = new mongoose.Schema({{{}}})\n".format(works_str))
tours_str = ""
for attribute in tour_attributes:
	attr = re.sub('[^0-9a-zA-Z]+', '_', attribute)
	if attr != '':
		tours_str += "{}: String, ".format(attr)
tours_str += "works:  [workSchema]"
tourSchemaFile.write("var tourSchema = new mongoose.Schema({{{}}})\n".format(tours_str))
tourSchemaFile.write("var Tour = mongoose.model('Tour', tourSchema);\n")
tourSchemaFile.write("module.exports = Tour;\n")


t = Type.Attributes
work_names = []
for row in reader:
	if t == Type.Attributes:
		attributes = row
		attr_set = set()
		attrs = []
		for attr in attributes:
			if attr in attr_set:
				attrs.append(attr + "(1)")
			else:
				attrs.append(attr)
			attr_set.add(attr)
		attributes = attrs
		isAttributes = False
		t = Type.Data
		counter = 0
		section = "work"
	else:
		dict_str = "{"
		for i in range(len(attributes)):
			if attributes[i] == "":
				continue
			dict_str += re.sub('[^0-9a-zA-Z]+', '_', attributes[i]) + " : " + "\"" + row[i].replace("\"", "\\\"").replace("\n", "").replace("\r","") + "\""
			if i != len(attributes) - 1:
				dict_str += ", "
		dict_str += "}"
		print dict_str
		outputfile.write("\tvar {}_{} = {}\n".format(section, counter, dict_str))
		work_names.append("{}_{}".format(section, counter))
		counter += 1

works_str = ""
c = 0
for work in work_names:
	if c == 0:
		works_str += re.sub('[^0-9a-zA-Z]+', '_', work)
	else:
		works_str += ", " + work
	c += 1
outputfile.write("\tvar works = [{}]\n".format(works_str))
outputfile.write("\tvar worksModel = function() {\n");
outputfile.write("\t\treturn works;\n");
outputfile.write("\t};\n");

outputfile.write("\tvar caughtModels = {\n")
outputfile.write("\t\ttoursModel: toursModel,\n");
outputfile.write("\t\tworksModel: worksModel\n");
outputfile.write("\t};\n");

outputfile.write("\tif( typeof exports !== 'undefined' ) {\n")
outputfile.write("\t\texports.caughtModels = caughtModels;\n")
outputfile.write("\t} else {\n")
outputfile.write("\t\twindow.caughtModels = caughtModels;\n")
outputfile.write("\t}\n")

outputfile.write("})();")

#### Write Work Schemas

workSchemaFile.write("\"use strict;\"\n")
workSchemaFile.write("var mongoose = require('mongoose');\n");

works_str = ""
for attribute in attributes:
	works_str += "{}: String,".format(re.sub('[^0-9a-zA-Z]+', '_', attribute))

workSchemaFile.write("var workSchema = new mongoose.Schema({{{}}})\n".format(works_str))
workSchemaFile.write("var Work = mongoose.model('Work', workSchema);\n")
workSchemaFile.write("module.exports = Work;\n")

worksfile.close()
toursfile.close()
outputfile.close()
workSchemaFile.close()

			



