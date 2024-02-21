const mongooseObj = require("./connection")
let UserSchema = new schemaObj({
    name: {type:String, required:true},
    password: {type:String, required:true},
    age: Number,
    profession: String,
    contact: Number,
    address: String,
    gender: String,
    disease: String,
    medicalCert: String
},
{versionKey: false })

let UserModel = mongooseObj.model("User",UserSchema);
module.exports = UserModel;