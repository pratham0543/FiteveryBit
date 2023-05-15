import {
  Box,
  Grid,
  Typography,
  Paper,
  Stack,
  Card,
  CardMedia,
  CardContent,
  
  CardActionArea,
} from "@mui/material";
import React, { useEffect } from "react";
import back from "../../../assets/backview.jpg";
import front from "../../../assets/frontview.jpg";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useLocation } from "react-router";
import chest from "../../../assets/chest.png";
import chestWhite from "../../../assets/chestWhite.png";
import arms from "../../../assets/arms.png";
import armsWhite from "../../../assets/armsWhite.png";
import legs from "../../../assets/legs.png";
import legsWhite from "../../../assets/legsWhite.png";
import absWhite from "../../../assets/abswhite.png";
import abs from "../../../assets/abs.png";
import shoulders from "../../../assets/shoulders.png";
import shouldersWhite from "../../../assets/shouldersWhite.png";
import backmuscle from "../../../assets/back.png";
import backWhite from "../../../assets/backWhite.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./userfullInfo.css";
import axios from "axios";
const Userfullinfo = () => {
  const location = useLocation();
  const navigate=useNavigate();
  const user = location.state;
  console.log(user);
  const userMobility = location.state.mobility;
  const [hoverid, sethoverid] = useState("");


  
  
  const handleMouseOver = (id) => sethoverid(id);




  const handleMouseOut = () => sethoverid("");
  return (
    <Box mt="73px" p={2}>
      <Typography variant="h4">Client Details</Typography>
      <Box pt={2} width="100%">
        <Typography variant="h4" textAlign="center">
          {user.firstname + " " + user.lastname}
        </Typography>
        <Typography
          variant="h6"
          color="cap.main"
          fontWeight="600"
          textAlign="center"
          textTransform="capitalize"
        >
          {user.workoutgoal + "-" + user.level}
        </Typography>
      </Box>
      <Grid container mt={8} justifyContent="space-around">
        <Grid item xs={3}>
          <Paper
            elevation={2}
            sx={{
              backgroundImage: `url(${back})`,
              height: "500px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={2}
            sx={{
              backgroundImage: `url(${front})`,
              height: "500px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Paper>
        </Grid>
      </Grid>

      <Grid container mt={6} justifyContent="space-around" rowSpacing={2}>
        <Grid item xs={3} textAlign="center">
          <Stack spacing={2}>
            <Paper elevation={2} sx={{ padding: "16px" }}>
              <Typography
                variant="body1"
                fontWeight="600"
                sx={{ fontStyle: "italic" }}
                fontSize="18px"
              >
                Height:
                <span style={{ fontWeight: "400" }}>
                  {" " + user.height + " m"}
                </span>
              </Typography>
            </Paper>
            <Paper elevation={2} sx={{ padding: "16px" }}>
              <Typography
                variant="body1"
                fontWeight="600"
                sx={{ fontStyle: "italic" }}
                fontSize="18px"
              >
                Weight:
                <span style={{ fontWeight: "400" }}>
                  {" " + user.weight + " kg"}
                </span>
              </Typography>
            </Paper>
          </Stack>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Stack spacing={2}>
            <Paper elevation={2} sx={{ padding: "16px" }}>
              <Typography
                variant="body1"
                fontWeight="600"
                sx={{ fontStyle: "italic" }}
                fontSize="18px"
              >
                Age:
                <span style={{ fontWeight: "400" }}>
                  {" " + user.age + " yrs"}
                </span>
              </Typography>
            </Paper>
            <Paper elevation={2} sx={{ padding: "16px" }}>
              <Typography
                variant="body1"
                fontWeight="600"
                sx={{ fontStyle: "italic" }}
                fontSize="18px"
              >
                BMI:
                <span style={{ fontWeight: "400" }}>
                  {" " + user.weight + " kg"}
                </span>
              </Typography>
            </Paper>
          </Stack>
        </Grid>
        <Grid item xs={9}>
          <Grid item xs={12} mt={2}>
            {/* <Paper elevation={2} sx={{padding:"16px"}}> */}
            <Typography variant="body1" fontWeight="600" fontSize="18px">
              Active Mobility:
            </Typography>
            {/* </Paper> */}
          </Grid>
          <Grid container mt={2}>
            <Grid item xs={3}>
              <Typography
                variant="body1"
                fontWeight="600"
                fontSize="18px"
                color={
                  userMobility.shoulder === true ? "success.main" : "error.main"
                }
              >
                Shoulder{" "}
                {userMobility.shoulder === true ? (
                  <TaskAltIcon
                    sx={{ transform: "translateY(5px)" }}
                    color="success.main"
                  />
                ) : (
                  <CancelOutlinedIcon
                    sx={{ transform: "translateY(5px)" }}
                    color="error.main"
                  />
                )}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="body1"
                fontWeight="600"
                fontSize="18px"
                color={
                  userMobility.elbow === true ? "success.main" : "error.main"
                }
              >
                Elbow{" "}
                {userMobility.elbow === true ? (
                  <TaskAltIcon
                    sx={{ transform: "translateY(5px)" }}
                    color="success.main"
                  />
                ) : (
                  <CancelOutlinedIcon
                    sx={{ transform: "translateY(5px)" }}
                    color="error.main"
                  />
                )}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="body1"
                fontWeight="600"
                fontSize="18px"
                color={
                  userMobility.knee === true ? "success.main" : "error.main"
                }
              >
                Knee{" "}
                {userMobility.knee === true ? (
                  <TaskAltIcon
                    sx={{ transform: "translateY(5px)" }}
                    color="success.main"
                  />
                ) : (
                  <CancelOutlinedIcon
                    sx={{ transform: "translateY(5px)" }}
                    color="error.main"
                  />
                )}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              {" "}
              <Typography
                variant="body1"
                fontWeight="600"
                fontSize="18px"
                color={
                  userMobility.ankle === true ? "success.main" : "error.main"
                }
              >
                Ankle{" "}
                {userMobility.ankle === true ? (
                  <TaskAltIcon
                    sx={{ transform: "translateY(5px)" }}
                    color="success.main"
                  />
                ) : (
                  <CancelOutlinedIcon
                    sx={{ transform: "translateY(5px)" }}
                    color="error.main"
                  />
                )}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="h4" mt={6}>
        Design a workout plan
      </Typography>
      <Grid container justifyContent="center" spacing={2} mt={2}>
        <Grid item sx={{ width: "28%" }}>
          <Card
            onClick={()=>navigate('/createworkout/muscle',{state:{name:"chest"}})}
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
            onClick={()=>navigate('/createworkout/muscle',{state:{name:"back"}})}
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
          onClick={()=>navigate('/createworkout/muscle',{state:{name:"shoulder"}})}
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
          onClick={()=>navigate('/createworkout/muscle',{state:{name:"legs"}})}
          
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
            onClick={()=>navigate('/createworkout/muscle',{state:{name:"arms"}})}
            
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
          onClick={()=>navigate('/createworkout/muscle',{state:{name:"abs"}})}
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

export default Userfullinfo;
