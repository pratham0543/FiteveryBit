import React from "react";
import Video from "../../assets/workout.mp4";
import { Box, Button, Typography } from "@mui/material";
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
          variant="h4"
          className="content"
          fontWeight={700}
          sx={{ color: "true.main", textTransform: "capitalize" }}
        >
          Do the
          <Typography variant="text" color="secondary.main">
            {" "}
            impossible{" "}
          </Typography>{" "}
          and you’ll <br />
          <Typography variant="text" color="secondary.main">
            never doubt
          </Typography>{" "}
          yourself ever again
          <br />
          <Button
            variant="contained"
            color="secondary"
            sx={{ color: "true.main" }}
            disableElevation
          >
            Get Started
          </Button>
        </Typography>
      </Box>
    </>
  );
};

export default Hero;
