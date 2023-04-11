const mongoose=require('mongoose')
const signupSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:mongoose.Schema.Types.String,
    email:mongoose.Schema.Types.String,
    password:mongoose.Schema.Types.String,
    phoneno:mongoose.Schema.Types.Number,
    height:mongoose.Schema.Types.Number,
    weight:mongoose.Schema.Types.Number,
    age:mongoose.Schema.Types.Number,
    user_type:mongoose.Schema.Types.String,
    mobility: {
        type: Map,
        of: Boolean
      } 
})
module.exports=mongoose.model("signupschema",signupSchema)