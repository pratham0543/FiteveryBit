import React from "react";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import RecordRTC from "recordrtc";
import axios from "axios";
import AccordionItem from "./AccordionItem";

export default function MobilityChecker() {
  const navigate = useNavigate();
  const [shoulderFlexsioncheck, setshoulderFlexsioncheck] = useState("");
  const [shoulderExtensioncheck, setshoulderExtensioncheck] = useState("");
  const [LeftKneecheck, setLeftKneecheck] = useState("");
  const [RightKneecheck, setRightKneecheck] = useState("");
  const [AnkleLeftDorsicheck, setAnkleLeftDorsicheck] = useState("");
  const [AnkleRightDorsicheck, setAnkleRightDorsicheck] = useState("");
  const [AnkleLeftPlantarcheck, setAnkleLeftPlantarcheck] = useState("");
  const [AnkleRightPlantarcheck, setAnkleRightPlantarcheck] = useState("");
  const[ElbowLeftFlexsioncheck,setElbowLeftFlexsioncheck]=useState("");
  const[ElbowRightFlexsioncheck,setElbowRightFlexsioncheck]=useState("");
  const[ElbowLeftExtensioncheck,setElbowLeftExtensioncheck]=useState("");
  const[ElbowRightExtensioncheck,setElbowRightExtensioncheck]=useState("");
  const[videostate,setvideostate]=useState(true);

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
  //left knee extension test 
  function stopRecordingLeftKnee() {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const formData = new FormData();
      formData.append("video", blob);
      axios
        .post("http://127.0.0.1:8000/mobility/knee/", formData)
        .then((response) => {
          if (response.data.result === "PASSED") {
            setLeftKneecheck("success");
          } else if (response.data.result === "FAILED") {
            setLeftKneecheck("error");
          }
        })
        .catch((err) => console.log(err));
    });
  }
  const startRecordingLeftKnee = () => {
    recorderRef.current.startRecording();
    setTimeout(() => {
      stopRecordingLeftKnee();
    }, 5000);
  };
  const startRecordDelayLeftKnee = () => {
    setTimeout(() => {
      startRecordingLeftKnee();
    }, 5000);
  };
  //right knee extension test
  function stopRecordingRightKnee() {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const formData = new FormData();
      formData.append("video", blob);
      axios
        .post("http://127.0.0.1:8000/mobility/knee/", formData)
        .then((response) => {
          if (response.data.result === "PASSED") {
            setRightKneecheck("success");
          } else if (response.data.result === "FAILED") {
            setRightKneecheck("error");
          }
        })
        .catch((err) => console.log(err));
    });
  }
  const startRecordingRightKnee = () => {
    recorderRef.current.startRecording();
    setTimeout(() => {
      stopRecordingRightKnee();
    }, 5000);
  };
  const startRecordDelayRightKnee = () => {
    setTimeout(() => {
      startRecordingRightKnee();
    }, 5000);
  };
  //left ankle dorsi flexsion
  function stopRecordingAnkleLeftDorsi() {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const formData = new FormData();
      formData.append("video", blob);
      axios
        .post("http://127.0.0.1:8000/mobility/leftankle1/", formData)
        .then((response) => {
          if (response.data.result === "PASSED") {
            setAnkleLeftDorsicheck("success");
          } else if (response.data.result === "FAILED") {
            setAnkleLeftDorsicheck("error");
          }
        })
        .catch((err) => console.log(err));
    });
  }
  const startRecordingAnkleLeftDorsi = () => {
    recorderRef.current.startRecording();
    setTimeout(() => {
      stopRecordingAnkleLeftDorsi();
    }, 5000);
  };
  const startRecordDelayAnkleLeftDorsi = () => {
    setTimeout(() => {
      startRecordingAnkleLeftDorsi();
    }, 5000);
  };
  //right ankle dorsi flexsion
  function stopRecordingAnkleRightDorsi() {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const formData = new FormData();
      formData.append("video", blob);
      axios
        .post("http://127.0.0.1:8000/mobility/rightankle1/", formData)
        .then((response) => {
          if (response.data.result === "PASSED") {
            setAnkleRightDorsicheck("success");
          } else if (response.data.result === "FAILED") {
            setAnkleRightDorsicheck("error");
          }
        })
        .catch((err) => console.log(err));
    });
  }
  const startRecordingAnkleRightDorsi = () => {
    recorderRef.current.startRecording();
    setTimeout(() => {
      stopRecordingAnkleRightDorsi();
    }, 5000);
  };
  const startRecordDelayAnkleRightDorsi = () => {
    setTimeout(() => {
      startRecordingAnkleRightDorsi();
    }, 5000);
  };
  //left ankle plantar flexsion
  function stopRecordingAnkleLeftPlantar() {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const formData = new FormData();
      formData.append("video", blob);
      axios
        .post("http://127.0.0.1:8000/mobility/leftankle2/", formData)
        .then((response) => {
          if (response.data.result === "PASSED") {
            setAnkleLeftPlantarcheck("success");
          } else if (response.data.result === "FAILED") {
            setAnkleLeftPlantarcheck("error");
          }
        })
        .catch((err) => console.log(err));
    });
  }
  const startRecordingAnkleLeftPlantar = () => {
    recorderRef.current.startRecording();
    setTimeout(() => {
      stopRecordingAnkleLeftPlantar();
    }, 5000);
  };
  const startRecordDelayAnkleLeftPlantar = () => {
    setTimeout(() => {
      startRecordingAnkleLeftPlantar();
    }, 5000);
  };
  //right ankle plantar flexsion
  function stopRecordingAnkleRightPlantar() {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const formData = new FormData();
      formData.append("video", blob);
      axios
        .post("http://127.0.0.1:8000/mobility/rightankle2/", formData)
        .then((response) => {
          if (response.data.result === "PASSED") {
            setAnkleRightPlantarcheck("success");
          } else if (response.data.result === "FAILED") {
            setAnkleRightPlantarcheck("error");
          }
        })
        .catch((err) => console.log(err));
    });
  }
  const startRecordingAnkleRightPlantar = () => {
    recorderRef.current.startRecording();
    setTimeout(() => {
      stopRecordingAnkleRightPlantar();
    }, 5000);
  };
  const startRecordDelayAnkleRightPlantar = () => {
    setTimeout(() => {
      startRecordingAnkleRightPlantar();
    }, 5000);
  };
  //left elbow flexsion
  function stopRecordingElbowLeftFlexsion() {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const formData = new FormData();
      formData.append("video", blob);
      axios
        .post("http://127.0.0.1:8000/mobility/leftelbow1/", formData)
        .then((response) => {
          if (response.data.result === "PASSED") {
            setElbowLeftFlexsioncheck("success");
          } else if (response.data.result === "FAILED") {
            setElbowLeftFlexsioncheck("error");
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
  const startRecordDelayElbowLeftFlexsion = () => {
    setTimeout(() => {
      startRecordingElbowLeftFlexsion();
    }, 5000);
  };

  //right elbow flexsion
  function stopRecordingElbowRightFlexsion() {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const formData = new FormData();
      formData.append("video", blob);
      axios
        .post("http://127.0.0.1:8000/mobility/rightelbow1/", formData)
        .then((response) => {
          if (response.data.result === "PASSED") {
            setElbowRightFlexsioncheck("success");
          } else if (response.data.result === "FAILED") {
            setElbowRightFlexsioncheck("error");
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
  const startRecordDelayElbowRightFlexsion = () => {
    setTimeout(() => {
      startRecordingElbowRightFlexsion();
    }, 5000);
  };
  //left elbow extension
  function stopRecordingElbowLeftExtension() {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const formData = new FormData();
      formData.append("video", blob);
      axios
        .post("http://127.0.0.1:8000/mobility/leftelbow1/", formData)
        .then((response) => {
          if (response.data.result === "PASSED") {
            setElbowLeftExtensioncheck("success");
          } else if (response.data.result === "FAILED") {
            setElbowLeftExtensioncheck("error");
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
  const startRecordDelayElbowLeftExtension = () => {
    setTimeout(() => {
      startRecordingElbowLeftExtension();
    }, 5000);
  };
  //right elbow extension
  function stopRecordingElbowRightExtension() {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const formData = new FormData();
      formData.append("video", blob);
      axios
        .post("http://127.0.0.1:8000/mobility/rightelbow2/", formData)
        .then((response) => {
          if (response.data.result === "PASSED") {
            setElbowRightExtensioncheck("success");
          } else if (response.data.result === "FAILED") {
            setElbowRightExtensioncheck("error");
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
  const startRecordDelayElbowRightExtension = () => {
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
            <AccordionItem
              severity={LeftKneecheck}
              start={startRecordDelayLeftKnee}
              title="Left Knee Extension"
            />
            <AccordionItem 
              severity={RightKneecheck}
              start={startRecordDelayRightKnee}
              title="Right Knee Extension"
            />
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
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Ankle Dorsi Flexison</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <AccordionItem
                  severity={AnkleLeftDorsicheck}
                  start={startRecordDelayAnkleLeftDorsi}
                  title="Left Ankle Dorsi Flexsion"
                />
                <AccordionItem
                  severity={AnkleRightDorsicheck}
                  start={startRecordDelayAnkleRightDorsi}
                  title="Right Ankle Dorsi Flexsion"
                />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Ankle Plantar Flexison</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <AccordionItem
                  severity={AnkleLeftPlantarcheck}
                  start={startRecordDelayAnkleLeftPlantar}
                  title="Left Ankle Plantar Flexsion"
                />
                <AccordionItem
                  severity={AnkleRightPlantarcheck}
                  start={startRecordDelayAnkleRightPlantar}
                  title="Right Ankle Plantar Flexsion"
                />
              </AccordionDetails>
            </Accordion>
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
                <AccordionItem
                  severity={ElbowLeftFlexsioncheck}
                  start={startRecordDelayElbowLeftFlexsion}
                  title="Elbow Flexion Left"
                />
                <AccordionItem
                  severity={ElbowRightFlexsioncheck}
                  start={startRecordDelayElbowRightFlexsion}
                  title="Elbow Flexion Right"
                />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Elbow Extension</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <AccordionItem
                  severity={ElbowLeftExtensioncheck}
                  title="Elbow Extension Left"
                  start={startRecordDelayElbowLeftExtension}
                />
                <AccordionItem
                  severity={ElbowRightExtensioncheck}
                  title="Elbow Extension Right"
                  start={startRecordDelayElbowRightExtension}
                />
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
        <Button
          onClick={() => {
            navigate(-2, { state: { height: 40, weight: 40 }, replace: false });
            setvideostate(false);
          }}
          autoFocus
          style={{ marginTop: "20%" }}
          variant="contained"
          color="secondary"
          sx={{ color: "white" }}
        >
          Continue
        </Button>
      </Grid>
    </Grid>
  );
}
