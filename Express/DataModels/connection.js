let mongooseObj = require("mongoose")
schemaObj = mongooseObj.Schema
//creates db with name mernstack17 or opens a connection if already present
mongooseObj.connect("mongodb://localhost/mernstack17/vaccine"); 
module.exports = mongooseObj