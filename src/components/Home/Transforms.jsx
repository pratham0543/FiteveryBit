import React from "react";
import { Grid, Paper, Box, Typography, Button } from "@mui/material";
import gainImage from "../../assets/arnold.jpg";
import cutImage from "../../assets/lazar.jpg";
import maintainImage from "../../assets/cbum.jpg";
import bicep from "../../assets/bicep.png";
import cut from "../../assets/cut.png";
import dumbbell from "../../assets/dumbell.png";
import "./transform.css";
// we can give css properties in css file by defining classname here and use it in css file or specify here in parent component using &:hover property
const styles = {
  gain: {
    backgroundImage: `url(${gainImage})`,
    backgroundSize: "cover",
    width: "100%",
    height: "400px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cut: {
    backgroundImage: `url(${cutImage})`,
    backgroundSize: "cover",
    width: "100%",
    height: "400px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  maintain: {
    backgroundImage: `url(${maintainImage})`,
    backgroundSize: "cover",
    width: "100%",
    height: "400px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
const Transforms = () => {
  //transition properties generalized
  
  const transitionParent={
    overflow: "hidden",
    ":hover .swipeLeftRight": {
    
      transform: "translateX(0)"
    }
  }
  
  const transitionPropertiesPositive={
    transform: "translateX(300px)",
    transition: "all 0.4s ease-out", 
  }

  const transitionPropertiesNegative={
    transform: "translateX(-300px)",
    transition: "all 0.4s ease-out", 
  }
  return (
    <>
      <Box mt={10} p={5}>
        <Typography variant="h4" fontWeight={600} mb={2}>
          Transform yourself into a{" "}
          <Typography color="secondary.main" variant="text">
            Beast
          </Typography>
          <Typography variant="body1">
            with our best-in class programs
          </Typography>
        </Typography>

        <Grid
          container
          flexDirection="row"
          justifyContent={{ xs: "center" }}
          rowSpacing={2}
          columnSpacing={2}
        >
          <Grid item xs={9} sm={4} md={3}>
            <Paper
              className="parent_image"
              elevation={3}
              style={styles.gain}
              sx={{
                ...transitionParent
              }}
            >
              <Box
                textAlign="center"
              >
                <div className="transform-image">
                  <img src={bicep} alt="bicep flex" />
                </div>
                {/* <i className="fa-solid fa-person-walking fa-2xl"></i> */}
                <Typography
                  color="true.main"
                  variant="h5"
                  className="swipeLeftRight"
                  fontSize={28}
                  sx={{
                    fontWeight: 900,
                  ...transitionPropertiesPositive
                  }}
                >
                  BULK
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    color: "true.main",
                    marginTop: "8px",
                  ...transitionPropertiesNegative
                  }}
                  className="swipeLeftRight"
                >
                  Start Gaining
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={9} sm={4} md={8} flexDirection="column" display="flex">
            <Box
              flexDirection="column"
              sx={{
                transform: { md: "translateY(80%)", lg: "translateY(100%)" },
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Typography variant="h5">
                "The meaning of life is not simply to exist, to survive, but to
                move ahead, to go up, to conquer."
              </Typography>
              <Typography
                color="cap.main"
                alignSelf={"flex-end"}
                variant="subtitle1"
              >
                -Arnold Schwarzenegger
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          flexDirection="row"
          mt={2}
          justifyContent={{ xs: "center", sm: "flex-end" }}
          rowSpacing={2}
          columnSpacing={2}
        >
          <Grid item xs={9} sm={4} md={8} flexDirection="column" display="flex">
            <Box
              flexDirection="column"
              sx={{
                transform: { md: "translateY(80%)", lg: "translateY(100%)" },
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Typography variant="h5">
                "You have to be 100% motivated. You have to find something to
                push you forward and to make you go to the gym every day and
                leave it all there"
              </Typography>
              <Typography
                color="cap.main"
                alignSelf={"flex-end"}
                variant="subtitle1"
              >
                -Lazar Angelov
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={9} sm={4} md={3}>
            <Paper elevation={3} style={styles.cut} className="parent_image" sx={{...transitionParent}}>
              <Box textAlign="center" sx={{ color: "true.main" }} >
                <img src={cut} alt="cutting" className="transform-image"/>
                {/* <i className="fa-solid fa-person-walking fa-2xl"></i> */}
                <Typography
                  color="true.main"
                  variant="h5"
                  sx={{ fontWeight: 600,...transitionPropertiesNegative  }}
                  className="swipeLeftRight"

                >
                  CUT
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  className="swipeLeftRight"
                  sx={{ color: "true.main", marginTop: "8px",...transitionPropertiesPositive,}}
                >
                  Start Cutting
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Grid
          container
          flexDirection="row"
          mt={2}
          justifyContent={{ sm: "flex-start", xs: "center" }}
          rowSpacing={2}
          columnSpacing={2}
        >
          <Grid item xs={9} sm={4} md={3}>
            <Paper elevation={3} style={styles.maintain} className="parent_image" sx={{...transitionParent}}>
              <Box textAlign="center" sx={{ color: "true.main" }}>
                <img src={dumbbell} alt="Maintain" className="transform-image" />
                <Typography
                  color="true.main"
                  variant="h5"
                  className="swipeLeftRight"
                  sx={{ fontWeight: 600,...transitionPropertiesPositive }}
                >
                  MAINTAIN
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  className="swipeLeftRight"
                  sx={{ color: "true.main", marginTop: "8px",...transitionPropertiesNegative }}
                >
                  Start Maintainence
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={9} sm={4} md={8} flexDirection="column" display="flex">
            <Box
              flexDirection="column"
              sx={{
                transform: { md: "translateY(80%)", lg: "translateY(100%)" },
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Typography variant="h5">
                “If when you look in the mirror you don't see the perfect
                version of yourself, you better see the hardest working version
                of yourself.”
              </Typography>
              <Typography
                color="cap.main"
                variant="subtitle1"
                alignSelf={"flex-end"}
              >
                -Chris Bumstead
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Transforms;
