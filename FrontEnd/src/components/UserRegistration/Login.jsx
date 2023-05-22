import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import {
  Grid,
  TextField,
  Typography,
  Box,
  Stack,
  InputAdornment,
  IconButton,
  Button,
  Snackbar,
  Alert,
  Switch,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import loginImage from "../../assets/loginImage.jpg";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = new yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup.string("Enter your password").required("Password is required"),
});


const Login = () => {
  //code for redirecting
  const navigate = useNavigate();
  //state for checking trainer or not
  const [isTrainer,setisTrainer]=useState(false);
  const [showPassword, setShowPassword] = useState(false);
  //for snackbar
  const [open, setopen] = useState(false);
  const [erropen, seterrOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    seterrOpen(false);
  };


  const handleSlide=(e)=>
  {
    setisTrainer(e.target.checked);

  }




  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      var usercall='login'
      if(isTrainer===true)
        usercall='trainerlogin'
      axios
        .post(`http://localhost:3200/${usercall}`, values)
        .then((result) => {
          setopen(true);
          const userDetails = jwt_decode(result.data.token);
          console.log(userDetails)
          localStorage.setItem("id", userDetails.userId);
          localStorage.setItem("email", userDetails.email);
          localStorage.setItem("usertype", userDetails.user_type);
          localStorage.setItem("fname", userDetails.firstname);
          localStorage.setItem("lname", userDetails.lastname);
          localStorage.setItem("visitedmobility", userDetails.visitedmobility);
          localStorage.setItem("workoutcreated",userDetails.workoutcreated)
          console.log(localStorage)
          if(isTrainer)
          localStorage.setItem("usersAssigned",userDetails.user_assigned)
          setTimeout(() => navigate("/"), 200);
        })
        .catch((err) => {
          console.log("error");
          seterrOpen(true);
        });
    },
  });
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid
        container
        direction="row"
        sx={{ position: "relative", top: "72px" }}
        justifyContent="space-evenly"
      >
        <Grid
          item
          xs={12}
          sm={6}
          md="auto"
          lg={3}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding={2}
          mx="auto"
        >
          <Typography variant="h4" fontWeight="600" textAlign="center">
            Login to your Fitevery<span style={{ color: "#0AAE59" }}>Bit</span>{" "}
            account
          </Typography>
          <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
            <Stack mt={2} spacing={2}>
              <Box>
                <Typography fontSize="14px">Email</Typography>
                <TextField
                  type="email"
                  color="secondary"
                  InputProps={{
                    style: {
                      fontSize: "14px",
                    },
                  }}
                  id="email"
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  fullWidth
                />
              </Box>
              <Box>
                <Typography fontSize="14px">Password</Typography>
                <TextField
                  color="secondary"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    style: {
                      fontSize: "14px",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  id="password"
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  fullWidth
                />
              </Box>
              <Box>
                <Typography fontSize="14px">Are u a trainer?</Typography>
                <Typography fontSize="14px" component="span">No</Typography>
                <Switch
                  checked={isTrainer}
                 color="secondary"
                 onChange={handleSlide}
                />
            <Typography fontSize="14px" component="span">Yes</Typography>
            
              </Box>
            </Stack>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              sx={{ color: "true.main", mt: "16px" }}
            >
              Login
            </Button>
          </form>
        </Grid>
        <Grid
          item
          sm={7}
          md={12}
          lg={8}
          sx={{
            height: "calc(100vh - 72px)",
            backgroundImage: `url(${loginImage})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            padding: "16px",
            display: { xs: "none", md: "block" },
          }}
        >
          <Typography
            variant="body1"
            color="true.main"
            fontWeight="600"
            sx={{
              position: "relative",
              top: "20%",
              textTransform: "capitalize",
              left: "5%",
              fontSize: "1.5rem",
              width: "fit-content",
            }}
          >
            Your <span style={{ color: "#0AAE59" }}>Health</span> account, your
            bank account, they’re the <br />{" "}
            <span style={{ color: "#0AAE59" }}>Same</span> thing.
            <br />
            The <span style={{ color: "#0AAE59" }}>More</span> you put in, the
            more you can take <span style={{ color: "#0AAE59" }}>Out.</span>{" "}
            <br />
            Exercise is <span style={{ color: "#0AAE59" }}>King</span> and
            nutrition is <span style={{ color: "#0AAE59" }}>Queen.</span> <br />
            <span style={{ color: "#0AAE59" }}>Together</span> you have a{" "}
            <span style={{ color: "#0AAE59" }}>Kingdom.</span>
          </Typography>
        </Grid>
      </Grid>

      {/* this will show on successful user login */}
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert color="success" onClose={handleClose} sx={{ width: "100%" }}>
          User Login Successful
        </Alert>
      </Snackbar>
      {/* this will show on unsuccessful user login */}
      <Snackbar open={erropen} autoHideDuration={2000} onClose={handleClose}>
        <Alert color="error" onClose={handleClose} sx={{ width: "100%" }}>
          Email or password is incorrect. Please Try again with correct email or
          password
        </Alert>
      </Snackbar>
    </>
  );
};

export default Login;
