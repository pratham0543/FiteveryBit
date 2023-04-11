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
    // Forgot Password
    const oldPassword = req.body.password
    const newPassword = req.body.newPassword
    // checking if user exists
    signupschema.find( {email: req.body.email} )
        .then(resul => {
            if(resul.length === 0) {
                // The user does not exist
                res.status(400).json( {message: 'Email or password did not match, try again with a different email or password'} )
            } else {
                // matching passwords
                bcrypt.compare(resul[0].password,req.body.password)
                    .then(result=>{
                        const updatedUser = {
                            _id: resul[0]._id,
                            email: resul[0].email,
                            password: newPassword
                        }
                        signupschema.findByIdAndUpdate(resul[0]._id, updatedUser)
                            .then(result => res.status(200).json( {message: 'Password Changed', updatedUser: result} ))
                            .catch(err => res.status(500).json( {message: 'Server Encountered an Error', error: err} ))
                    })
                    .catch(err=>res.status(400).json({"message":"The passwords doesn't match",error:err}))
            }
        })
        .catch(err => res.status(500).json( {message: 'Server Encountered an Error', error: err} ))
})

router.delete('/', (req, res) => {
    res.status(200).json( {msg: 'DELETE request to /users/signup'} )
})
module.exports=router