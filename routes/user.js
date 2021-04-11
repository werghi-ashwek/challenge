const express = require("express")
const router = express.Router() 
const Users = require("./../models/users")

//const Joi = require("joi")

//khdem
router.get("/",(req,res)=>{
    const wc = "the server is on, you're connected"
    res.send(JSON.stringify(wc));
})

//khdem
router.get("/user",(req,res)=>{

    Users.find()
    .then((result)=>{
       res.json({users:result})
    })
  
})

//khdem
router.post("/user",(req,res)=>{

    let user= new Users ({

        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        password:req.body.password
        
    })

    user.save()
    .then(result=>res.json(result))
    
})

router.delete("/user/:id",(req,res)=>{
    const user_id = req.params.id 
    Users.findById(user_id).then((userToDelete)=>{
        userToDelete.delete()
        res.send(JSON.stringify(result))
    }).catch(err=>{
        console.log(err)
    })
  
})

module.exports=router
