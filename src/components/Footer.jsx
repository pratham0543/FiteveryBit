import React from "react";
import {
  Stack,
  Grid,
  Typography,
  Box,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Googlemaps from "./Googlemaps";
import { useState } from "react";



const Footer = () => {
  // this state is used to set the outline of newsletter input box

  const [isOutline, setisOutline] = useState(true);
  
  return (
    <Grid container bgcolor="primary.main" sx={{ color: "white" }} p={5}>
      <Grid item xs={2.5}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h4">
            Fitevery<span style={{ color: "#0AAE59" }}>Bit</span>
          </Typography>
          <Box display="flex" className="icon-box" sx={{color:"highlight.main"}}>
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
            <i className="fa-solid fa-envelope"></i>&nbsp; fiteverybit@gmail.com
          </Box>
          <Box>
            <i className="fa-solid fa-phone"></i>&nbsp; +917006983887
          </Box>
        </Stack>
      </Grid>

      <Grid item xs={1.5}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h5">Calculator</Typography>
          <Box display="flex" className="icon-box">
            <i className="fa-solid fa-heart"></i>&nbsp; BMI
          </Box>
          <Box>
            <i className="fa-solid fa-heart-circle-check"></i>&nbsp; BMR
          </Box>
          <Box>
            <i className="fa-light fa-weight-scale"></i>&nbsp; BODY FAT %
          </Box>
        </Stack>
      </Grid>

      <Grid item xs={2}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h5">Features</Typography>
          <Box display="flex" className="icon-box">
            <i className="fa-brands fa-nutritionix"></i>&nbsp; Nutrition
          </Box>
          <Box>
            <i className="fa-solid fa-person-walking"></i>&nbsp; Exercise
            Tutorial
          </Box>
          <Box>
            <i className="fa-sharp fa-regular fa-dumbbell"></i>&nbsp;
            Transformation Plans
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Googlemaps />
      </Grid>
      <Grid item xs={3} pl={5}>
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
          sx={{borderRadius:"2px",backgroundColor:"secondary.main",color:"white"}}
          >
        <ArrowForwardIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Footer;
