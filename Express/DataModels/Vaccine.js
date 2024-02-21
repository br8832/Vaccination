const mongooseObj = require("./connection")
let VaccineSchema = new schemaObj({
    name: {type:String, required:true},
    price: Number,
    type: String,
    sideEffects: String,
    origin: String,
    doses: Number, 
    otherInfo: String
    },
{versionKey: false })

let VaccineModel = mongooseObj.model("vaccine",VaccineSchema);
module.exports = VaccineModel;