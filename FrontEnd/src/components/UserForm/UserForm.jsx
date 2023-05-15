import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  TextField,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Select,
  InputLabel,
  MenuItem
} from "@mui/material";
const UserForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const[shouldermobility,setshouldermobility]=useState(location.state.shouldermobility);
  const handleshoulderChange = (e) => {
    setshouldermobility(e.target.value);
  };
  const[elbowmobility,setelbowmobility]=useState(location.state.elbowmobility);
  const handleelbowChange = (e) => {
    setelbowmobility(e.target.value);
  };
  const[anklemobility,setanklemobility]=useState(location.state.anklemobility);
  const handleankleChange = (e) => {
    setanklemobility(e.target.value);
  };
  const[kneemobility,setkneemobility]=useState(location.state.kneemobility);
  const handlekneeChange = (e) => {
    setkneemobility(e.target.value);
  };
  const styles = {
    RadioGrp: {
      marginLeft: "10px",
      top: "-3px",
      position: "relative",
    },
    Radio: {
      "&.Mui-checked": {
        color: "#0AAE59",
      },
    },
  };
  const [height, setheight] = React.useState(location.state.height);

  const handleheightChange = (e) => {
    setheight(e.target.value);
  };
  const [weight, setweight] = React.useState(location.state.weight);

  const handleweightChange = (e) => {
    setweight(e.target.value);
  };
  const [level, setlevel] = React.useState(location.state.level);

  const handlelevelChange = (e) => {
    setlevel(e.target.value);
  };
  const [workoutgoal, setworkoutgoal] = React.useState(location.state.workoutplan);

  const handleworkoutgoalChange = (e) => {
    setworkoutgoal(e.target.value);
  };
  var id=localStorage.getItem("id")
  const info={
    id:id,
    height:height,
    weight:weight,
    level:level,
    visitedmobility:location.state.visitedmobility,
    workoutgoal:workoutgoal,
    mobility:{shoulder:shouldermobility,ankle:anklemobility,elbow:elbowmobility,knee:kneemobility}
  }
  const onsubmithandler=()=>{
      axios.patch("http://localhost:3200/login/update",info)
        .then(result=>{console.log(result)
          navigate("/",{state:{visitedmobility:true}})
        })
        .catch(err=>console.log(err))
  }
  return (
    <Box
      sx={{
        position: "relative",
        top: { xs: "64px", sm: "72px" },
        height: "calc(100% - 72px)",
        width: "95%",
        justifyContent: "center",
        flexDirection: "column",
      }}
      mt={4}
      mb={11}
      mx="auto"
      display="flex"
    >
      <Box mx="auto" display="flex" sx={{ flexDirection: "column" }}>
        <Typography variant="h4" fontWeight="600">
          Please provide us with your{" "}
          <span style={{ color: "#0AAE59" }}>details</span>{" "}
        </Typography>
        <hr />

        <Box display="flex" ml={10} mt={5}>
          <Typography sx={{ fontSize: "16px" }} mr={4}>
            Height:
          </Typography>
          <TextField
            color="secondary"
            label="in (meters)"
            value={height}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              style: {
                position: "relative",
                height: "70%",
                width: "120%",
                fontSize: "14px",
                border: "none",
              },
            }}
            onChange={handleheightChange}
            type="number"
            variant="outlined"
          />
        </Box>

        <Box display="flex" ml={10} mt={3}>
          <Typography sx={{ fontSize: "16px" }} mr={4}>
            Weight:
          </Typography>
          <TextField
            color="secondary"
            label="in (kgs)"
            value={weight}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              style: {
                height: "70%",
                width: "120%",
                fontSize: "14px",
                border: "none",
              },
            }}
            onChange={handleweightChange}
            type="number"
            variant="outlined"
          />
        </Box>

        <Box display="flex" ml={10} mt={4}>
          <Typography sx={{ fontSize: "16px" }} mr={4}>
            Shoulder Mobility:{" "}
          </Typography>
          <RadioGroup
            row
            value={shouldermobility}
            onChange={handleshoulderChange}
            aria-label="ShoulderMobility"
            name="Shoulder"
            sx={styles.RadioGrp}
          >
            <FormControlLabel
              value="true"
              control={<Radio sx={styles.Radio} />}
              label="Yes"
            />
            <FormControlLabel
              value="false"
              control={<Radio sx={styles.Radio} />}
              label="No"
            />
          </RadioGroup>
        </Box>
        <Box display="flex" ml={10} mt={4}>
          <Typography mr={4} sx={{ fontSize: "16px" }}>
            Elbow Mobility:{" "}
          </Typography>
          <RadioGroup
            row
            value={elbowmobility}
            onChange={handleelbowChange}
            aria-label="ElbowMobility"
            name="Elbow"
            sx={styles.RadioGrp}
          >
            <FormControlLabel
              value="true"
              control={<Radio sx={styles.Radio} />}
              label="Yes" 
            />
            <FormControlLabel
              value="false"
              control={<Radio sx={styles.Radio} />}
              label="No"
            />
          </RadioGroup>
        </Box>

        <Box display="flex" ml={10} mt={4}>
          <Typography mr={4} sx={{ fontSize: "16px" }}>
            Ankle Mobility:{" "}
          </Typography>
          <RadioGroup
            row
            value={anklemobility}
            onChange={handleankleChange}
            aria-label="AnkleMobility"
            name="Ankle"
            sx={styles.RadioGrp}
          >
            <FormControlLabel
              value="true"
              control={<Radio sx={styles.Radio} />}
              label="Yes"
            />
            <FormControlLabel
              value="false"
              control={<Radio sx={styles.Radio} />}
              label="No"
            />
          </RadioGroup>
        </Box>
        <Box display="flex" ml={10} mt={4}>
          <Typography mr={4} sx={{ fontSize: "16px" }}>
            Knee Mobility:{" "}
          </Typography>
          <RadioGroup
            row
            value={kneemobility}
            onChange={handlekneeChange}
            aria-label="KneeMobility"
            name="Knee"
            sx={styles.RadioGrp}
          >
            <FormControlLabel
              value="true"
              control={<Radio sx={styles.Radio} />}
              label="Yes"
            />
            <FormControlLabel
              value="false"
              control={<Radio sx={styles.Radio} />}
              label="No"
            />
          </RadioGroup>
        </Box>
        <Box display="flex" ml={10} mt={4}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel>Level</InputLabel>
              <Select value={level} onChange={handlelevelChange} label="Level">
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120,marginLeft:"3em" }}>
            <FormControl fullWidth>
              <InputLabel>Workout Plan</InputLabel>
              <Select sx={{width:"10em"}} value={workoutgoal} onChange={handleworkoutgoalChange} label="Workout Plan">
                <MenuItem value="musclegain">Muscle Gain</MenuItem>
                <MenuItem value="maintainweight">Maintain Weight</MenuItem>
                <MenuItem value="weightloss">Weight Loss</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box mt={4} ml={10}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ color: "white" }}
            onClick={()=>{
              onsubmithandler();
            }}
          >
            Submit
          </Button>
          <Button
            variant="lined"
            color="secondary"
            sx={{ color: "#0AAE59", marginLeft: "15%" }}
            onClick={() => navigate("/mobility",{state:{height:height,weight:weight,workoutgoal:workoutgoal,level:level,shouldermobility:shouldermobility,anklemobility:anklemobility,elbowmobility:elbowmobility,kneemobility:kneemobility,}})}
          >
            AI MOBILITY CHECKER
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UserForm;
