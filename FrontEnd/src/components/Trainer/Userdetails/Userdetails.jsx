import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { useState } from "react";
import deadlift from "../../../assets/deadlift.jpg";
import "./userdetails.css";
import Usercard from "./Usercard";
const Userdetails = () => {
  const [users, setUsers] = useState([
    {
      firstname: "Pratham",
      lastname: "Malhotra",
      age: "21",
      height: "1.98",
      weight: "86",
      aiMobility: "true",
      plantype:"Weight Gain",
      level:"Intermediate",
      phoneno:"9896906866"
    },
  ]);
  return (
    <Box sx={{ mt: "71px" }}>
      <Box height="75vh" width="100%" className="deadlift" overflow="hidden">
        <img
          src={deadlift}
          width="100%"
          height="100%"
          style={{ objectFit: "cover", filter: " brightness(78%)" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            color="true.main"
            width="70%"
            sx={{ mx: "auto", fontWeight: 600, textTransform: "capitalize" }}
          >
            <span style={{ color: "#0AAE59" }}>Training</span> is not just about{" "}
            <span style={{ color: "#0AAE59" }}>transforming bodies</span> it's
            about
            <span style={{ color: "#0AAE59" }}> empowering</span> minds and
            fostering <span style={{ color: "#0AAE59" }}>self-confidence</span>.
            Be the catalyst for
            <span style={{ color: "#0AAE59" }}> Positive change</span>
          </Typography>
        </Box>
      </Box>
      <Box mt={3} p={2}>
        <Typography variant="h4" mb={3}>Client Information</Typography>
        <Box p={2}>
          <Grid container>
          <Usercard
      name={users[0].firstname + " " + users[0].lastname}
      height={users[0].height}
      weight={users[0].weight}
      age={users[0].age}
      isAiMobility={users[0].aiMobility}
      planType={users[0].plantype}
      level={users[0].level}
      contactno={users[0].phoneno}
    />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Userdetails;
