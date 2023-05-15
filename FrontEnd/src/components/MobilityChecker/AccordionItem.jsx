import React, { useEffect, useState } from "react";
import { Alert, Box, Typography } from "@mui/material";
const AccordionItem = (props) => {
  const [classname, setclassname] = useState("fa-solid fa-play");
  const [recording, setrecording] = useState("");
  const [Timer, setTimer] = useState(null);
  useEffect(() => {
    if (Timer === 0) {
      setclassname("fa-solid fa-pause");
      setrecording("fa-solid fa-record-vinyl fa-beat-fade");
      setstopTimer(5);
      setTimer(null);
    }
    if (!Timer) return;
    const intervalID = setInterval(() => {
      setTimer(Timer - 1);
    }, 1000);
    return () => clearInterval(intervalID);
  }, [Timer]);
  const [stopTimer, setstopTimer] = useState(null);
  useEffect(() => {
    if (stopTimer === 0) {
      setclassname("fa-solid fa-play");
      setrecording("");
      setstopTimer(null);
    }
    if (!stopTimer) return;
    const intervalId = setInterval(() => {
      setstopTimer(stopTimer - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [stopTimer]);
  const onclick = () => {
    setTimer(5);
    props.start();
    setclassname("");
  };

  var render = props.severity=="" ? (
    <Alert severity="info" display="flex" style={{ width: "85%" }}>
      <Box display="flex">
        <Typography>{props.title}</Typography>
        <Typography sx={{ marginLeft: "4em", width: "2%" }}>
          {Timer}
          <i
            style={{ marginLeft: "0em", color: "#0AAE59" }}
            onClick={onclick}
            className={classname}
          ></i>
        </Typography>
        <Typography sx={{ marginLeft: "2em" }}>
          <i className={recording}></i>
        </Typography>
      </Box>
    </Alert>
  ) : (
    <Alert severity={props.severity} display="flex" style={{ width: "85%" }}>
      <Box display="flex">
        <Typography>{props.title}</Typography>
        <Typography sx={{ marginLeft: "4em", width: "2%" }}>
          {Timer}
          <i
            style={{ marginLeft: "0em", color: "#0AAE59" }}
            onClick={onclick}
            className={classname}
          ></i>
        </Typography>
        <Typography sx={{ marginLeft: "2em" }}>
          <i className={recording}></i>
        </Typography>
      </Box>
    </Alert>
  );
  return (
    <>
      {render}
    </>
  );
};

export default AccordionItem;
