import { Box, Typography,Card,Grid,CardMedia,CardActionArea,CardContent } from "@mui/material";
import React, { useEffect } from "react";
import deadlift from "../../assets/deadlift.jpg";
import '../Trainer/Userdetails/userfullInfo.css'
import chest from "../../assets/chest.png";
import chestWhite from "../../assets/chestWhite.png";
import arms from "../../assets/arms.png";
import armsWhite from "../../assets/armsWhite.png";
import legs from "../../assets/legs.png";
import legsWhite from "../../assets/legsWhite.png";
import absWhite from "../../assets/abswhite.png";
import abs from "../../assets/abs.png";
import shoulders from "../../assets/shoulders.png";
import shouldersWhite from "../../assets/shouldersWhite.png";
import backmuscle from "../../assets/back.png";
import backWhite from "../../assets/backWhite.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
const WorkoutMain = () => {
  const navigate = useNavigate();
  const [hoverid, sethoverid] = useState("");
  const [userExercise, setuserExercise] = useState({})
  const handleMouseOver = (id) => sethoverid(id);

  const handleMouseOut = () => sethoverid("");
  const userid=localStorage.getItem("id")
  useEffect(()=>
  {
    axios.get(`http://localhost:3200/userexercise/${userid}`,)
    .then((res)=>{
      setuserExercise(res.data.result)
     })
    .catch((err)=>console.log(err.message))

  },[])

  return (
    <Box mt="72px">
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
            width: "100%",
          }}
        >
          <Typography
            variant="h5"
            color="true.main"
            width="70%"
            textAlign="center"
            fontSize="25px"
            sx={{ mx: "auto", fontWeight: 600, textTransform: "capitalize" }}
          >
            <span style={{ color: "#0AAE59" }}>Believe</span> in{" "}
            <span style={{ color: "#0AAE59" }} >Yourself</span> and all that you
            are. Know that there is{" "}
            <span style={{ color: "#0AAE59" }}>something</span> inside you that
            is <span style={{ color: "#0AAE59" }}> greater</span> than any
            <span style={{ color: "#0AAE59" }}> obstacle.</span>
          </Typography>
        </Box>
      </Box>
      <Typography variant="h4" mt={6} textAlign="center">
        Your Personalized Workouts
      </Typography>
      <Grid container justifyContent="center" spacing={2} mt={2} mb={3}>
        <Grid item sx={{ width: "28%" }}>
          <Card
            onClick={()=>navigate('/showworkout/muscle',{state:{name:"chest",workout:userExercise.chest}})}
            className="card"
            onMouseOver={() => handleMouseOver("chest")}
            onMouseOut={handleMouseOut}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={hoverid === "chest" ? chestWhite : chest}
                alt="chest"
                sx={{
                  height: "187px",
                  objectFit: "contain",
                }}
              />
              <CardContent>
                <Typography
                  variant="body1"
                  fontWeight="600"
                  fontSize="18px"
                  textAlign="center"
                >
                  Chest Workout
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sx={{ width: "28%" }}>
          <Card
            className="card"
            onMouseOver={() => handleMouseOver("back")}
            onMouseOut={handleMouseOut}
            onClick={()=>navigate('/showworkout/muscle',{state:{name:"back",workout:userExercise.back}})}
          >
            {" "}
            <CardActionArea>
              <CardMedia
                component="img"
                image={hoverid==='back'?backWhite:backmuscle}
                alt="back"
                sx={{
                  height: "187px",
                  objectFit: "contain",
                }}
              />
              <CardContent>
                <Typography
                  variant="body1"
                  fontWeight="600"
                  fontSize="18px"
                  textAlign="center"
                >
                  Back Workout
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sx={{ width: "28%" }}>
          <Card className="card"
          onMouseOver={()=>handleMouseOver('shoulders')}
          onMouseOut={handleMouseOut}
          onClick={()=>navigate('/showworkout/muscle',{state:{name:"shoulder",workout:userExercise.shoulder}})}
          >
            {" "}
            <CardActionArea>
              <CardMedia
                component="img"
                image={hoverid==='shoulders'?shouldersWhite:shoulders}
                alt="Shoulder"
                sx={{
                  height: "187px",
                  objectFit: "contain",
                }}
              />
              <CardContent>
                <Typography
                  variant="body1"
                  fontWeight="600"
                  fontSize="18px"
                  textAlign="center"
                >
                  Shoulder Workout
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item sx={{ width: "28%" }}>
          <Card className="card"
          onMouseOver={()=>handleMouseOver('legs')}
          onMouseOut={handleMouseOut}
          onClick={()=>navigate('/showworkout/muscle',{state:{name:"legs",workout:userExercise.legs}})}
          
          >
         
            <CardActionArea>
              <CardMedia
                component="img"
                image={hoverid==='legs'?legsWhite:legs}
                alt="Legs"
                sx={{
                  height: "187px",
                  objectFit: "contain",
                }}
              />
              <CardContent>
                <Typography
                  variant="body1"
                  fontWeight="600"
                  fontSize="18px"
                  textAlign="center"
                >
                  Legs Workout
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sx={{ width: "28%" }}>
          <Card
            className="card"
            onMouseOver={()=>handleMouseOver('arms')}
            onMouseOut={handleMouseOut}
            onClick={()=>navigate('/showworkout/muscle',{state:{name:"arms",workout:userExercise.arms}})}
            
          >
            {" "}
            <CardActionArea>
              <CardMedia
                component="img"
                image={hoverid==='arms' ? armsWhite : arms}
                alt="Arms"
                sx={{
                  height: "187px",
                  objectFit: "contain",
                }}
              />
              <CardContent>
                <Typography
                  variant="body1"
                  fontWeight="600"
                  fontSize="18px"
                  textAlign="center"
                >
                  Arms Workout
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sx={{ width: "28%" }}>
          <Card className="card"
          onMouseOver={()=>handleMouseOver('abs')}
          onMouseOut={handleMouseOut}
          onClick={()=>navigate('/showworkout/muscle',{state:{name:"abs",workout:userExercise.abs}})}
          >
            {" "}
            <CardActionArea>
              <CardMedia
                component="img"
                image={hoverid==='abs'?absWhite:abs}
                alt="abdominals"
                sx={{
                  height: "187px",
                  objectFit: "contain",
                }}
              />
              <CardContent>
                <Typography
                  variant="body1"
                  fontWeight="600"
                  fontSize="18px"
                  textAlign="center"
                >
                  Abdominals Workout
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkoutMain;
{
  /* <span style={{ color: "#0AAE59" }}>Training</span> */
}
