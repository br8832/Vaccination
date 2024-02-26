var express = require("express");
const vaccineRouter = express.Router();
let VaccineModel = require("../DataModels/Vaccine");

vaccineRouter.post('/save',(req, res)=>{
    console.log("vaccine data ", req.body)
    let vaccine = new VaccineModel(req.body)
    vaccine.save().then(vac=>res.send(vac)).catch(e=>res.send(e.data))
})

vaccineRouter.get('/get',(_, res)=>{
    VaccineModel.find().then(all=>res.send(all)).catch(e=>res.send(e.data))
})

module.exports = vaccineRouter; 