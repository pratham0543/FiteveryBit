import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import RecordRTC from "recordrtc";
import axios from "axios";

export default function MobilityChecker() {
  const [open, setOpen] = useState(true);
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

  const videoRef = useRef(null);
  const recorderRef = useRef(null);
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      videoRef.current.srcObject = stream;
      recorderRef.current = new RecordRTC(stream, { type: "video" });
    });
    const stopRecording = () => {
      recorderRef.current.stopRecording(() => {
        const blob = recorderRef.current.getBlob();
        const formData = new FormData();
        formData.append("video", blob);
        axios
          .post("http://127.0.0.1:8000/mobility/shoulder1/", formData)
          .then((response) => alert(`The test ${response.data.result}!!`))
          .catch(console.log("error"))
      });
  };
  const startRecording = () => {
    setTimeout(()=>{
      recorderRef.current.startRecording();
    stopRecordingDelay();
    },5000)
  };
  const stopRecordingDelay=()=>{
    setTimeout(stopRecording,5000);
  }
  return (
    <div>
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
        </DialogContent>
        <DialogActions>
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
        </DialogActions>
      </Dialog>

      <Grid container mb={12} mt={11} ml={4} sx={{}}>
        <Grid item xs={6}>
          <video ref={videoRef} autoPlay />
          <Button
            onClick={startRecording}
            variant="contained"
            color="secondary"
            sx={{ color: "white" }}
          >
            Start Recording
          </Button>
          <Button
            onClick={stopRecording}
            variant="contained"
            color="secondary"
            sx={{ color: "white" }}
          >
            Stop Recording
          </Button>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  );
}
