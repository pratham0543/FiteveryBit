import React from 'react'
import {Box,Typography,TextField} from '@mui/material'
import { useEffect } from 'react';
const Signup = (props) => {
 
  // useEffect(()=>
  // props.showFooter(props.p),[]) //but this line does not as useEffect 
  // props.showFooter(props.p) this lines give error
  return (
    <>
    <Typography variant='h1' >Create your FiteveryBit account</Typography>
    </>
  )
}

export default Signup