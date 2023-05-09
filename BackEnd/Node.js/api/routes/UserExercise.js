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
    firstname:joi.string().required(),
    lastname: joi.string().required(),
    email: joi.string().required().email(),
    height: joi.number(),
    weight: joi.number(),
    user_type:joi.string(),
    mobility:joi.object(),
    exercises:joi.object()
})
//post request
router.post('/',(req,res)=>{
    userschema.find({email:req.body.email})
        .then(result=>{
                const error = validate.validate(req.body)
                if (error.error) {
                    return res.status(400).send(error.error)
                }
                    const newUserExercise=new userschema({
                        _id:new mongoose.Types.ObjectId(),
                        firstname:req.body.firstname,
                        lastname:req.body.lastname,
                        email:req.body.email,
                        password:result,
                        phoneno:req.body.phoneno,
                        height:req.body.height,
                        weight:req.body.weight,
                        age:req.body.age,
                        mobility:req.body.mobility,
                        exercises:req.body.exercises
                        })
                    newUserExercise.save()
                        .then(result => res.status(201).json( {message: 'Posted SuccessfulL', userDetails: result} ))
                        .catch(err => res.status(500).json( {message: 'Server Encountered an Error', error: err} ))
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