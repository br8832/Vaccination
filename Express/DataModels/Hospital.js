const mongooseObj = require("./connection")
let HospitalSchema = new schemaObj({
    name: {type:String, required:true},
    address: String,
    type: String,
    charges: Number
    },
{versionKey: false})
let HospitalModel = mongooseObj.model("hospital",HospitalSchema);
module.exports = HospitalModel;