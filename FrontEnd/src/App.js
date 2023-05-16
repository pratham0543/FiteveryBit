import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signup from "./components/UserRegistration/Signup";
import UserForm from "./components/UserForm/UserForm";
import { Routes, Route } from "react-router";
import { useLocation } from "react-router";
import Login from "./components/UserRegistration/Login";
import MobilityChecker from "./components/MobilityChecker/MobilityChecker";
import ExerciseDetails from "./components/ExerciseDetails/ExerciseDetails";
import Videotutorial from "./components/VideoTutorial/Videotutorial";
import Mobilitycheck from "./components/MobilityChecker/Mobilitycheck";
import Userdetails from "./components/Trainer/Userdetails/Userdetails";
import Userfullinfo from "./components/Trainer/Userdetails/Userfullinfo";
import Workoutplanner from "./components/Trainer/Workoutplanner";
import WorkoutMain from "./components/Workout/WorkoutMain";
import Showworkout from "./components/Workout/Showworkout";
function App(props) {
  const location=useLocation();

  return (
    <>
      {location.pathname!=='/mobility'?<Navbar/>:<></>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/userform" element={<UserForm/>}/>
        <Route path="/mobility" element={<Mobilitycheck/>}></Route>
        <Route path='/exerciseDetails' element={<ExerciseDetails/>}/>
        <Route path='/videoTutorials' element={<Videotutorial/>}/>
        <Route path='/mobilitycheck' element={<MobilityChecker/>} />
        <Route path="/workoutplanner" element={<Userdetails/>} />
        <Route path="/createworkout" element={<Userfullinfo/>} />
        <Route path='/createworkout/muscle' element={<Workoutplanner/>}/>
        <Route path='/workout' element={<WorkoutMain/>} />
        <Route path='/showworkout/muscle'  element={<Showworkout/>}/>
      </Routes>
      {location.pathname!=='/signup' && location.pathname!=='/login' && location.pathname!=='/mobility'?<Footer/>:<></>}
      
      
    </>
  );
}

export default App;
