const express=require('express')
const router=express.Router()
const back =require('../../assets/exercisedata/back.json')
const cardio =require('../../assets/exercisedata/cardio.json')
const chest =require('../../assets/exercisedata/chest.json')
const lowerarms =require('../../assets/exercisedata/lowerarms.json')
const lowerlegs =require('../../assets/exercisedata/lowerlegs.json')
const neck =require('../../assets/exercisedata/neck.json')
const shoulder =require('../../assets/exercisedata/shoulder.json')
const upperarms =require('../../assets/exercisedata/upperarms.json')
const upperlegs =require('../../assets/exercisedata/upperlegs.json')
const waist =require('../../assets/exercisedata/waist.json')

router.get('/back',(req,res)=>{
    res.status(200).send(back)
})
router.get('/cardio',(req,res)=>{
    res.status(200).send(cardio)
})
router.get('/chest',(req,res)=>{
    res.status(200).send(chest)
})
router.get('/lowerarms',(req,res)=>{
    res.status(200).send(lowerarms)
})
router.get('/lowerlegs',(req,res)=>{
    res.status(200).send(lowerlegs)
})
router.get('/neck',(req,res)=>{
    res.status(200).send(neck)
})
router.get('/shoulder',(req,res)=>{
    res.status(200).send(shoulder)
})
router.get('/upperarms',(req,res)=>{
    res.status(200).send(upperarms)
})
router.get('/upperlegs',(req,res)=>{
    res.status(200).send(upperlegs)
})
router.get('/waist',(req,res)=>{
    res.status(200).send(waist)
})

module.exports=router