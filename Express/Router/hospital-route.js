var express = require("express");
const hospitalRouter = express.Router();
let HospitalModel = require("../DataModels/Hospital");

//make update charge where in body have {id, charges}
hospitalRouter.post('/save',(req, res)=>{
    console.log("hospital data ", req.body)
    let hospital = new HospitalModel(req.body.hospital)
    hospital.save().then(hos=>res.send(hos)).catch(e=>res.send(e.data))
})

hospitalRouter.get('/get',(_, res)=>{
    HospitalModel.find().then(all=>res.send(all)).catch(e=>res.send(e.data))
})

module.exports = hospitalRouter; 