const mongooseObj = require("./connection")
let HospitalSchema = new schemaObj({
    name: {type:String, required:true},
    address: {type:String},
    type: {type:String},
    charges: {type:Number}
    },
{versionKey: false})
let HospitalModel = mongooseObj.model("hospital",HospitalSchema);
module.exports = HospitalModel;