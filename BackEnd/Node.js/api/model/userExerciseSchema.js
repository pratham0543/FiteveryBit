const mongoose=require('mongoose')
const userExerciseSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstname:mongoose.Schema.Types.String,
    lastname:mongoose.Schema.Types.String,
    email:mongoose.Schema.Types.String,
    height:mongoose.Schema.Types.Number,
    weight:mongoose.Schema.Types.Number,
    user_type:{
     type: mongoose.Schema.Types.String,
     default:"normal"
    },  
    mobility: {
        type: Map,
        of: Boolean
    },
    exercises: {
        type:Map,
        of:Object     
    }
})
module.exports=mongoose.model("userExerciseSchema",userExerciseSchema)