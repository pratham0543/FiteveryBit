const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const joi=require('joi')
router.get('/', (req, res) => {
    res.status(200).json( {msg: 'GET request to /userExercise'} )
})
const userschema=require("../model/userExerciseSchema")


//validating using joi
const validate = joi.object({
    userid:joi.string(),
    chest:joi.object(),
    legs:joi.object(),
    biceps:joi.object(),
    triceps:joi.object(),
    abs:joi.object(),
    shoulder:joi.object(),
})
//post request
router.post('/',(req,res)=>{
    userschema.find({_id:req.body.user_id})
        .then(result=>{
                const error = validate.validate(req.body)
                if (error.error) {
                    return res.status(400).send(error.error)
                }
                    const newUserExercise=new userschema({
                        _id:new mongoose.Types.ObjectId(),
                        userid:req.body.userid,
                        chest:req.body.chest,
                        legs:req.body.legs,
                        biceps:req.body.biceps,
                        triceps:req.body.triceps,
                        abs:req.body.abs,
                        shoulder:req.body.shoulder
                        })
                    newUserExercise.save()
                        .then(result => res.status(201).json( {message: 'Posted SuccessfulL', userDetails: result} ))
                        .catch(err => res.status(500).json( {message: 'Server Encountered an Error1', error: err} ))
        })
        .catch(err=>res.status(500).json({message:"Server Encountered an Error",error:err}))
})


router.patch('/', (req, res) => {
    res.status(203).json({"message":"This is a patch request to /userExercise patch"})
})

router.delete('/', (req, res) => {
    res.status(200).json( {msg: 'DELETE request to /Exercise'} )
})
module.exports=router 