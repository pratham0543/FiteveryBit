import React from "react";
import {
  Stack,
  Typography,
  IconButton,
  Button,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArticleIcon from "@mui/icons-material/Article";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CalculateIcon from "@mui/icons-material/Calculate";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import RssFeedIcon from "@mui/icons-material/RssFeed";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const openDrawer = () => {
    setisOpen(true);
  };

  // for typography below sm we need h4,h5 variant on both logos i.e. drawer and main heading
  //implementing typography using 2-3 typography components and same for button

  //material-ui core breakpoints has function to tell breakpoints (discussed later)

  return (
    // <Box

    //     sx={{ backgroundColor: 'primary.main', padding: 4 }}
    // >
    //     <Stack
    //         justifyContent={'space-between'}
    //         direction='row'

    //     >

    //         {/* Menu button to open drawer */}
    //         <IconButton
    //             aria-label='drawer'
    //             sx={{
    //                 border: "1px solid ",
    //                 borderColor: 'green',
    //                 borderRadius: '20%'
    //             }}
    //             size='medium'

    //         >
    //             <MenuIcon
    //                 color='secondary'
    //             />
    //         </IconButton>

    //         {/* LOGO */}
    //         <Typography
    //             variant='h3'
    //             color='white'
    //             sx={{ fontFamily: 'Outfit, sans-serif' }}>
    //             Fitevery Bit
    //         </Typography>

    //         {/* Register/Login */}
    //         <Stack direction='row'>
    //             <Button
    //                 color='secondary'
    //                 variant='contained'
    //                 size="small"
    //                 sx={{ color: 'white',backgroundColor:"red" }} >
    //                 Login
    //             </Button>

    //             <Button variant='text' color='secondary' size="small">
    //                 SignUp
    //             </Button>
    //         </Stack>

    //     </Stack>
    // </Box>
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
            FiteveryBit
          </Typography>
          {/* for medium screens */}
          <Typography
            variant="h4"
            sx={{
              display: { xs: "none", sm: "block", md: "none", lg: "none" },
            }}
          >
            FiteveryBit
          </Typography>

          {/* for small screens */}
          <Typography
            variant="h5"
            sx={{
              display: { xs: "block", sm: "none", md: "none", lg: "none" },
            }}
          >
            FiteveryBit
          </Typography>

          {/* Login/signup */}

          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ color: "white", display: { xs: "none", sm: "block" } }}
            >
              Login
            </Button>

            {/* for xtra small screen */}
            <Button
              variant="contained"
              color="secondary"
              size="small"
              sx={{ color: "white", display: { xs: "block", sm: "none" } }}
            >
              Login
            </Button>

            <Button
              variant="text"
              sx={{ color: "white", display: { xs: "none", sm: "block" } }}
            >
              SignUp
            </Button>

            {/* for xstra small screen */}
            <Button
              variant="text"
              size="small"
              sx={{ color: "white", display: { xs: "block", sm: "none" } }}
            >
              SignUp
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setisOpen(false)}
        sx={{ backgroundColor: "true" }}
      >
        <Typography
          p={1.5}
          variant="h4"
          sx={{
            fontWeight: 700,
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
          variant="h5"
          sx={{
            fontWeight: 700,
            backgroundColor: "primary.main",
            color: "true.main",
            display: { xs: "none", sm: "block", md: "none", lg: "none" },
          }}
          align="center"
        >
          Fitevery<span style={{ color: "#0AAE59" }}>Bit</span>
        </Typography>

        <Typography
          p={1.5}
          variant="h6"
          sx={{
            fontWeight: 700,
            backgroundColor: "primary.main",
            color: "true.main",
            display: { xs: "block", sm: "none", md: "none", lg: "none" },
          }}
          align="center"
        >
          Fitevery<span style={{ color: "#0AAE59" }}>Bit</span>
        </Typography>

        <Divider />

        {/* In Listitemtext we cannot set font size becuase it overrides typography so to set size we have primary typography props */}
        <List disablePadding>
          <ListItem disableGutters disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArticleIcon color="secondary" />
              </ListItemIcon>
              <ListItemText
                primary="About"
                primaryTypographyProps={{
                  fontSize: { sx: "16px", md: "14px" },
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton disabled>
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
            <ListItemButton>
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
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RssFeedIcon color="secondary" />
              </ListItemIcon>
              <ListItemText
                primary="Blogs"
                primaryTypographyProps={{
                  fontSize: { sx: "16px", md: "14px" },
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
