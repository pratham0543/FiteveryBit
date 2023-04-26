import React from "react";
import {
  Stack,
  Grid,
  Typography,
  Box,
  TextField,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Googlemaps from "./Googlemaps";
import { useState } from "react";



const Footer = () => {
  // this state is used to set the outline of newsletter input box

  const [isOutline, setisOutline] = useState(true);
  
  return (
    <Box bgcolor="primary.main" >
      <Typography variant="h4" color="white" fontWeight="600" p={2}>
        Fitevery<span style={{ color: "#0AAE59" }}>Bit</span>

      </Typography>

    <Grid container bgcolor="primary.main" sx={{ color: "white" }} p={2} pt={1} justifyContent="center" spacing={10}>
      <Grid item  xs={12} sm="auto">
        <Stack direction="column" spacing={2}>
          <Typography variant="h5" fontWeight="600">
            FollowUs
          </Typography>
          <Box display="flex" className="icon-box" sx={{color:"secondary.main"}}>
            <i className="fa-brands fa-instagram"></i>
            <i
              style={{ marginLeft: "5%" }}
              className="fa-brands fa-facebook"
            ></i>
            <i
              style={{ marginLeft: "5%" }}
              className="fa-brands fa-twitter"
            ></i>
          </Box>
          <Box>
            <i className="fa-solid fa-envelope" style={{color:"#0AAE59"}}></i>&nbsp; fiteverybit@gmail.com
          </Box>
          <Box>
            <i className="fa-solid fa-phone" style={{color:"#0AAE59"}}></i>&nbsp; +917006983887
          </Box>
        </Stack>
      </Grid>

     

      <Grid item xs={12} sm="auto">
        <Stack direction="column" spacing={2}>
          <Typography variant="h5" fontWeight="600">Features</Typography>
          <Box display="flex">
            <i className="fa-brands fa-nutritionix" style={{color:"#0AAE59"}} ></i>&nbsp; Nutrition
          </Box>
          <Box >
            <i className="fa-solid fa-person-walking" style={{color:"#0AAE59"}}></i>&nbsp; Exercise
            Tutorial
          </Box>
          <Box>
            <i className="fa-sharp fa-regular fa-dumbbell" style={{color:"#0AAE59"}}></i>&nbsp;
            Transformation Plans
          </Box>
        </Stack>
      </Grid>
      <Grid item  sm={3}   >
        <Googlemaps />
      </Grid>
      <Grid item xs={12} sm="auto">
        <Typography variant="h5" mb={2} mt={2} sx={{ color: "secondary.main",fontWeight:600 }}>
         Subscribe to our newsletter
        </Typography>
        <TextField
          variant="outlined"
          label="Email"
          color="true"
          onFocus={()=>setisOutline(false)}
          onBlur={()=>setisOutline(true)}
          InputProps={{sx:{outline:isOutline?"1px solid white":"0",color:"white"}}}
          InputLabelProps={{style:{color:"white"}}}
        />
        <IconButton
          variant="contained"
          color="secondary"
          sx={{border:"1px solid white",borderLeft:"0px",borderRadius:"2px",backgroundColor:"secondary.main",color:"white",marginLeft:"-5px",top:"-2px"}}
          >
        <ArrowForwardIcon style={{height:"1.7em"}} />
        </IconButton>
      </Grid>
    </Grid>
    </Box>
  );
};

export default Footer;