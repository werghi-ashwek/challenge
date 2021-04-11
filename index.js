const {string } = require("joi")
const mongoose = require("mongoose")
const express = require ("express")
const Joi = require ("joi")
const tasks=require("./routes/task")
const users=require("./routes/user")
const app = express()



uri= "mongodb+srv://ashdb:1234@cluster0.bflhd.mongodb.net/chall?retryWrites=true&w=majority"
const port = 3000 || process.env.PORT

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("connected")
 
}).catch((err)=>{
    console.log((err),"error while connecting to db..")
})
mongoose.connection.on("connected",()=>
console.log("we're connected")) 

mongoose.connection.on("error",(e)=>
console.log(e))

app.use(express.json())

app.use("/",tasks)
app.use("/",users)


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})








