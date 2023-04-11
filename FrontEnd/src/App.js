import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signup from "./components/UserRegistration/Signup";
import { Routes, Route } from "react-router";
import { useState } from "react";
import { useLocation } from "react-router";
function App(props) {
  const [showFooter, setshowFooter] = useState(true)
  const location=useLocation();
  console.log(location.pathname);
  const handleShowFooter=(path)=>
  {
    if(path==='/signup')
    setshowFooter(false)
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* if i pass props in signup component for path and make a handlechange ducntion which */}
        <Route path="/signup" element={<Signup path="/signup" showFooter={handleShowFooter}/>}/>
      </Routes>
      {/* {showFooter?<Footer/>:<></>} this line works with my example */}
      {location.pathname!=='/signup'?<Footer/>:<></>}
      
    </>
  );
}

export default App;
