var express = require("express");
const userRouter = express.Router();
let UserModel = require("../DataModels/User");

//implement paid charge with body have {id} in body
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
            let newUser = new UserModel(req.body.user)
            console.log(newUser)
            newUser.save().then((created)=>{
                //console.log("successful signup ", newUser);
                console.log(created)
                res.send(created)
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