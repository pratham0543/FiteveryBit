import React from "react";
import {
  Typography,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
} from "@mui/material";
import { useLocation } from "react-router";

import chest from "../../assets/chest-workout.jpg";
import axios from "axios";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Showworkout = () => {
  const location = useLocation();
  const muscleName = location.state.name;
  const workout = location.state.workout;
 

  return (
    <Box mt="72px">
      <Stack direction={{sm:"column",md:"row"}} justifyContent="center">
        <Box width="40%" height="auto">
          <Typography
            variant="h4"
            textAlign="center"
            mt={2}
            textTransform="capitalize"
          >
            <span style={{ color: "#0AAE59" }}>{muscleName}</span> Workout
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            p={3}
          >
            {workout.map((exercise, index) => (
              <Accordion  sx={{ width:{xs:"90%", md:"100%"}, mt: 1 }} key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ backgroundColor: "primary.main", color: "white" }}
                >
                  <Typography fontWeight="600">
                    {"Exercise " + (index + 1)}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack direction="row" justifyContent="space-around" mt={2}>
                    <Stack width="100%">
                      <Typography
                        fontWeight="600"
                        textTransform="capitalize"
                        color="primary.main"
                      >
                        Name:
                      </Typography>
                      <Typography
                        sx={{ width: "100%" }}
                        textTransform="capitalize"
                        alignSelf="center"
                      >
                        {exercise.name}
                      </Typography>
                    </Stack>

                    <Stack direction="row" justifyContent="flex-end" ml={2}>
                      <Stack>
                        <Typography
                          fontWeight="600"
                          textTransform="capitalize"
                          color="primary.main"
                        >
                          Sets:
                        </Typography>
                        <Typography textTransform="capitalize">
                          {exercise.sets}
                        </Typography>
                      </Stack>

                      <Stack ml={2}>
                        <Typography
                          fontWeight="600"
                          textTransform="capitalize"
                          color="primary.main"
                        >
                          Reps:
                        </Typography>
                        <Typography textTransform="capitalize">
                          {exercise.reps}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                  {exercise.superset.length !== 0 ? (
                    <Accordion sx={{ width: "100%", mt: 1 }} key={index}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{ backgroundColor: "primary.main", color: "white" }}
                      >
                        <Typography fontWeight="600">
                          Supersets
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {exercise.superset.map((sexercise)=>
                        (
                            <Stack
                            direction="row"
                            justifyContent="space-around"
                            mt={2}
                          >
                            <Stack width="100%">
                              <Typography
                                fontWeight="600"
                                textTransform="capitalize"
                                color="primary.main"
                              >
                                Name:
                              </Typography>
                              <Typography
                                sx={{ width: "100%" }}
                                textTransform="capitalize"
                                alignSelf="center"
                              >
                                {sexercise.name}
                              </Typography>
                            </Stack>
  
                            <Stack
                              direction="row"
                              justifyContent="flex-end"
                              ml={2}
                            >
                              <Stack>
                                <Typography
                                  fontWeight="600"
                                  textTransform="capitalize"
                                  color="primary.main"
                                >
                                  Sets:
                                </Typography>
                                <Typography textTransform="capitalize">
                                  {sexercise.sets}
                                </Typography>
                              </Stack>
  
                              <Stack ml={2}>
                                <Typography
                                  fontWeight="600"
                                  textTransform="capitalize"
                                  color="primary.main"
                                >
                                  Reps:
                                </Typography>
                                <Typography textTransform="capitalize">
                                  {sexercise.reps}
                                </Typography>
                              </Stack>
                            </Stack>
                          </Stack>
                        )
                        
                        )}
                      </AccordionDetails>
                    </Accordion>
                  ) : (
                    <></>
                  )}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>

        <Box
          width="60%"
          sx={{
            backgroundImage: `url(${chest})`,
            backgroundPosition: "right",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display:{xs:"none",md:"block"}
          }}
          minHeight="100vh"
          height="auto"
        ></Box>
      </Stack>
    </Box>
  );
};

export default Showworkout;
