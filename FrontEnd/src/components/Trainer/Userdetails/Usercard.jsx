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
import { orange } from "@mui/material/colors";
import testImage from '../../../assets/lazar.jpg'
const Usercard = (props) => {
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
        <Avatar sx={{ width: 70, height: 70, bgcolor: `${orange[800]}`,position:"relative",bottom:"25px" }} alt={props.name}
            src={testImage}
        >
         
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
                Goal:
                <Typography varint="subtitle1" sx={{ display: "inline-block" }}>
                  {" " + props.planType}
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="body1"
                fontWeight="600"
              >
                Contact:
                <Typography
                  varint="subtitle1"
                  sx={{ display: "inline-block" }}
                  color="primary.main"
                >
                  {"+91-" + props.contactno}
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1" fontWeight="600">
                AiMobility:
                <Typography varint="subtitle1" sx={{ display: "inline-block" }}>
                  {" " + props.isAiMobility}
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" fontWeight="600">
                Age:
                <Typography varint="subtitle1" sx={{ display: "inline-block" }}>
                  {" " + props.age}
                </Typography>
              </Typography>
            </Grid>
          </Grid>

          <Box textAlign="center">
            <Button
              
              variant="contained"
              color="secondary"
              sx={{ color: "true.main", width: "50%" }}
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
