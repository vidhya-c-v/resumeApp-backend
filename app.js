const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userRouter=require("./controllers/userRouter")
const addRouter=require("./controllers/addRouter")
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://vidhya_14:vidhya_14@cluster0.u7pxfo8.mongodb.net/resumeDb?retryWrites=true&w=majority",
{useNewUrlParser:true})
app.use("/api/resume",userRouter)
app.use("/api/entry",addRouter)

app.listen(3001,()=>{
    console.log("server running")
})
