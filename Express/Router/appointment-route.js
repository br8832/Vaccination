var express = require("express");
const appointmentRouter = express.Router();
let AppointmentModel = require("../DataModels/Appointment");

appointmentRouter.post('/save',(req, res)=>{
    console.log("appointment data ", req.body)
    let appointment = new AppointmentModel(req.body)
    appointment.save().then(app=>res.send(app)).catch(e=>res.send(e.data))
})

appointmentRouter.get('/get',(_, res)=>{
    AppointmentModel.find().then(all=>res.send(all)).catch(e=>res.send(e.data))
})

module.exports = appointmentRouter; 