const mongoose=require('mongoose')
const signupSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstname:mongoose.Schema.Types.String,
    lastname:mongoose.Schema.Types.String,
    email:mongoose.Schema.Types.String,
    password:mongoose.Schema.Types.String,
    phoneno:mongoose.Schema.Types.Number,
    height:mongoose.Schema.Types.Number,
    weight:mongoose.Schema.Types.Number,
    age:mongoose.Schema.Types.Number,
    user_type:{
     type: mongoose.Schema.Types.String,
     default:"normal"
    },  
    mobility: {
        type: Map,
        of: Boolean
      } 
})
module.exports=mongoose.model("signupschema",signupSchema)