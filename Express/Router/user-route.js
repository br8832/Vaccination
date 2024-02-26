var express = require("express");
const userRouter = express.Router()
let UserModel = require("../DataModels/User");

userRouter.post("/paid", (req,res)=>{
    res.send("<h1><strong>Working on it</strong></h1>")
})

userRouter.post("/signin", (req, res)=>{ 
    console.log("data ", req.body); 

    UserModel.findOne({name: req.body.name}).then((existingUser)=>{
        console.log(existingUser)
        if(existingUser) {
            //console.log("sigin in success ", existingUser);
            res.send(existingUser)
        } else { 
            let newUser = new UserModel(req.body)
            //console.log(newUser)
            newUser.save().then((newUser)=>{
                //console.log("successful signup ", newUser);
                res.send(newUser)
            }).catch((_)=>{
                //console.log("err signup", err1);
                res.send("error while sign up")
            })
        }
    }).catch((err)=>{
        console.log("err while login ", err);
        res.send("Error while Login - existing user")
    })

});

userRouter.get('/get',(_, res)=>{
    UserModel.find().then(all=>res.send(all)).catch(e=>res.send(e.data))
})

module.exports = userRouter; 