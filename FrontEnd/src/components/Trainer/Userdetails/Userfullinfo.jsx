import { Box, Grid, Typography, Paper, Stack, Card,CardMedia,CardContent,CardActions, CardActionArea } from "@mui/material";
import React from "react";
import back from "../../../assets/backview.jpg";
import front from "../../../assets/frontview.jpg";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useLocation } from "react-router";
import chest from '../../../assets/chest.png'
import chestWhite from '../../../assets/chestWhite.png'
import arms from '../../../assets/arms.png'
import armsWhite from '../../../assets/armsWhite.png'
import legs from '../../../assets/legs.png'
import legsWhite from '../../../assets/legsWhite.png'
import absWhite from '../../../assets/abswhite.png'
import abs from '../../../assets/abs.png'
import shoulders from '../../../assets/shoulders.png'
import shouldersWhite from '../../../assets/shouldersWhite.png'
import backmuscle from '../../../assets/back.png'
import backWhite from '../../../assets/backWhite.png'
import { useState } from "react";
import './userfullInfo.css'
const Userfullinfo = () => {
  const location = useLocation();
  const user = location.state;
  const userMobility = location.state.mobility;
  const [hover, sethover] = useState(false)

 const handleMouseOver=()=>

  sethover(true);
 

 const handleMouseOut=()=>
  sethover(false);
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
        >
          {user.plantype + "-" + user.level}
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
                Shoulder {
                  userMobility.shoulder===true?(
                    <TaskAltIcon sx={{transform:"translateY(5px)"}} color="success.main" />
                  ):
                  <CancelOutlinedIcon sx={{transform:"translateY(5px)"}} color="error.main" />
                }
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" fontWeight="600" fontSize="18px"  color={
                  userMobility.elbow === true ? "success.main" : "error.main"
                }>
                Elbow  {
                  userMobility.elbow===true?(
                    <TaskAltIcon sx={{transform:"translateY(5px)"}} color="success.main" />
                  ):
                  <CancelOutlinedIcon sx={{transform:"translateY(5px)"}} color="error.main" />
                }
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" fontWeight="600" fontSize="18px"  color={
                  userMobility.knee === true ? "success.main" : "error.main"
                }>
                Knee  {
                  userMobility.knee===true?(
                    <TaskAltIcon sx={{transform:"translateY(5px)"}} color="success.main" />
                  ):
                  <CancelOutlinedIcon sx={{transform:"translateY(5px)"}} color="error.main" />
                }
              </Typography>
            </Grid>
            <Grid item xs={3}>
              {" "}
              <Typography variant="body1" fontWeight="600" fontSize="18px"  color={
                  userMobility.ankle === true ? "success.main" : "error.main"
                }>
                Ankle  {
                  userMobility.ankle===true?(
                    <TaskAltIcon sx={{transform:"translateY(5px)"}} color="success.main" />
                  ):
                  <CancelOutlinedIcon sx={{transform:"translateY(5px)"}} color="error.main" />
                }
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="h4" mt={6}>
        Design a workout plan
      </Typography>
      <Grid container justifyContent="center" spacing={2} mt={2}>
          <Grid item sx={{width:"28%"}}>
                <Card className="card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                  <CardActionArea>
                  <CardMedia
                    component="img"
                    image={!hover?chest:chestWhite}
                    alt="chest" 
                    sx={{
                      height:"187px",
                      objectFit:"contain"
                    }}
                   
                  />
                  <CardContent>
                    <Typography variant="body1" fontWeight="600" fontSize="18px" textAlign="center"> 
                   Chest Workout
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
          </Grid>
          <Grid item sx={{width:"28%"}}>
          <Card className="card" > <CardActionArea>

                  <CardMedia
                    component="img"
                    image={backmuscle}
                    alt="back" 
                    sx={{
                      height:"187px",
                      objectFit:"contain"
                    }}
                   
                  />
                  <CardContent>
                    <Typography variant="body1" fontWeight="600" fontSize="18px" textAlign="center">
                        Back Workout
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
          </Grid>
          <Grid item sx={{width:"28%"}}>
          <Card className="card"> <CardActionArea>
                  <CardMedia
                    component="img"
                    image={shoulders}
                    alt="Shoulder" 
                    sx={{
                      height:"187px",
                      objectFit:"contain"
                    }}
                   
                  />
                  <CardContent>
                    <Typography variant="body1" fontWeight="600" fontSize="18px" textAlign="center">
                        Shoulder Workout
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
          </Grid>
          <Grid item xs={12}>

          </Grid>
          <Grid item sx={{width:"28%"}}>
          <Card className="card"> <CardActionArea>
                  <CardMedia
                    component="img"
                    image={legs}
                    alt="Legs" 
                    sx={{
                      height:"187px",
                      objectFit:"contain",
                     
                    }}
                   
                  />
                  <CardContent>
                    <Typography variant="body1" fontWeight="600" fontSize="18px" textAlign="center">
                        Legs Workout
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
          </Grid>
          <Grid item sx={{width:"28%"}}>
          <Card className="card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> <CardActionArea>
                  <CardMedia
                    component="img"
                    image={!hover?arms:armsWhite}
                    alt="Arms" 
                    sx={{
                      height:"187px",
                      objectFit:"contain"
                    }}
                   
                  />
                  <CardContent>
                    <Typography variant="body1" fontWeight="600" fontSize="18px" textAlign="center">
                        Arms Workout
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
          </Grid>
          <Grid item sx={{width:"28%"}}>
          <Card className="card"> <CardActionArea>
                  <CardMedia
                    component="img"
                    image={abs}
                    alt="abdominals" 
                    sx={{
                      height:"187px",
                      objectFit:"contain"
                    }}
                   
                  />
                  <CardContent>
                    <Typography  variant="body1" fontWeight="600" fontSize="18px" textAlign="center">
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
