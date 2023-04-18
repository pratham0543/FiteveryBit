import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
const UserForm = () => {
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
      p={4}
      mb={11}
      display="flex"
    >
      <Box mx="auto" display="flex" sx={{flexDirection:"column"}}>
        <Typography variant="h4" fontWeight="600">
          Please provide us with your{" "}
          <span style={{ color: "#0AAE59" }}>details</span>{" "}
        </Typography>
        <hr/>

        <Box display="flex" ml={10} mt={5}>
          <Typography sx={{fontSize:"16px"}} mr={4}>Height:</Typography>
          <TextField
            color="secondary"
            label="in (cms)"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              style: {
                position:"relative",
                height: "70%",
                width: "120%",
                fontSize: "13px",
                border: "none",
              },
            }}
            type="number"
            variant="outlined"
          />
        </Box>

        <Box display="flex" ml={10} mt={3}>
          <Typography sx={{fontSize:"16px"}} mr={4}>Weight:</Typography>
          <TextField
            color="secondary"
            label="in (kgs)"
            InputLabelProps={{ shrink: "true" }}
            InputProps={{
              style: {
                height: "70%",
                width: "120%",
                fontSize: "13px",
                border:"none"
              },
            }}
            type="number"
            variant="outlined"
          />
        </Box>

        <Box display="flex" ml={10} mt={4}>
          <Typography sx={{fontSize:"16px"}} mr={4}>Shoulder Mobility: </Typography>
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
          <Typography mr={4} sx={{fontSize:"16px"}}>Elbow Mobility: </Typography>
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
          <Typography mr={4} sx={{fontSize:"16px"}}>Ankle Mobility: </Typography>
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
          <Typography mr={4} sx={{fontSize:"16px"}}>Knee Mobility: </Typography>
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
        <Box mt={4} ml={10}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ color: "white" }}
          >
            Signup
          </Button>
          <Button
            variant="lined"
            color="secondary"
            sx={{ color: "#0AAE59", marginLeft: "15%" }}
          >
            AI MOBILITY CHECKER
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UserForm;
