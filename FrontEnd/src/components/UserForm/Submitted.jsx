import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Submitted = () => {
  const navigate = useNavigate();

  return (
    <Box
      mt={11}
      mb={11}
      sx={{ height: "70vh", width: "100%" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4" mb={2}>
        <span style={{ color: "#0AAE59" }}>Thank you</span> for submitting your
        details. We will plan your workout shortly.
      </Typography>
      <Typography variant="h6" mb={2}>
        You'll be notified when your plan is ready
      </Typography>
      <Box>
        <Button
          onClick={() => navigate("/")}
          color="secondary"
          variant="contained"
          sx={{ color: "white",marginRight:"2em" }}
        >
          Go to Home
        </Button>
        <Button
        onClick={() => navigate("/exerciseDetails")}
        sx={{ color: "white" }}
        variant="contained"
        color="secondary"
      >
            Explore exercises
        </Button>
      </Box>
    </Box>
  );
};

export default Submitted;
