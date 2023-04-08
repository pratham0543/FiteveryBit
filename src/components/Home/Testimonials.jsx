import React from "react";
import Reviews from "./Reviews";
import { Box, Typography, Avatar } from "@mui/material";
import { pink } from "@mui/material/colors";
import "./Testimonial.css";
const Testimonials = () => {
  const avatars = [
    { name: "PK" },
    { name: "PM" },
    { name: "MP" },
    { name: "DK" },
    { name: "CG" },
    { name: "RK" },
    { name: "YD" },
    { name: "SC" },
    { name: "PJ" },
    { name: "VP" },
    { name: "KM" },
    { name: "SS" },
    { name: "AA" },
    { name: "BM" },
    { name: "LM" },
    { name: "LB" },
    { name: "NK" },
    { name: "PB" },
    { name: "RK" },
    { name: "HS" },
    { name: "OS" },
    { name: "KP" },
    { name: "JS" },
    { name: "JW" },
    { name: "SK" },
    { name: "AK" },
    { name: "KA" },
    { name: "AS" },
    { name: "VK" },
    { name: "GS" },
    { name: "BM" },
    { name: "LA" },
    { name: "PE" },
  ];
  const avatarArr1=avatars.slice(0,17);
  const avatarArr2=avatars.slice(17,34);
  const reviewArr = [
    {
      name: "Pratham Malhotra",
      plan: "Muscle Gain",
      rating: 4.5,
      desc: "The diet was up to the mark. I was able to see changes in my body in just 1 week and onwards. I am fully satified with the services",
    },
    {
      name: "Piyush Koul",
      plan: "Weight Loss",
      rating: 5,
      desc: "The workout plan was up to the mark. I was able to see my progress and i saw a major difference in my strength",
    },
    {
      name: "Pranav Jindal",
      plan: "Maintan",
      rating: 4,
      desc: "Very impressed with the UI and overall experience of the application.I wanted to maintain my body and workout plan was excellent",
    },
    {
      name: "Pratham Malhotra",
      plan: "Muscle Gain",
      rating: 4.5,
      desc: "The diet was up to the mark. I was able to see changes in my body in just 1 week and onwards. I am fully satified with the services",
    },
    {
      name: "Piyush Koul",
      plan: "Weight Loss",
      rating: 5,
      desc: "The workout plan was up to the mark. I was able to see my progress and i saw a major difference in my strength",
    },
    {
      name: "Pranav Jindal",
      plan: "Maintan",
      rating: 4,
      desc: "Very impressed with the UI and overall experience of the application.I wanted to maintain my body and workout plan was excellent",
    },
    {
      name: "Pratham Malhotra",
      plan: "Muscle Gain",
      rating: 4.5,
      desc: "The diet was up to the mark. I was able to see changes in my body in just 1 week and onwards. I am fully satified with the services",
    },
    {
      name: "Piyush Koul",
      plan: "Weight Loss",
      rating: 5,
      desc: "The workout plan was up to the mark. I was able to see my progress and i saw a major difference in my strength",
    },
    {
      name: "Pranav Jindal",
      plan: "Maintan",
      rating: 4,
      desc: "Very impressed with the UI and overall experience of the application.I wanted to maintain my body and workout plan was excellent",
    },
    {
      name: "Pratham Malhotra",
      plan: "Muscle Gain",
      rating: 4.5,
      desc: "The diet was up to the mark. I was able to see changes in my body in just 1 week and onwards. I am fully satified with the services",
    },
    {
      name: "Piyush Koul",
      plan: "Weight Loss",
      rating: 5,
      desc: "The workout plan was up to the mark. I was able to see my progress and i saw a major difference in my strength",
    },
    {
      name: "Pranav Jindal",
      plan: "Maintan",
      rating: 4,
      desc: "Very impressed with the UI and overall experience of the application.I wanted to maintain my body and workout plan was excellent",
    },
    {
      name: "Pratham Malhotra",
      plan: "Muscle Gain",
      rating: 4.5,
      desc: "The diet was up to the mark. I was able to see changes in my body in just 1 week and onwards. I am fully satified with the services",
    },
    {
      name: "Piyush Koul",
      plan: "Weight Loss",
      rating: 5,
      desc: "The workout plan was up to the mark. I was able to see my progress and i saw a major difference in my strength",
    },
    {
      name: "Pranav Jindal",
      plan: "Maintan",
      rating: 4,
      desc: "Very impressed with the UI and overall experience of the application.I wanted to maintain my body and workout plan was excellent",
    }
  ];

  return (
    <Box mt={2}>
      <Typography ml={5} variant="h3">
        Reviews by <span style={{ color: "#0AAE59" }}>You</span>
      </Typography>
      <Box
        mt={5}
        ml={27}
        mr={27}
        display="flex"
      >
        {avatarArr1.map((av) => (
          <Avatar sx={{ backgroundColor: pink[500],marginLeft:"10px" }}>{av.name}</Avatar>
        ))}
      </Box>

      <Box
        mt={1}
        ml={30}
        mr={30}
        display="flex"
      >
        {avatarArr2.map((av) => (
          <Avatar sx={{ backgroundColor: pink[500],marginLeft:"10px"}}>{av.name}</Avatar>
        ))}
      </Box>
      <Box
        display="flex"
        sx={{ flexDirection: "row-reverse", color: "secondary.main" }}
        mr={8}
        mt={2}
      >
        And many more .....
      </Box>
      {/* This is main container for review section */}
      <Box className="main-review-container">
        {/* This is container which is used to give margin to review animation */}
        <Box className="review-box-1" mx="auto">
          <Box className="reviewbox" mt={5} ml={5} mr={5} p={2} display="flex">
            {/* mapping reviews acc to the data coming from backend */}
            {reviewArr.map((rev) => (
              <Reviews
                name={rev.name}
                plan={rev.plan}
                rating={rev.rating}
                desc={rev.desc}
                sx={{
                  width: "25px",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
