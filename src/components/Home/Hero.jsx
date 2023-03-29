import React from "react";
import Video from "../../assets/workout.mp4";
import { Box, Typography } from "@mui/material";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <Box className="parent-video">
        <div className="overlay"></div>
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={Video} type="video/mp4" />
        </video>
        <Typography
          variant="h5"
          className="content"
          sx={{ color: "true.main" }}
        >
          Get your Personalized Plan
        </Typography>
      </Box>
    </>
  );
};

export default Hero;
