import { Box, Typography, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Usercard from "../Trainer/Userdetails/Usercard";
import axios from "axios";
const AssignTrainers = () => {
  const location = useLocation();
  const [users, setusers] = useState([]);
  console.log("trainer id", location.state.trainer_id);
  const clients = [];
  const handleUserAssign = (userid) => {
    axios
      .patch("http://localhost:3200/login/updatetrainer", { id: userid,trainerassigned:location.state.trainer_id })
      .then(res =>console.log())
      .catch((err) => console.log(err));
    clients.push(userid);
    axios
      .patch("http://localhost:3200/trainerlogin/updateusers", {
        id: location.state.trainer_id,
        user_assigned: clients,
      })
      .then((res) => console.log())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3200/login")
      .then((res) =>{ 
        
        console.log();
        setusers(res.data.result)})
      .catch((err) => console.log(err.message));
  }, []);

  // console.log(clients);
  return (
    <Box mt="72px" p={2}>
      <Typography variant="h4" fontWeight="600">
        List of <span style={{ color: "#0AAE59" }}> Clients</span>
      </Typography>
      <Stack
        sx={{flexDirection:{xs:"column",sm:"row"}}}
        justifyContent="space-around"
        alignContent="center"
        mt={5}
        mb={3}
        rowGap={4}
        flexWrap="wrap"
      >
        {users
          .filter(
            (checkValue) =>
              checkValue.user_type !== "admin" &&
              checkValue.trainerassigned === "false" &&
              checkValue.visitedmobility === "true"
          )
          .map((user) => (
            <Usercard
              key={user._id}
              id={user._id}
              name={user.firstname + " " + user.lastname}
              age={user.age}
              isAiMobility={user.visitedmobility}
              level={user.level}
              phoneno={user.phoneno}
              userinfo={user}
              gender={user.gender}
              isUser={true}
              onclick={() => handleUserAssign(user._id)}
            />
          ))}
      </Stack>
    </Box>
  );
};

export default AssignTrainers;
