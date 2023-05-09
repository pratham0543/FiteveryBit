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
  Stack
} from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Mobilitycheck = () => {
  const [open, setOpen] = useState(true);
  const [checkbox, setcheckbox] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    handleClickOpen();
  }, []);
  const instructions = [
    "The AI model is still in development and results might not be 100% accurate",
    "The AI model is still in development and results might not be 100% accurate",
    "The AI model is still in development and results might not be 100% accurate",
  ];
  const instructionsListItems = instructions.map((myList) => {
    return <li>{myList}</li>;
  });
  const oncheckboxclick = () => {
    setcheckbox(!checkbox);
  };
  const button = checkbox ? (
    <Link to="/mobilitycheck">
      <Button
        onClick={handleClose}
        autoFocus
        style={{ marginRight: "10%" }}
        variant="contained"
        color="secondary"
        sx={{ color: "white" }}
      >
        Agree
      </Button>
    </Link>
  ) : (
    <Link to="/mobilitycheck">
      <Button
        onClick={handleClose}
        autoFocus
        style={{ marginRight: "10%" }}
        variant="contained"
        color="secondary"
        sx={{ color: "white" }}
        disabled
      >
        Agree
      </Button>
    </Link>
  );
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">Instruction!</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description">
          <ul>{instructionsListItems}</ul>
        </DialogContentText>
        <Stack direction="row">
        <Checkbox onChange={oncheckboxclick} />
        <Typography sx={{ color: "highlight.main" }} mt={1} >
          Please check this checkbox to continue
        </Typography>
        </Stack>
      </DialogContent>

      <DialogActions>{button}</DialogActions>
    </Dialog>
  );
};

export default Mobilitycheck;
