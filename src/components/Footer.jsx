import React from "react";
import { Stack, Grid, Typography, Box } from "@mui/material";

import Googlemaps from "./Googlemaps";

const Footer = () => {
  return (
    <Grid container bgcolor="primary.main" sx={{ color: "white" }} p={5}>
      <Grid item xs={2.5}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h4">
            FITEVERY <span style={{ color: "#0AAE59" }}>BIT</span>
          </Typography>
          <Box display="flex" className="icon-box">
            <i class="fa-brands fa-instagram"></i>
            <i style={{ marginLeft: "5%" }} class="fa-brands fa-facebook"></i>
            <i style={{ marginLeft: "5%" }} class="fa-brands fa-twitter"></i>
          </Box>
          <Box>
            <i class="fa-solid fa-envelope"></i>&nbsp; fiteverybit@gmail.com
          </Box>
          <Box>
            <i class="fa-solid fa-phone"></i>&nbsp; +917006983887
          </Box>
        </Stack>
      </Grid>

      <Grid item xs={1.5}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h5">Calculator</Typography>
          <Box display="flex" className="icon-box">
            <i class="fa-solid fa-heart"></i>&nbsp; BMI
          </Box>
          <Box>
            <i class="fa-solid fa-heart-circle-check"></i>&nbsp; BMR
          </Box>
          <Box>
            <i class="fa-light fa-weight-scale"></i>&nbsp; BODY FAT %
          </Box>
        </Stack>
      </Grid>

      <Grid item xs={2}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h5">Features</Typography>
          <Box display="flex" className="icon-box">
            <i class="fa-brands fa-nutritionix"></i>&nbsp; Nutrition
          </Box>
          <Box>
            <i class="fa-solid fa-person-walking"></i>&nbsp; Exercise Tutorial
          </Box>
          <Box>
            <i class="fa-sharp fa-regular fa-dumbbell"></i>&nbsp; Transformation
            Plans
          </Box>
        </Stack>
      </Grid>
      <Grid xs={3}>
        <Googlemaps />
      </Grid>
      <Grid xs={3} pl={5}>
        <Typography varaint="h3" mb={2} mt={2} sx={{color:"secondary.main"}}>
          Get Personalized Plan
        </Typography>
        <input type="text" placeholder="Email.." style={{ height: "20%",borderRadius:"0px 7px" }} />
        <button style={{outline:"none",height:"23%",border:"none"}}>
          <i
            className="fa-sharp fa-solid fa-arrow-right"
            style={{ color: "#0AAE59" }}
          ></i>
        </button>
      </Grid>
    </Grid>
  );
};

export default Footer;
