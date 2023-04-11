const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const joi=require('joi')
//get request
router.get('/', (req, res) => {
    res.status(200).json( {msg: 'GET request to /signup'} )
})
const signupschema=require("../model/signupSchema")


//validating using joi
const validate = joi.object({
    name: joi.string().required(),
    email: joi.string().required().email(),
    password: joi.string().required().min(8),
    phoneno: joi.number().required(),
    height: joi.number().required(),
    weight: joi.number().required(),
    age: joi.number().required(),
    user_type:joi.string().required(),
    mobility:joi.object().required()
})
//post request
router.post('/',(req,res)=>{
    signupschema.find({email:req.body.email})
        .then(result=>{
            if(result.length!=0){
                //user already exist
                res.status(400).json( {message: 'Email already exists, try again with a different email'} )
            }
            else{
                const error = validate.validate(req.body)
                if (error.error) {
                    return res.status(400).send(error.error)
                }
                //defining salt rounds for encryption
                const saltrounds=10
                bcrypt.hash(req.body.password,saltrounds)
                    .then(result=>{
                        const newUser=new signupschema({
                            _id:new mongoose.Types.ObjectId(),
                            name:req.body.name,
                            email:req.body.email,
                            password:result,
                            phoneno:req.body.phoneno,
                            height:req.body.height,
                            weight:req.body.weight,
                            age:req.body.age,
                            mobility:req.body.mobility
                        })
                        newUser.save()
                            .then(result => res.status(201).json( {message: 'User Signup SuccessfulL', userDetails: result} ))
                            .catch(err => res.status(500).json( {message: 'Server Encountered an Error1', error: err} ))
                        })
                    .catch(err => res.status(500).json( {message: 'Server Encountered an Error7', error: err} ))
            }
        })
        .catch(err=>res.status(500).json({message:"Server Encountered an Error3",error:err}))
})


router.patch('/', (req, res) => {
    res.status(203).json({"message":"This is a patch request to /signup patch"})
})

router.delete('/', (req, res) => {
    res.status(200).json( {msg: 'DELETE request to /users/signup'} )
})
module.exports=router