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
  const [shoulderFlexsioncheck, setshoulderFlexsioncheck] = useState("");
  const [shoulderExtensioncheck, setshoulderExtensioncheck] = useState("");
  const [elbowleftFlexsioncheck, setelbowleftFlexsioncheck] = useState("");
  const [elbowrightFlexsioncheck, setelbowrightFlexsioncheck] = useState("");
  const [elbowleftExtensioncheck, setelbowleftExtensioncheck] = useState("");
  const [elbowrightExtensioncheck, setelbowrightExtensioncheck] = useState("");
  const videoRef = useRef(null);
  const recorderRef = useRef(null);
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      videoRef.current.srcObject = stream;
      recorderRef.current = new RecordRTC(stream, { type: "video" });
    });
  //start-stop tests functions

  //shoulder flexsion
  function stopRecordingShoulderFlexsion() {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const formData = new FormData();
      formData.append("video", blob);
      axios
        .post("http://127.0.0.1:8000/mobility/shoulder1/", formData)
        .then((response) => {
          // alert(`The test ${response.data.result}!!`);
          if (response.data.result === "PASSED") {
            setshoulderFlexsioncheck("success");
          } else if (response.data.result === "FAILED") {
            setshoulderFlexsioncheck("error");
          }
        })
        .catch((err) => console.log(err));
    });
  }
  const startRecordingShoulderFlexsion = () => {
    recorderRef.current.startRecording();
    setTimeout(() => {
      stopRecordingShoulderFlexsion();
    }, 5000);
  };
  const startRecordDelayShoulderFlexsion = () => {
    setTimeout(() => {
      startRecordingShoulderFlexsion();
    }, 5000);
  };

  //shoulder extension tests

  function stopRecordingShoulderExtension() {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const formData = new FormData();
      formData.append("video", blob);
      axios
        .post("http://127.0.0.1:8000/mobility/shoulder2/", formData)
        .then((response) => {
          if (response.data.result === "PASSED") {
            setshoulderExtensioncheck("success");
          } else if (response.data.result === "FAILED") {
            setshoulderExtensioncheck("error");
          }
        })
        .catch((err) => console.log(err));
    });
  }
  const startRecordingShoulderExtension = () => {
    recorderRef.current.startRecording();
    setTimeout(() => {
      stopRecordingShoulderExtension();
    }, 5000);
  };
  const startRecordDelayShoulderExtension = () => {
    setTimeout(() => {
      startRecordingShoulderExtension();
    }, 5000);
  };
  //elbow flexsion left
  function stopRecordingElbowLeftFlexsion() {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const formData = new FormData();
      formData.append("video", blob);
      axios
        .post("http://127.0.0.1:8000/mobility/shoulder2/", formData)
        .then((response) => {
          if (response.data.result === "PASSED") {
            setelbowleftFlexsioncheck("success");
          } else if (response.data.result === "FAILED") {
            setelbowleftFlexsioncheck("error");
          }
        })
        .catch((err) => console.log(err));
    });
  }
  const startRecordingElbowLeftFlexsion = () => {
    recorderRef.current.startRecording();
    setTimeout(() => {
      stopRecordingElbowLeftFlexsion();
    }, 5000);
  };
  const startRecordDelayElbowFlexsionLeft = () => {
    setTimeout(() => {
      startRecordingElbowLeftFlexsion();
    }, 5000);
  };
  //elbow flexsion right
  function stopRecordingElbowRightFlexsion() {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const formData = new FormData();
      formData.append("video", blob);
      axios
        .post("http://127.0.0.1:8000/mobility/shoulder2/", formData)
        .then((response) => {
          if (response.data.result === "PASSED") {
            setelbowrightFlexsioncheck("success");
          } else if (response.data.result === "FAILED") {
            setelbowrightFlexsioncheck("error");
          }
        })
        .catch((err) => console.log(err));
    });
  }
  const startRecordingElbowRightFlexsion = () => {
    recorderRef.current.startRecording();
    setTimeout(() => {
      stopRecordingElbowRightFlexsion();
    }, 5000);
  };
  const startRecordDelayElbowFlexsionRight = () => {
    setTimeout(() => {
      startRecordingElbowRightFlexsion();
    }, 5000);
  };

  //elbow extension left
  function stopRecordingElbowLeftExtension() {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const formData = new FormData();
      formData.append("video", blob);
      axios
        .post("http://127.0.0.1:8000/mobility/shoulder2/", formData)
        .then((response) => {
          if (response.data.result === "PASSED") {
            setelbowleftExtensioncheck("success");
          } else if (response.data.result === "FAILED") {
            setelbowleftExtensioncheck("error");
          }
        })
        .catch((err) => console.log(err));
    });
  }
  const startRecordingElbowLeftExtension = () => {
    recorderRef.current.startRecording();
    setTimeout(() => {
      stopRecordingElbowLeftExtension();
    }, 5000);
  };
  const startRecordDelayElbowExtensionLeft = () => {
    setTimeout(() => {
      startRecordingElbowLeftExtension();
    }, 5000);
  };
//elbow right extension
function stopRecordingElbowRightExtension() {
  recorderRef.current.stopRecording(() => {
    const blob = recorderRef.current.getBlob();
    const formData = new FormData();
    formData.append("video", blob);
    axios
      .post("http://127.0.0.1:8000/mobility/shoulder2/", formData)
      .then((response) => {
        if (response.data.result === "PASSED") {
          setelbowrightExtensioncheck("success");
        } else if (response.data.result === "FAILED") {
          setelbowrightExtensioncheck("error");
        }
      })
      .catch((err) => console.log(err));
  });
}
const startRecordingElbowRightExtension = () => {
  recorderRef.current.startRecording();
  setTimeout(() => {
    stopRecordingElbowRightExtension();
  }, 5000);
};
const startRecordDelayElbowExtensionRight = () => {
  setTimeout(() => {
    startRecordingElbowRightExtension();
  }, 5000);
};

  return (
    <Grid container mt={12} mb={10} ml={5}>
      <Grid item xs={6}>
        <video ref={videoRef} autoPlay />
      </Grid>
      <Grid item xs={5} mt={2}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Shoulder Tests</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionItem
              severity={shoulderFlexsioncheck}
              start={startRecordDelayShoulderFlexsion}
              title="Shoulder Flexion Test"
            />
            <AccordionItem
              severity={shoulderExtensioncheck}
              start={startRecordDelayShoulderExtension}
              title="Shoulder Extension Test"
            />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Knee Tests</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionItem severity="success" title="knee 1" />
            <AccordionItem severity="success" title="knee 2" />
            <AccordionItem severity="success" title="knee 3" />
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
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Elbow Tests</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Elbow Flexison</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <AccordionItem severity={elbowleftFlexsioncheck} start={startRecordDelayElbowFlexsionLeft} title="Elbow Flexion Left" />
                <AccordionItem severity={elbowrightFlexsioncheck} start={startRecordDelayElbowFlexsionRight} title="Elbow Flexion Right" />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Elbow Extension</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <AccordionItem
                  severity={elbowleftExtensioncheck}
                  title="Elbow Extension Left"
                  start={startRecordDelayElbowExtensionLeft}
                />
                <AccordionItem
                  severity={elbowrightExtensioncheck}
                  title="Elbow Extension Right"
                  start={startRecordDelayElbowExtensionRight}
                />
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}
