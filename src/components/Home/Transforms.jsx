import React from "react";
import { Grid, Paper, Box, Typography } from "@mui/material";
import gainImage from "../../assets/arnold.jpg";
import cutImage from "../../assets/lazar.jpg";
import maintainImage from "../../assets/cbum.jpg";

const styles = {
  gain: {
    backgroundImage: `url(${gainImage})`,
    backgroundSize: "cover",
    width: "100%",
    height: "400px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  cut: {
    backgroundImage: `url(${cutImage})`,
    backgroundSize: "cover",
    width: "100%",
    height: "400px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  maintain: {
    backgroundImage: `url(${maintainImage})`,
    backgroundSize: "cover",
    width: "100%",
    height: "400px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
};
const Transforms = () => {
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
            <Paper elevation={3} style={styles.gain}></Paper>
          </Grid>
          <Grid item xs={9} sm={4} md={8} flexDirection="column" display="flex">
            <Box
              flexDirection="column"
              sx={{
                transform:{ md:"translateY(80%)",lg:"translateY(100%)"},
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Typography variant="h5">
                "The meaning of life is not simply to exist, to survive, but to
                move ahead, to go up, to conquer."
              </Typography>
              <Typography color="cap.main" alignSelf={"flex-end"}>
                -Arnold Schwarzenegger
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          flexDirection="row"
          mt={2}
          justifyContent={{xs:"center",sm:"flex-end"}}
          rowSpacing={2}
          columnSpacing={2}
        >
          <Grid item xs={9} sm={4} md={8} flexDirection="column" display="flex">
            <Box
              flexDirection="column"
              sx={{
                transform:{ md:"translateY(80%)",lg:"translateY(100%)"},
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Typography variant="h5">
                "You have to be 100% motivated. You have to find something to
                push you forward and to make you go to the gym every day and
                leave it all there"
              </Typography>
              <Typography color="cap.main" alignSelf={"flex-end"}>
                -Lazar Angelov
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={9} sm={4} md={3}>
            <Paper elevation={3} style={styles.cut}></Paper>
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
            <Paper elevation={3} style={styles.maintain}></Paper>
          </Grid>
          <Grid item xs={9} sm={4} md={8} flexDirection="column" display="flex">
            <Box
              flexDirection="column"
              sx={{
                transform:{ md:"translateY(80%)",lg:"translateY(100%)"},
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Typography variant="h5">
              “If when you look in the mirror you don't see the perfect version of yourself, you better see the hardest working version of yourself.”
              </Typography>
              <Typography color="cap.main" alignSelf={"flex-end"}>
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
