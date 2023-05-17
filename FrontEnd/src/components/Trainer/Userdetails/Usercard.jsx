import React from "react";
import {
  Typography,
  Box,
  Paper,
  Avatar,
  Grid,
  Stack,
  Button,
 
} from "@mui/material";
import { pink } from "@mui/material/colors";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useNavigate } from "react-router";
const Usercard = (props) => {
  const navigate=useNavigate();
  // console.log(props.userinfo);
  return (
    <Grid item xs={12} sm={3}>
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          px: "16px",
          justifyContent: "center",
          alignItems: "center",
          pb:"16px",
          borderRadius:"20px"
        }}
      >
        <Avatar sx={{ width: 70, height: 70, bgcolor: `${pink[400]}`,position:"relative",bottom:"25px" }} alt={props.name}
        >
         {props.userinfo.firstname.charAt(0)+" "+props.userinfo.lastname.charAt(0)}
        </Avatar>
        <Stack width="100%" spacing={3}>
          <Stack sx={{ alignItems: "center" }}>
            <Typography variant="h6" fontWeight="600">
              {props.name}
            </Typography>
            <Typography variant="subtitle1" color="cap.main">
              {props.level}
            </Typography>
          </Stack>
          <Grid container justifyContent="space-between" rowSpacing={2}>
            <Grid item xs={5}>
              <Typography variant="body1" fontWeight="600">
                Goal: <span style={{fontWeight:"400"}}>{" " + props.userinfo.workoutgoal}</span>
                
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="body1"
                fontWeight="600"
              >
                Contact: <span style={{fontWeight:"400"}}>{" " + props.contactno}</span>
                
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1" fontWeight="600" color={props.isAiMobility==="true"?'success.main':'error.main'}>
                Aimobility:{
                  props.isAiMobility==="true"?(
                    <TaskAltIcon sx={{transform:"translateY(5px)"}} color="success.main" />
                  ):
                  <CancelOutlinedIcon sx={{transform:"translateY(5px)"}} color="error.main" />
                }
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" fontWeight="600">
                Age:<span style={{fontWeight:"400"}}>{" " + props.age}</span>
              </Typography>
            </Grid>
          </Grid>

          <Box textAlign="center">
            <Button
              
              variant="contained"
              color="secondary"
              sx={{ color: "true.main", width: "50%" }}
              onClick={()=>navigate('/createworkout',{state:props.userinfo})}
            >
              Create
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default Usercard;
