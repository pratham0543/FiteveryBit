import React from "react";
import { Box, Typography, TextField, Grid, Paper, Stack, IconButton,Checkbox, Button } from "@mui/material";

import logImage from "../../assets/registration.jpg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { Link } from "react-router-dom";
const Signup = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword=()=>
  {
    setShowPassword(!showPassword);
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="stretch"
        sx={{
          position: "relative",
          top: "72px",
          overflow: "hidden",
          // height: "calc(100vh - 72px)",
        }}
      >
        <Grid
          item
          sm={6}
          md={4}
          sx={{
            backgroundImage: `url(${logImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            verticalAlign: "center",
            display: { xs: "none", sm: "block" },
            height: "calc(100vh - 72px)"
          }}
        >
          
         
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <Stack
            spacing={2}
         
            sx={{ padding: "15px",mt:"8px" }}
          >
            <Typography variant="h4" fontWeight="600">
              Create your Fitevery<span style={{ color: "#0AAE59" }}>Bit</span>{" "}
              account
            </Typography>
            <Paper
              sx={{ padding: "10px", paddingBottom: "12px" }}
              elevation={0}
            >
              <form>
                <Typography fontSize="14px">First Name</Typography>
                <TextField
                  color="secondary"
                  InputProps={{
                    style: {
                      fontSize: "14px",
                    },
                  }}
                  variant="outlined"
                  fullWidth
                />
                <Typography fontSize="14px" mt={2}>
                  Last Name
                </Typography>
                <TextField
                  color="secondary"
                  InputProps={{
                    style: {
                      fontSize: "14px",
                    
                    },
                  }}
                  variant="outlined"
                  fullWidth
                />
                 <Typography fontSize="14px" mt={2}>
                  Email
                </Typography>
                <TextField
                  color="secondary"
                  type="email"
                  InputProps={{
                    style: {
                      fontSize: "14px",
                     
                    },
                  }}
                  variant="outlined"
                  fullWidth
                />

                <Typography fontSize="14px" mt={2}>
                  Contact no
                </Typography>
                <TextField
                  color="secondary"
                  InputProps={{
                    style: {
                      fontSize: "14px"
                    },
                  }}
                  variant="outlined"
                  fullWidth
                />

                <Typography fontSize="14px" mt={2}>
                  Password
                </Typography>
                <TextField
                  color="secondary"
                  type={showPassword?"text":"password"}
                  InputProps={{
                    style: {
                      fontSize: "14px",
                    },
                    endAdornment:<InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}   onMouseDown={handleMouseDownPassword}> 
                              {showPassword?<VisibilityOff/>:<Visibility/>}
                            </IconButton>
                    
                    </InputAdornment>
                  }}
                  variant="outlined"
                



                  fullWidth
                />
                  <Box mt={2} sx={{textAlign:"center"}} display="flex" >
              <Checkbox color="secondary" />
             <Typography variant="body2" sx={{alignSelf:"center"}}> I accept the <Link> <span style={{ color: "#0AAE59" }}>Privacy Policy</span></Link>  and the <Link> <span style={{ color: "#0AAE59" }}>Terms of Service</span></Link></Typography>
            </Box>
                  <Box mt={2} display="flex">
                <Button variant="contained" color="secondary" sx={{color:"white"}}>
                    Signup
                </Button>
                <Typography sx={{alignSelf:"center",ml:"4px"}} variant="body2">Already have an account? <Link> <span style={{ color: "#0AAE59" }}>LogIn</span></Link></Typography>
                </Box>
              </form>
            </Paper>
          </Stack>
        </Grid>
        
      </Grid>
    </>
  );
};

export default Signup;
