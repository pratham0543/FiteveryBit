import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./exploreblogs.css";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { Info } from "@mui/icons-material";



// used api for fitness blogs images
const ExploreBlogs = () => {
  const [fitImages, setfitImages] = useState([]);
  useEffect(() => {
    axios.get('https://api.unsplash.com/search/photos?client_id=GhB93pJCDeEGEYWsfrEn7oCZxa5SCQZsW9if-7Au-9E&query=fitness&per_page=25')
    .then(res=>setfitImages(res.data.results))
    .catch(err=>console.log(err))
  }, []);

  return (
    <Box mt={3} p={5}>
      <Typography variant="h4" fontWeight={600}>
        Explore our <span style={{ color: "#0AAE59" }}>Blogs</span>
      </Typography>
      <Typography variant="body2">
        Start your neverending journey from here{" "}
      </Typography>
      <Box
        sx={{ width: "70%", height: {xs:"55vh",sm:"50vh",md:"90vh"}, overflowY: "scroll" }}
        mt={2}
        mx="auto"
      >
        <ImageList variant="masonry"  gap={2}  sx={{
            // column count to make imagelist responsive
    columnCount: {
      xs: '1 !important',
      sm: '2 !important',
      md: '3 !important',
    },
  }}>
          {fitImages.length !==0 ? (fitImages.map((item) => (
            <ImageListItem key={item.id} sx={{ overflow: "hidden" }}>
              <img
                src={item.urls.regular}
                alt={item.alt_description}
                loading="lazy"
                className="itemImage"
              />
              <ImageListItemBar
                title={item.description}
                subtitle={item.user.username}
                actionIcon={
                  <IconButton sx={{ color: "rgba(255,255,255,0.54)" }}>
                    <Info />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))):<Typography>Loading...</Typography>}
        </ImageList>
      </Box>
    </Box>
  );
};

export default ExploreBlogs;
