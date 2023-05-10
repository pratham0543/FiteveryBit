import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  TextField,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
const UserForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const styles = {
    RadioGrp: {
      marginLeft: "10px",
      top: "-3px",
      position: "relative",
    },
    Radio: {
      "&.Mui-checked": {
        color: "#0AAE59",
      },
    },
  };
  var height;
  var weight;
  // console.log(location.state)
  if (location.state === null) {
    height = 0;
    weight = 0;
  } else {
    height = location.state.height;
    weight = location.state.weight;
  }
  const [level, setlevel] = React.useState("");

  const handlelevelChange = (e) => {
    setlevel(e.target.value);
  };
  const [workoutplan, setworkoutplan] = React.useState("");

  const handleworkoutplanChange = (e) => {
    setworkoutplan(e.target.value);
  };
  return (
    <Box
      sx={{
        position: "relative",
        top: { xs: "64px", sm: "72px" },
        height: "calc(100% - 72px)",
        width: "95%",
        justifyContent: "center",
        flexDirection: "column",
      }}
      mt={4}
      mb={11}
      mx="auto"
      display="flex"
    >
      <Box mx="auto" display="flex" sx={{ flexDirection: "column" }}>
        <Typography variant="h4" fontWeight="600">
          Please provide us with your{" "}
          <span style={{ color: "#0AAE59" }}>details</span>{" "}
        </Typography>
        <hr />

        <Box display="flex" ml={10} mt={5}>
          <Typography sx={{ fontSize: "16px" }} mr={4}>
            Height:
          </Typography>
          <TextField
            color="secondary"
            label="in (meters)"
            value={height}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              style: {
                position: "relative",
                height: "70%",
                width: "120%",
                fontSize: "14px",
                border: "none",
              },
            }}
            type="number"
            variant="outlined"
          />
        </Box>

        <Box display="flex" ml={10} mt={3}>
          <Typography sx={{ fontSize: "16px" }} mr={4}>
            Weight:
          </Typography>
          <TextField
            color="secondary"
            label="in (kgs)"
            value={weight}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              style: {
                height: "70%",
                width: "120%",
                fontSize: "14px",
                border: "none",
              },
            }}
            type="number"
            variant="outlined"
          />
        </Box>

        <Box display="flex" ml={10} mt={4}>
          <Typography sx={{ fontSize: "16px" }} mr={4}>
            Shoulder Mobility:{" "}
          </Typography>
          <RadioGroup
            row
            aria-label="ShoulderMobility"
            name="Shoulder"
            sx={styles.RadioGrp}
          >
            <FormControlLabel
              value="Yes"
              control={<Radio sx={styles.Radio} />}
              label="Yes"
            />
            <FormControlLabel
              value="No"
              control={<Radio sx={styles.Radio} />}
              label="No"
            />
          </RadioGroup>
        </Box>
        <Box display="flex" ml={10} mt={4}>
          <Typography mr={4} sx={{ fontSize: "16px" }}>
            Elbow Mobility:{" "}
          </Typography>
          <RadioGroup
            row
            aria-label="ElbowMobility"
            name="Elbow"
            sx={styles.RadioGrp}
          >
            <FormControlLabel
              value="Yes"
              control={<Radio sx={styles.Radio} />}
              label="Yes"
            />
            <FormControlLabel
              value="No"
              control={<Radio sx={styles.Radio} />}
              label="No"
            />
          </RadioGroup>
        </Box>

        <Box display="flex" ml={10} mt={4}>
          <Typography mr={4} sx={{ fontSize: "16px" }}>
            Ankle Mobility:{" "}
          </Typography>
          <RadioGroup
            row
            aria-label="AnkleMobility"
            name="Ankle"
            sx={styles.RadioGrp}
          >
            <FormControlLabel
              value="Yes"
              control={<Radio sx={styles.Radio} />}
              label="Yes"
            />
            <FormControlLabel
              value="No"
              control={<Radio sx={styles.Radio} />}
              label="No"
            />
          </RadioGroup>
        </Box>
        <Box display="flex" ml={10} mt={4}>
          <Typography mr={4} sx={{ fontSize: "16px" }}>
            Knee Mobility:{" "}
          </Typography>
          <RadioGroup
            row
            aria-label="KneeMobility"
            name="Knee"
            sx={styles.RadioGrp}
          >
            <FormControlLabel
              value="Yes"
              control={<Radio sx={styles.Radio} />}
              label="Yes"
            />
            <FormControlLabel
              value="No"
              control={<Radio sx={styles.Radio} />}
              label="No"
            />
          </RadioGroup>
        </Box>
        <Box display="flex" ml={10} mt={4}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel>Level</InputLabel>
              <Select value={level} onChange={handlelevelChange} label="Level">
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120,marginLeft:"3em" }}>
            <FormControl fullWidth>
              <InputLabel>Workout Plan</InputLabel>
              <Select sx={{width:"10em"}} value={workoutplan} onChange={handleworkoutplanChange} label="Workout Plan">
                <MenuItem value="musclegain">Muscle Gain</MenuItem>
                <MenuItem value="maintainweight">Maintain Weight</MenuItem>
                <MenuItem value="weightloss">Weight Loss</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box mt={4} ml={10}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ color: "white" }}
          >
            Submit
          </Button>
          <Button
            variant="lined"
            color="secondary"
            sx={{ color: "#0AAE59", marginLeft: "15%" }}
            onClick={() => navigate("/mobility")}
          >
            AI MOBILITY CHECKER
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UserForm;
