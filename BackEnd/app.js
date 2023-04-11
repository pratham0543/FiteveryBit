//importing required modules
const express = require('express');
const cors=require('cors')
const app=express();

const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//backend code
//using cors module to solve cross origin resource sharing
app.use(cors())

//using body parser so that express can get access of request body
app.use( bodyParser.urlencoded( {extended: true} ) )
app.use( bodyParser.json() )
//connecting to mongo database
mongoose.connect('mongodb+srv://PiyushKoul:latakoul@cluster0.gh2lxeo.mongodb.net/FITEVERYBIT?retryWrites=true&w=majority')
    .then(console.log('Connection Successful!'))
    .catch(err => console.log(err))

//importing all the routes
const signup=require('./api/routes/signup')
//route handling
app.use('/signup',signup)

module.exports=app;