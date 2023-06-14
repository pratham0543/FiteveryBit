import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Usercard from "../Trainer/Userdetails/Usercard";
import { useState, useEffect } from "react";
import axios from "axios";
const Trainers = () => {
  const [trainers, settrainers] = useState([]);
  const [users, setusers] = useState([])
  useEffect(() => {
    const deployed_trainerlogin='https://fiteverybit-nodeapi.onrender.com/trainerlogin'
    const deployed_getTrainer='https://fiteverybit-nodeapi.onrender.com/login'
    const url1="http://localhost:3200/trainerlogin"
    const url2='http://localhost:3200/login'
    axios
      .get(deployed_trainerlogin)
      .then((result) => {
        settrainers(result.data.result);
      })
      .catch((err) => console.log(err.message));
      axios.get(deployed_getTrainer)
      .then(res=>{
        setusers(res.data.result);
      })
      .catch((err)=>console.log(err.message))



  }, []);

  return (
    <Box mt="72px" p={2}>
      <Typography variant="h4" fontWeight="600">
        List Of <span style={{ color: "#0AAE59" }}> Trainers</span>
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
        {trainers.length !== 0 ? (
          trainers.map((trainer) => (
            <Usercard
            key={trainer._id}
              name={trainer.firstname + " " + trainer.lastname}
              age={trainer.age}
              phoneno={trainer.phoneno}
              trainerinfo={trainer}
              userinfo={users}
              gender={trainer.gender}
              speciality={trainer.speciality}
              
            />
          ))
        ) : (
          <Typography variant="h4">Loading....</Typography>
        )}
      </Stack>
    </Box>
  );
};

export default Trainers;
