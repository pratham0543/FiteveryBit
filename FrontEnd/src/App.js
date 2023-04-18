import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signup from "./components/UserRegistration/Signup";
import UserForm from "./components/UserForm/UserForm";
import { Routes, Route } from "react-router";
import { useLocation } from "react-router";
function App(props) {
  const location=useLocation();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* if i pass props in signup component for path and make a handlechange ducntion which */}
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/userform" element={<UserForm/>}/>
      </Routes>
    
      {location.pathname!=='/signup'?<Footer/>:<></>}
      
    </>
  );
}

export default App;
