import React from 'react'
import {
    Stack,
    Typography,
    IconButton,
    Button,
    AppBar,
    Toolbar,
    Drawer,
    List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider

} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ArticleIcon from '@mui/icons-material/Article';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CalculateIcon from '@mui/icons-material/Calculate';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { useState } from 'react';


const Navbar = () => {

    const [isOpen, setisOpen] = useState(false);

    const openDrawer = () => {
        setisOpen(true);
    }

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
            <AppBar position='fixed' sx={{ p: 1 }}>
                <Toolbar sx={{ justifyContent: "space-between " }}>

                    {/* MenuBar */}

                    <IconButton
                        edge='start'
                        color='inherit'
                        aria-label='drawer'
                        sx={{
                            borderColor: 'green',
                        }}
                        onClick={openDrawer}

                    >
                        <MenuIcon color='secondary' />
                    </IconButton>

                    {/* Logo */}

                    <Typography variant='h3' sx={{ position: "relative", left: "20px" }} >
                        FiteveryBit
                    </Typography>


                    {/* Login/signup */}

                    <Stack direction='row' spacing={1}>
                        <Button
                            variant='contained'
                            color='secondary'
                            sx={{ color: "white" }}
                        >
                            Login
                        </Button>
                        <Button
                            variant="text"
                            sx={{ color: "white" }}
                        >
                            SignUp

                        </Button>

                    </Stack>
                </Toolbar>
            </AppBar>


            <Drawer
                anchor='left'
                open={isOpen}
                onClose={() => setisOpen(false)}
                sx={{ backgroundColor: "true" }}
            >
                <Typography p={1.5} variant='h4' sx={{fontWeight:700,backgroundColor:"primary.main",color:"true.main"}} align='center'>
                    Fitevery<span style={{color:"#0AAE59"}}>Bit</span>
                </Typography>
                <Divider/>
                <List disablePadding>
                    <ListItem disableGutters disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ArticleIcon color='secondary' />
                            </ListItemIcon>
                            <ListItemText primary="About" />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem  disablePadding>
                        <ListItemButton disabled  >
                            <ListItemIcon>
                                <FitnessCenterIcon color='secondary' />
                            </ListItemIcon>
                            <ListItemText primary="Exercise Planner" />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem  disablePadding>
                        <ListItemButton >
                            <ListItemIcon>
                                <CalculateIcon color='secondary' />
                            </ListItemIcon>
                            <ListItemText primary="Calculators" />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem  disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CastForEducationIcon color='secondary' />
                            </ListItemIcon>
                            <ListItemText primary="Tutorials" />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem  disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FoodBankIcon color='secondary' />
                            </ListItemIcon>
                            <ListItemText primary="Nutrition" />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem  disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <RssFeedIcon color='secondary' />
                            </ListItemIcon>
                            <ListItemText primary="Blogs" />
                        </ListItemButton>
                    </ListItem>
                    <Divider />









                </List>





            </Drawer>

        </>
    )
}

export default Navbar