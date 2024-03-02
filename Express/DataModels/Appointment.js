const mongooseObj = require("./connection")
let AppointmentSchema = new schemaObj({
    user: {},
    hospital: {},
    vaccine: {},
    date: Date,
    paid: Boolean
    },
{versionKey: false //just do false 
});
let AppointmentModel = mongooseObj.model("appointment",AppointmentSchema);
module.exports = AppointmentModel;
