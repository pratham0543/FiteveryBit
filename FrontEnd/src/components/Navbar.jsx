import React from "react";
import {
  Stack,
  Typography,
  IconButton,
  Button,
  AppBar,
  Toolbar,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArticleIcon from "@mui/icons-material/Article";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CalculateIcon from "@mui/icons-material/Calculate";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";


const Navbar = () => {
  const navigate=useNavigate();
  const [isOpen, setisOpen] = useState(false);
  const [anchor, setAnchor] = useState("");
  const [anchorEl, setanchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const openUserMenu = (e) => {
    setanchorEl(e.currentTarget);
  };

  const openDrawer = () => {
    setisOpen(true);
  };

  // for typography below sm we need h4,h5 variant on both logos i.e. drawer and main heading
  //implementing typography using 2-3 typography components and same for button

  //material-ui core breakpoints has function to tell breakpoints (discussed later)
  // localStorage.clear();

  return (
    <>
      {/* // This right here is navabar  */}
      <AppBar position="fixed" sx={{ p: 0.5 }}>
        <Toolbar sx={{ justifyContent: "space-between " }}>
          {/* MenuBar */}

          <IconButton
            edge="start"
            color="inherit"
            aria-label="drawer"
            sx={{
              borderColor: "green",
            }}
            onClick={openDrawer}
          >
            <MenuIcon color="secondary" />
          </IconButton>

          {/* Logo */}

          <Typography
            variant="h3"
            sx={{
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }}
          >
            Fitevery<span style={{ color: "#0AAE59" }}>Bit</span>
          </Typography>
          {/* for medium screens */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              display: { xs: "none", sm: "block", md: "none", lg: "none" },
            }}
          >
            Fitevery<span style={{ color: "#0AAE59" }}>Bit</span>
          </Typography>

          {/* for small screens */}
          <Typography
            variant="h4"
            fontSize={30}
            sx={{
              fontWeight: 600,
              display: { xs: "block", sm: "none ", md: "none", lg: "none" },
            }}
          >
            Fitevery<span style={{ color: "#0AAE59" }}>Bit</span>
          </Typography>

          {/* Login/signup */}
         { localStorage.getItem("usertype") !== null  ? (
            <>
              <Avatar
                id="dialog-button"
                aria-controls={open ? "user-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={openUserMenu}
              >
                {localStorage.getItem("fname").at(0).toUpperCase()+localStorage.getItem("lname").at(0).toUpperCase() }
              </Avatar>
              {/* used for displaying menu */}
              <Menu
              id="user-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => setanchorEl(null)}
                aria-labelledby="dialog-button"
               
              >
                <MenuItem onClick={()=>setanchorEl(null)}>Dashboard</MenuItem>
                <MenuItem onClick={()=>{localStorage.clear(); setanchorEl(null);navigate('/')  }}>Logout</MenuItem>
                

              </Menu>
            </>
          ) : (
            <Stack direction="row" spacing={1}>
              <Link to="/login">
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ color: "white", display: { xs: "none", sm: "block" } }}
                >
                  Login
                </Button>
              </Link>

              {/* for xtra small screen */}
              <Link to="/login">
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  sx={{ color: "white", display: { xs: "block", sm: "none" } }}
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="text"
                  sx={{ color: "white", display: { xs: "none", sm: "block" },"&:hover":{background: "rgba(104, 104, 104, 0.2)" }}}
                >
                  SignUp
                </Button>
              </Link>

              {/* for xstra small screen */}
              <Link to="/signup">
                <Button
                  variant="text"
                  size="small"
                  sx={{ color: "white", display: { xs: "block", sm: "none" },"&:hover":{background: "rgba(104, 104, 104, 0.2)" } }}
                >
                  SignUp
                </Button>
              </Link>
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onOpen={() => setAnchor("left")}
        onClose={() => setisOpen(false)}
        sx={{ backgroundColor: "true" }}
      >
        <Typography
          p={1.5}
          variant="h4"
          sx={{
            fontWeight: 600,
            backgroundColor: "primary.main",
            color: "true.main",
            display: { xs: "none", sm: "none", md: "block", lg: "block" },
          }}
          align="center"
        >
          Fitevery<span style={{ color: "#0AAE59" }}>Bit</span>
        </Typography>

        {/* for medium screen */}

        <Typography
          p={1.5}
          variant="h4"
          fontSize={28}
          sx={{
            fontWeight: 600,
            backgroundColor: "primary.main",
            color: "true.main",
            display: { xs: "block", sm: "block", md: "none", lg: "none" },
          }}
          align="center"
        >
          Fitevery<span style={{ color: "#0AAE59" }}>Bit</span>
        </Typography>

        <Divider />

        {/* In Listitemtext we cannot set font size becuase it overrides typography so to set size we have primary typography props */}
        <List disablePadding>
          <ListItem disableGutters disablePadding>
            <ListItemButton onClick={()=>navigate('/')}>
              <ListItemIcon>
                <ArticleIcon color="secondary" />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                primaryTypographyProps={{
                  fontSize: { sx: "16px", md: "14px" },
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            
            <ListItemButton
            onClick={localStorage.getItem("usertype") === "normal"? ()=>navigate('/userform',{state:{height:"",weight:"",workoutplan:"",level:"",shouldermobility:"",anklemobility:"",elbowmobility:"",kneemobility:"",visitedmobilityAI:"false"}}):  ()=>navigate('/workoutplanner') }
              disabled={
                localStorage.getItem("usertype") === null|| localStorage.getItem("usertype") === "admin" || localStorage.getItem("visitedmobility")==="true" ? true:false
              }
            >
              <ListItemIcon>
                <FitnessCenterIcon color="secondary" />
              </ListItemIcon>
              <ListItemText
                primary="Exercise Planner"
                primaryTypographyProps={{
                  fontSize: { sx: "16px", md: "14px" },
                }}
              />
            </ListItemButton>
           
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalculateIcon color="secondary" />
              </ListItemIcon>
              <ListItemText
                primary="Calculators"
                primaryTypographyProps={{
                  fontSize: { sx: "16px", md: "14px" },
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton
              onClick={()=>navigate('/exerciseDetails')}
            >
              <ListItemIcon>
                <CastForEducationIcon color="secondary" />
              </ListItemIcon>
              <ListItemText
                primary="Tutorials"
                primaryTypographyProps={{
                  fontSize: { sx: "16px", md: "14px" },
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FoodBankIcon color="secondary" />
              </ListItemIcon>
              <ListItemText
                primary="Nutrition"
                primaryTypographyProps={{
                  fontSize: { sx: "16px", md: "14px" },
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        

          {(localStorage.getItem('usertype')==='normal')?<ListItem disablePadding>
            <ListItemButton onClick={()=>navigate('/workout')}  
              disabled={localStorage.getItem('workoutcreated')==="true"?false:true}
            >
              <ListItemIcon>
              <FitnessCenterIcon color="secondary" />
              </ListItemIcon>
              <ListItemText
                primary="Workout"
                primaryTypographyProps={{
                  fontSize: { sx: "16px", md: "14px" },
                }}
              />
            </ListItemButton>
          </ListItem>:<></>}
        

          {(localStorage.getItem('usertype')==='admin')?<ListItem disablePadding>
            <ListItemButton onClick={()=>navigate('/trainers')}  
            >
              <ListItemIcon>
              <AssignmentIndIcon color="secondary" />
              </ListItemIcon>
              <ListItemText
                primary="Assign Trainers"
                primaryTypographyProps={{
                  fontSize: { sx: "16px", md: "14px" },
                }}
              />
            </ListItemButton>
          </ListItem>:<></>}
 <Divider/>

          {(localStorage.getItem('usertype')==='admin')?<ListItem disablePadding>
            <ListItemButton onClick={()=>navigate('/createTrainer')}  
            
            >
              <ListItemIcon>
              <PeopleIcon color="secondary" />
              </ListItemIcon>
              <ListItemText
                primary="Create Trainer"
                primaryTypographyProps={{
                  fontSize: { sx: "16px", md: "14px" },
                }}
              />
            </ListItemButton>
          </ListItem>:<></>}
          <Divider />


        </List>
      </SwipeableDrawer>
    </>
  );
};

export default Navbar;
