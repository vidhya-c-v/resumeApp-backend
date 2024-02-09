const express=require("express")
const router=express.Router()

const addModel=require("../models/addModel")

router.post("/add",async(req,res)=>{
    let data=req.body
    let add=new addModel(data)
    let result=await add.save()
    res.json({
        status:"success"
    })
})
router.get("/viewall",async(req,res)=>{
    let result=await addModel.find()
    .populate("userId","name age mobile address pin -_id")//mention only required field,userid is not displayed
    .exec()
    res.json(result)
})

module.exports=router