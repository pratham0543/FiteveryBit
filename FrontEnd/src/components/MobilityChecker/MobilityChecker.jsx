import React from "react";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useRef } from "react";
import RecordRTC from "recordrtc";
import axios from "axios";
import AccordionItem from "./AccordionItem";

export default function MobilityChecker() {
  const [shoulder1check, setshoulder1check] = useState("");
  const videoRef = useRef(null);
  const recorderRef = useRef(null);
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      videoRef.current.srcObject = stream;
      recorderRef.current = new RecordRTC(stream, { type: "video" });
    });
  function stopRecording() {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const formData = new FormData();
      formData.append("video", blob);
      axios
        .post("http://127.0.0.1:8000/mobility/shoulder1/", formData)
        .then((response) => {
          // alert(`The test ${response.data.result}!!`);
          if (response.data.result === "PASSED") {
            setshoulder1check("success");
          } else if (response.data.result === "FAILED") {
            setshoulder1check("error");
          }
        })
        .catch((err) => console.log(err));
    });
  }
  const startRecording = () => {
    recorderRef.current.startRecording();
    setTimeout(() => {
      stopRecording();
    }, 5000);
  };
  const startRecordDelay = () => {
    setTimeout(() => {
      startRecording();
    }, 5000);
  };
  return (
    <Grid container mt={12} mb={10} ml={5}>
      <Grid item xs={6}>
        <video ref={videoRef} autoPlay />
      </Grid>
      <Grid item xs={5} mt={2}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Shoulder Tests</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionItem
              severity={shoulder1check}
              start={startRecordDelay}
              title="Shoulder Flexion Test"
            />
            <AccordionItem severity="success" title="Shoulder Extension Test" />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Knee Tests</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionItem severity="success" title="shoulder1" />
            <AccordionItem severity="success" title="shoulder1" />
            <AccordionItem severity="success" title="shoulder1" />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Ankle Tests</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionItem severity="success" title="shoulder1" />
            <AccordionItem severity="success" title="shoulder1" />
            <AccordionItem severity="success" title="shoulder1" />
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}
