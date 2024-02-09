const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
    {
        name:String,
        age:String,
        mobile:String,
        email:String,
        password:String

    }
)
module.exports=mongoose.model("users",userSchema)//user is collection