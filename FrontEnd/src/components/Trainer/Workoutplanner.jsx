import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Autocomplete,
  TextField,
  Button,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Snackbar,Alert
} from "@mui/material";
import { useLocation,useNavigate } from "react-router";

import chest from "../../assets/chest-workout.jpg";
import axios from "axios";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

class Workout {
  constructor(name, reps, sets, workout) {
    this.name = name;
    this.reps = reps;
    this.sets = sets;
    this.superset = workout;
  }
}
const Workoutplanner = (props) => {

//open state for showing save worked or not
const [open, setopen] = useState(false)
const [saveWorkout, setsaveWorkout] = useState(false);
  //superset array for handling superset exercises for main exercises
  const [superset, setsuperset] = useState([[null]]);
  //main workout which will be sent to backend
  const [workout, setworkout] = useState([]);
  const [muscleData, setmuscleData] = useState([]);
  const [exerciseNumber, setexerciseNumber] = useState([1]);
  const [expanded, setexpanded] = useState(false);
  const navigate=useNavigate();
  var exercises = [];
  const location = useLocation();
  const muscleName = location.state.name;
  const userid = location.state.userId
  console.log(userid);
  //handle expanded accordion
  const handleExpandedAccordion = (panel) => (e, isExpanded) => {
    setexpanded(isExpanded ? panel : false);
  };
  //handleAddExercise
  const handleAddExercise = () => {
    var num = [...exerciseNumber];
    var sup = [...superset];
    sup.push([null]);
    setsuperset(sup);
    num.push(null);
    setexerciseNumber(num);
  };

  //adding superset
  const addSuperset = (index) => {
    var sup = [...superset];
    var num = sup[index];
    num.push(null);
    sup[index] = num;
    setsuperset(sup);
  };

  //superset fetching exercises
  const fetchSupersetExercises = (index, obj) => {
    for (let i = 1; i < superset[index].length; i++) {
      const name = document.querySelector(`#super-${index}${i}`).value.trim();
      const sets = document
        .querySelector(`#supersets-${index}${i}`)
        .value.trim();
      const reps = document
        .querySelector(`#superreps-${index}${i}`)
        .value.trim();
      if (name.length !== 0 && sets.length !== 0 && reps.length !== 0) {
        const superExercise = new Workout(name, sets, reps);
        obj.superset.push(superExercise);
      }
    }
  };

  //main exercises calculator
  const saveExercise = (index) => {
    //These are for main exercises

    const name = document.querySelector(`#exercise-${index}`).value.trim();
    const sets = document.querySelector(`#exercisesets-${index}`).value.trim();
    const reps = document.querySelector(`#exercisereps-${index}`).value.trim();
    if (name.length !== 0 && sets.length !== 0 && reps.length !== 0) {
      const obj = new Workout(name, sets, reps);
      obj.superset = new Array();
      fetchSupersetExercises(index, obj);
      const w = [...workout];
      w[index] = obj;
      setworkout(w);
      setopen(true)
      console.log(w);
      
    }
  };
  

  //sending workout
  const sendWorkout = () => {
    const userWorkout = {
      
      userid: userid,
       
    }
if(muscleName==='arms')
{
  userWorkout.arms=workout;
}
else if(muscleName==='shoulder')
userWorkout.shoulder=workout;

else if(muscleName==='chest')
userWorkout.chest=workout;
else if(muscleName==='abs')
userWorkout.abs=workout;
else if(muscleName==='back')
userWorkout.back=workout;
else if(muscleName==='legs')
userWorkout.legs=workout;

const deployed_url=`https://fiteverybit-nodeapi.onrender.com/userexercise/${muscleName}`
const localhost_url=`http://localhost:3200/userexercise/${muscleName}`
    axios.patch(deployed_url,userWorkout)
    .then((result)=>
    {
      console.log(result.data);
    setsaveWorkout(true);
  
    
  })
    .catch((err)=>console.log(err.message))
    const deployed_url2=`https://fiteverybit-nodeapi.onrender.com/login/update`
const localhost_url2=`http://localhost:3200/login/update`
    axios.patch(deployed_url2,{id:userid,workoutcreated:true})
  .then(res=>console.log(res.data))
  .catch(err=>console.log(err.message))

  };

  useEffect(() => {
    //add loader
    const deployed_url=`https://fiteverybit-nodeapi.onrender.com/exercise/${muscleName}`
const localhost_url=`http://localhost:3200/exercise/${muscleName}`
    axios
      .get(deployed_url)
      .then((res) => {
        setmuscleData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  muscleData.forEach((exercise) => {
    exercises.push({ title: exercise.name, value: exercise.id });
  });
  return (
    <Box mt="72px">
      <Stack direction={{sm:"column",md:"row"}} justifyContent="center" alignContent="center">
        <Box width="40%" height="auto">
          <Typography
            variant="h4"
            textAlign="center"
            mt={2}
            textTransform="capitalize"
          >
            {muscleName} Workout
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            p={3}
          >
            {exerciseNumber.map((a, index) => (
              <Accordion
                sx={{ width:{xs:"90%", md:"100%"}, mt: 1 }}
                key={index}
                expanded={expanded === `panel${index + 1}`}
                onChange={handleExpandedAccordion(`panel${index + 1}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ backgroundColor: "primary.main", color: "white" }}
                >
                  <Typography>{"Exercise " + (index + 1)}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {superset[index].map((a, ind) => (
                    <Stack
                      direction="row"
                      justifyContent="space-around"
                      mt={2}
                      key={"super-" + index + ind}
                    >
                      <Autocomplete
                        disablePortal
                        id={
                          ind === 0
                            ? "exercise-" + index
                            : "super-" + index + ind
                        }
                        getOptionLabel={(option) => option.title}
                        options={exercises}
                        sx={{ width: 500 }}
                        freeSolo
                        renderInput={(params) => (
                          <TextField
                            color="secondary"
                            {...params}
                            size="small"
                            label="Exercises"
                          />
                        )}
                      />
                      <Stack direction="row" justifyContent="flex-end" ml={2}>
                        <TextField
                          type="number"
                          size="small"
                          label="Sets"
                          id={
                            ind === 0
                              ? "exercisesets-" + index
                              : "supersets-" + index + ind
                          }
                          color="secondary"
                        />
                        <TextField
                          type="number"
                          size="small"
                          label="Reps"
                          id={
                            ind === 0
                              ? "exercisereps-" + index
                              : "superreps-" + index + ind
                          }
                          color="secondary"
                        />
                      </Stack>
                    </Stack>
                  ))}

                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    sx={{ color: "white", mt: 2 }}
                    onClick={() => addSuperset(index)}
                  >
                    Add superset
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    sx={{ color: "white", mt: 2, ml: 1 }}
                    onClick={() => saveExercise(index)}
                  >
                    Save
                  </Button>
                </AccordionDetails>
              </Accordion>
            ))}
            <Button
              color="secondary"
              sx={{ color: "white", mt: 2 }}
              variant="contained"
              onClick={handleAddExercise}
            >
              Add Exercise
            </Button>
            <Button
              variant="contained"
              sx={{ mt: 3 }}
              size="large"
              onClick={sendWorkout}
            >
              Save Workout
            </Button>
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
      <Snackbar open={open} autoHideDuration={2000} onClose={()=>setopen(false)}>
        <Alert color="success" onClose={()=>setopen(false)}  sx={{ width: "100%" }}>
         Exercise Saved Successfully
        </Alert>
      </Snackbar>

      <Snackbar open={saveWorkout} autoHideDuration={2000} onClose={()=>setsaveWorkout(false)}>
        <Alert color="success" onClose={()=>saveWorkout(false)} sx={{ width: "100%" }}>
         Workout Saved Successfully
        </Alert>
      </Snackbar>



    </Box>


          // exercise save ui feedback
         


  );
};

export default Workoutplanner;
