import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
  DialogTitle,
  Typography,
  Checkbox,
  Stack,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Mobilitycheck = () => {
  const [open, setOpen] = useState(true);
  const [checkbox, setcheckbox] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  useEffect(() => {
    handleClickOpen();
  }, []);
  const instructions = [
    "The AI model is still in development and results might not be 100% accurate",
    "Ensure you are sitting in a well lit room with source of light behind camera",
    "Make sure while recording video, your whole body is visible",
  ];
  const instructionsListItems = instructions.map((myList, index) => {
    return <li key={index}>{myList}</li>;
  });
  const oncheckboxclick = () => {
    setcheckbox(!checkbox);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const button = checkbox ? (
    <Button
      // onClick={handleClose}
      autoFocus
      style={{ marginRight: "10%" }}
      variant="contained"
      color="secondary"
      sx={{ color: "white" }}
      onClick={() =>
        navigate("/mobilitycheck", {
          state: {
            height: location.state.height,
            weight: location.state.weight,
            workoutgoal: location.state.workoutgoal,
            level: location.state.level,
            shouldermobility: location.state.shouldermobility,
            anklemobility: location.state.anklemobility,
            elbowmobility: location.state.elbowmobility,
            kneemobility: location.state.kneemobility,
          },
        })
      }
    >
      Agree
    </Button>
  ) : (
    <Button
      // onClick={handleClose}
      autoFocus
      style={{ marginRight: "10%" }}
      variant="contained"
      color="secondary"
      sx={{ color: "white" }}
      disabled
    >
      Agree
    </Button>
  );
  return (
    <Dialog
      open={open}
      // onClose={handleClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">Instructions to follow!</DialogTitle>
      <DialogContent>
        <ul>{instructionsListItems}</ul>
        <Stack direction="row">
          <Checkbox onChange={oncheckboxclick} />
          <Typography sx={{ color: "highlight.main" }} mt={1}>
            Please check this checkbox to continue
          </Typography>
        </Stack>
      </DialogContent>

      <DialogActions>{button}</DialogActions>
    </Dialog>
  );
};

export default Mobilitycheck;
