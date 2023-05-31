import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signup from "./components/UserRegistration/Signup";
import UserForm from "./components/UserForm/UserForm";
import { Routes, Route } from "react-router";
import { useLocation, useNavigate, Navigate } from "react-router";
import Login from "./components/UserRegistration/Login";
import MobilityChecker from "./components/MobilityChecker/MobilityChecker";
import ExerciseDetails from "./components/ExerciseDetails/ExerciseDetails";
import Videotutorial from "./components/VideoTutorial/Videotutorial";
import Mobilitycheck from "./components/MobilityChecker/Mobilitycheck";
import Userdetails from "./components/Trainer/Userdetails/Userdetails";
import Userfullinfo from "./components/Trainer/Userdetails/Userfullinfo";
import Workoutplanner from "./components/Trainer/Workoutplanner";
import Submitted from "./components/UserForm/Submitted";
import WorkoutMain from "./components/Workout/WorkoutMain";
import Showworkout from "./components/Workout/Showworkout";
import Whatsapplink from "./components/WhatsappBot/Whatsapplink";
import Trainers from "./components/Admin/Trainers";
import AssignTrainers from "./components/Admin/AssignTrainers";
function App(props) {
  const location = useLocation();
  // const Navigate = useNavigate();
  console.log(localStorage.getItem("loggedin"));
  return (
    <>
      {location.pathname !== "/mobility" ? <Navbar /> : <></>}
      <Routes>
        {localStorage.getItem("loggedin") === null && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/exerciseDetails" element={<ExerciseDetails />} />
            <Route path="/videoTutorials" element={<Videotutorial />} />
          </>
        )}
        {localStorage.getItem("loggedin") === "true" && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/exerciseDetails" element={<ExerciseDetails />} />
            <Route path="/videoTutorials" element={<Videotutorial />} />
            <Route path="/userform" element={<UserForm />} />
            <Route path="/mobility" element={<Mobilitycheck />} />
            <Route path="/mobilitycheck" element={<MobilityChecker />} />
            <Route path="/workoutplanner" element={<Userdetails />} />
            <Route path="/submitted" element={<Submitted />} />
            <Route path="/createworkout" element={<Userfullinfo />} />
            <Route path="/createworkout/muscle" element={<Workoutplanner />} />
            <Route path="/workout" element={<WorkoutMain />} />
            <Route path="/showworkout/muscle" element={<Showworkout />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/createTrainer" element={<Signup />} />
            <Route path="/assignTrainer" element={<AssignTrainers />} />
          </>
        )}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {location.pathname !== "/signup" &&
      location.pathname !== "/login" &&
      location.pathname !== "/mobility" ? (
        <Footer />
      ) : (
        <></>
      )}
      {localStorage.getItem("usertype") === "trainer" ||
      localStorage.getItem("usertype") === "admin" ? (
        <></>
      ) : (
        <Whatsapplink />
      )}
    </>
  );
}

export default App;
