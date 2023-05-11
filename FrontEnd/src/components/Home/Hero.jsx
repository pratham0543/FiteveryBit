import React from "react";
import Video from "../../assets/workout.mp4";
import { Box, Button, Typography } from "@mui/material";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          top:{xs:"64px",sm:"72px"},
          height: "calc(100% - 72px)",
          width: "100%",
        }}
      >
        <div className="overlay"></div>
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={Video} type="video/mp4" />
        </video>
        <Typography
          variant="h4"
          // className="content"
          fontWeight={700}
          sx={{
            color: "true.main",
            textTransform: "capitalize",
            position: "absolute",
            top:  "30%" ,
            left:"8%" ,
            letterSpacing:{xs:"0",sm:"0.1rem"},
            display:{xs:"none",sm:"block"}
          }}
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


        <Typography
          variant="h5"
          // className="content"
          fontWeight={700}
          sx={{
            color: "true.main",
            textTransform: "capitalize",
            position: "absolute",
            top: "17%",
            left: "8%",
            letterSpacing:{xs:"0",sm:"0.1rem"},
            display:{xs:"block",sm:"none"}
          }}
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
