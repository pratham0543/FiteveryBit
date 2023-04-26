import React from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Paper,
  Stack,
  IconButton,
  Checkbox,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

import logImage from "../../assets/registration.jpg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
const validationSchema = yup.object({
  firstname: yup
    .string("Enter a valid name")
    .min(3, "Minimum length is 3")
    .required("First name required"),
  lastname: yup
    .string("Enter a valid name")
    .min(3, "Minimum length is 3")
    .required(" last name required"),
  age: yup
    .number("Enter your age")
    .positive("Age cannot be negative")
    .min(18, "Minimum age should be 18")
    .required("Age is required")
    .integer(),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .required("Password is required")
    .min(8, "Minimum length is 8"),

  phoneno: yup
    .string("Enter a 10 digit number")
    .min(10, "Please enter a valid 10 digit number")
    .max(10, "Number cannot exceed 10 digit limit")
    .matches("^[0-9]*$", { message: "Please enter only digit" })
    .required("Contact number is required"),
});

const Signup = (props) => {
  // to show hide password with eye
  const [showPassword, setShowPassword] = useState(false);
  //this is the chekcbox state
  const [checked, setchecked] = useState(true);


  //successful user snackbar 
  const [open, setOpen] = useState(false);

  //unsuccessfull user snackbar
  const [erropen,setErropen]=useState(false);
  const [errormes, seterrormes] = useState('')
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //handle close for closing snackbars
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setErropen(false);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phoneno: 0,
      age: 0,
      firstname: "",
      lastname: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      axios
        .post("http://localhost:3200/signup", values)
        .then((result) => {
          setOpen(true);
        })
        .catch((err) => {
          seterrormes(err.response.data.message)
          setErropen(true);
        });
    },
  });

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
            backgroundPosition: "center center",

            display: { xs: "none", sm: "block" },
            height: "128.6vh",
          }}
        ></Grid>
        <Grid item xs={12} sm={5} md={3}>
          <Stack spacing={2} sx={{ padding: "15px", mt: "8px" }}>
            <Typography variant="h4" fontWeight="600">
              Create your Fitevery<span style={{ color: "#0AAE59" }}>Bit</span>{" "}
              account
            </Typography>
            <Paper
              sx={{ padding: "10px", paddingBottom: "12px" }}
              elevation={0}
            >
              <form onSubmit={formik.handleSubmit}>
                <Typography fontSize="14px">First Name</Typography>
                <TextField
                  color="secondary"
                  InputProps={{
                    style: {
                      fontSize: "14px",
                    },
                  }}
                  value={formik.values.firstname}
                  variant="outlined"
                  id="firstname"
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstname && Boolean(formik.errors.firstname)
                  }
                  helperText={
                    formik.touched.firstname && formik.errors.firstname
                  }
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
                  id="lastname"
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastname && Boolean(formik.errors.lastname)
                  }
                  helperText={formik.touched.lastname && formik.errors.lastname}
                  fullWidth
                />
                <Typography fontSize="14px" mt={2}>
                  Age
                </Typography>
                <TextField
                  color="secondary"
                  type="number"
                  InputProps={{
                    style: {
                      fontSize: "14px",
                    },
                  }}
                  variant="outlined"
                  id="age"
                  onChange={formik.handleChange}
                  error={formik.touched.age && Boolean(formik.errors.age)}
                  helperText={formik.touched.age && formik.errors.age}
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
                  id="email"
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  fullWidth
                />

                <Typography fontSize="14px" mt={2}>
                  Contact no
                </Typography>
                <TextField
                  color="secondary"
                  InputProps={{
                    style: {
                      fontSize: "14px",
                    },
                  }}
                  variant="outlined"
                  id="phoneno"
                  onChange={formik.handleChange}
                  error={
                    formik.touched.phoneno && Boolean(formik.errors.phoneno)
                  }
                  helperText={formik.touched.phoneno && formik.errors.phoneno}
                  type="number"
                  fullWidth
                />

                <Typography fontSize="14px" mt={2}>
                  Password
                </Typography>
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
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  fullWidth
                />
                <Box mt={2} sx={{ textAlign: "center" }} display="flex">
                  <Checkbox
                    color={checked ? "secondary" : "error"}
                    onChange={(e) => setchecked(e.target.checked)}
                  />
                  <Typography
                    color={checked ? "" : "error"}
                    variant="body2"
                    sx={{ alignSelf: "center" }}
                  >
                    {" "}
                    I accept the{" "}
                    <Link>
                      {" "}
                      <span style={{ color: "#0AAE59" }}>Privacy Policy</span>
                    </Link>{" "}
                    and the{" "}
                    <Link>
                      {" "}
                      <span style={{ color: "#0AAE59" }}>Terms of Service</span>
                    </Link>
                  </Typography>
                </Box>
                <Box mt={2} display="flex">
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{ color: "white" }}
                  >
                    Signup
                  </Button>
                  <Typography
                    sx={{ alignSelf: "center", ml: "4px" }}
                    variant="body2"
                  >
                    Already have an account?{" "}
                    <Link to="/login">
                      {" "}
                      <span style={{ color: "#0AAE59" }}>LogIn</span>
                    </Link>
                  </Typography>
                </Box>
              </form>
            </Paper>
          </Stack>
        </Grid>
      </Grid>

      {/* will show only on successfull user creation  */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
        
          color="secondary"
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
         User Created Successfully
        </Alert>
      </Snackbar>

      {/* will show on error */}
      <Snackbar open={erropen} autoHideDuration={6000} onClose={handleClose}>
        <Alert
        color="error"
          onClose={handleClose}
          
          sx={{ width: "100%" }}
        >
         {errormes}
        </Alert>
      </Snackbar>

    </>
  );
};

export default Signup;
