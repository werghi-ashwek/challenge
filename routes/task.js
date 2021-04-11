const express = require("express")
const router = express.Router() 
const Tasks = require("./../models/tasks")

const Joi = require("joi")

//khdem : trajaa l task w subtask

router.get("/task",(req,res)=>{

    Tasks.find()
    .then((result)=>{
       res.json({tasks:result})
    })
    .catch((err)=>{
        console.log(err)
    })
})


//khdem : tzid task w subtask

router.post("/task",(req,res)=>{

    let task = new Tasks ({
        name:req.body.name,
        user_id:req.body.user_id,
        statusA:req.body.statusA,
        subtasks:[{
            
            description:req.body.subtasks.description,
            status:req.body.subtasks.status
        }],
        
    })
    
    task.save()
    .then(result=>res.json(result))

})

// makhedmetesh : update fel status taa l subtask 

router.post("/task/subtasks/:id",(req,res)=>{
    const id_S = req.params.id
    Tasks.findById(req.body.id)
    .then(task=>{
        for (let index = 0; index < task.subtasks.length; index++) {
            
           if (subtask._id == id_S)
           { task.subtasks[i].status=req.body.status 
               break}
        }
       
        task.save()
            .then(result=>res.json(result))
    })

})

// khdem : update fel status taa l task lekbira 

router.put("/task/:id",(req,res)=>{
    const id_T = req.params.id
    Tasks.findByIdAndUpdate(id_T,{statusA:req.body.statusA})
    .then(result=>{
        res.json(result)

    })
    .catch(erreur =>res.send(erreur))
})

 
module.exports=router




