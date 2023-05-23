import React, { useEffect } from "react";
import { Typography, Box,Stack } from "@mui/material";
import { useState } from "react";
import deadlift from "../../../assets/deadlift.jpg";
import "./userdetails.css";
import axios from 'axios'
import Usercard from "./Usercard";
const Userdetails = () => {
  const [users, setUsers] = useState([]);
  const usersAssigned=JSON.parse(localStorage.getItem("usersAssigned"));
  console.log(usersAssigned);
  useEffect(()=>{
   
    axios.get(`http://localhost:3200/login`)
    .then((res)=>{
            setUsers(res.data.result)
     

    })
    .catch((err)=>console.log(err))
  }
  ,[])

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
        <Typography variant="h4" mb={3}>
          Client Information
        </Typography>
        <Box >
          <Stack  sx={{flexDirection:{xs:"column",sm:"row"}}}
        justifyContent="space-around"
        alignContent="center"
        mt={5}
        mb={3}
        rowGap={4}
        flexWrap="wrap"  >
            {users.length!==0?
            
            users.filter((check)=>check.visitedmobility==="true" && check.trainerassigned===localStorage.getItem("id")).map((user)=><Usercard
            key={user._id}
              name={user.firstname + " " + user.lastname}
              age={user.age}
              isAiMobility={user.visitedmobility}
              level={user.level}
              phoneno={user.phoneno}
              userinfo={user}
              gender={user.gender}
            />)
            :<Typography variant="h4">Loading....</Typography>}
            
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Userdetails;
