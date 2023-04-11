import React from "react";
import Reviews from "./Reviews";
import { Box, Typography, Avatar } from "@mui/material";

import axios from "axios";
import { useState, useEffect } from "react";
import "./Testimonial.css";
const Testimonials = () => {
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // api call to generate random user
  useEffect(() => {
    axios
      .get(
        "https://randomuser.me/api/?results=45&inc=picture,name&exc=login,location,dob,email,info"
      )
      .then((res) => {
        setAvatars(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  //to check whether the data is fetched or not
  useEffect(() => {
    if (avatars.length !== 0) setIsLoading(false);
  }, [avatars]);
  const reviewArr = [
    {
       id:101,
      name: "Pratham Malhotra",
      plan: "Muscle Gain",
      rating: 4.5,
      desc: "The diet was up to the mark. I was able to see changes in my body in just 1 week and onwards. I am fully satified with the services",
    },
    { id:102,
      name: "Piyush Koul",
      plan: "Weight Loss",
      rating: 5,
      desc: "The workout plan was up to the mark. I was able to see my progress and i saw a major difference in my strength",
    },
    { id:103,
      name: "Pranav Jindal",
      plan: "Maintan",
      rating: 4,
      desc: "Very impressed with the UI and overall experience of the application.I wanted to maintain my body and workout plan was excellent",
    },
    { id:104,
      name: "Pratham Malhotra",
      plan: "Muscle Gain",
      rating: 4.5,
      desc: "The diet was up to the mark. I was able to see changes in my body in just 1 week and onwards. I am fully satified with the services",
    },
    { id:105,
      name: "Piyush Koul",
      plan: "Weight Loss",
      rating: 5,
      desc: "The workout plan was up to the mark. I was able to see my progress and i saw a major difference in my strength",
    },
    { id:106,
      name: "Pranav Jindal",
      plan: "Maintan",
      rating: 4,
      desc: "Very impressed with the UI and overall experience of the application.I wanted to maintain my body and workout plan was excellent",
    },
    { id:107,
      name: "Pratham Malhotra",
      plan: "Muscle Gain",
      rating: 4.5,
      desc: "The diet was up to the mark. I was able to see changes in my body in just 1 week and onwards. I am fully satified with the services",
    },
    { id:108,
      name: "Piyush Koul",
      plan: "Weight Loss",
      rating: 5,
      desc: "The workout plan was up to the mark. I was able to see my progress and i saw a major difference in my strength",
    },
    { id:109,
      name: "Pranav Jindal",
      plan: "Maintan",
      rating: 4,
      desc: "Very impressed with the UI and overall experience of the application.I wanted to maintain my body and workout plan was excellent",
    },
    { id:110,
      name: "Pratham Malhotra",
      plan: "Muscle Gain",
      rating: 4.5,
      desc: "The diet was up to the mark. I was able to see changes in my body in just 1 week and onwards. I am fully satified with the services",
    },
    { id:111,
      name: "Piyush Koul",
      plan: "Weight Loss",
      rating: 5,
      desc: "The workout plan was up to the mark. I was able to see my progress and i saw a major difference in my strength",
    },
    {
      id:112,
      name: "Pranav Jindal",
      plan: "Maintan",
      rating: 4,
      desc: "Very impressed with the UI and overall experience of the application.I wanted to maintain my body and workout plan was excellent",
    },
    { id:113,
      name: "Pratham Malhotra",
      plan: "Muscle Gain",
      rating: 4.5,
      desc: "The diet was up to the mark. I was able to see changes in my body in just 1 week and onwards. I am fully satified with the services",
    },
    { id:114,
      name: "Piyush Koul",
      plan: "Weight Loss",
      rating: 5,
      desc: "The workout plan was up to the mark. I was able to see my progress and i saw a major difference in my strength",
    },
    { id:115,
      name: "Pranav Jindal",
      plan: "Maintan",
      rating: 4,
      desc: "Very impressed with the UI and overall experience of the application.I wanted to maintain my body and workout plan was excellent",
    },
  ];

  return (
    <Box mt={2}>
      <Typography ml={5} variant="h4" fontWeight="600">
        Reviews by <span style={{ color: "#0AAE59" }}>You</span>
      </Typography>
      <Typography ml={5} variant="body1">Trusted by millions</Typography>
      <Box
        mt={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        pt={5}
      ></Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        mx="auto"
        width="80%"
      >
        {/* component for showing avatars for small screen */}
        {!isLoading ? (
          avatars.map((av, index) => (
            <Avatar
              key={index}
              sx={{
                display: { xs: "none", sm: "block" },
                marginLeft: { xs: "3px", md: "5px" },
                width: 45 ,
                height: 45,
              }}
              src={av.picture.thumbnail}
            ></Avatar>
          ))
        ) : (
          <Typography>Loading</Typography>
        )}
        {
        avatars.slice(0,25).map((av, index) =>(
        
          (<Avatar
            key={index}
            sx={{
              display:{xs:"block",sm:"none"},
              marginLeft: { xs: "3px", md: "5px" },
              width:35,
              height: 35
            }}
            src={av.picture.thumbnail}
          ></Avatar>)
          ))}
      </Box>
      <Box
        display="flex"
        sx={{ flexDirection: "row-reverse", color: "cap.main" }}
        mr={8}
        mt={2}
      >
        And many more .....
      </Box>
      {/* This is main container for review section */}
      <Box
        className="main-review-container"
        backgroundColor="primary.main"
        mt={2}
        pb={5}
      >
        {/* This is container which is used to give margin to review animation */}
        <Box className="review-box-1" mx="auto" >
          <Box className="reviewbox" mt={5} ml={5} mr={5} p={2} display="flex">
            {/* mapping reviews acc to the data coming from backend */}
            {reviewArr.map((rev) => (
              <Reviews
              key={rev.id}
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
