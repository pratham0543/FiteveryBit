import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  CircularProgress,
  IconButton
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Video from "./Video";
import axios from "axios";



const Videotutorial = () => {
  const location = useLocation();
  const [searchExerciseName, setsearchExerciseName] = useState('')
  const [videoDetails, setvideoDetails] = useState([]);
  const [exerciseName, setexerciseName] = useState(location.state.name);
  var video = <CircularProgress color="success" />;
  if (videoDetails.length === 0 && videoDetails === true) {
    video = <CircularProgress color="success" />;
  } else if (videoDetails.length !== 0 && videoDetails !== true) {
    video = <Video id={videoDetails[0].id.videoId} />;
  }

  const handleSubmit=(e)=>
  {
    e.preventDefault();
    setexerciseName(searchExerciseName)

  }

  const handleTextChange=(e)=>
  {
    setsearchExerciseName(e.target.value)
  }
  useEffect(() => {
    setvideoDetails(true);
    let url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCKMP2L7dpNlXVHWJ42idrxR-DvFWfmpDE&part=snippet&q=how to do ${exerciseName} exercise&maxResults=1`;
    axios
      .get(url)
      .then((response) => {
        setvideoDetails(response.data.items);
        console.log(response.data.items);
      })
      .catch((err) => console.log(err));
  }, [exerciseName]);

  return (
    <>
      <Typography variant="h3" textAlign="center" sx={{ mt: "80px" }}>
        Video Tutorials
      </Typography>
      <Typography variant="body1" mt={1} mb={1} textAlign="center">
        Learn how to perform exercises using correct technique. Search different
        exercises based on name of any muscle group.
      </Typography>
      <Box mx="auto" textAlign="center" mt={3} mb={3} width="80%">
        <form onSubmit={handleSubmit}>
        <TextField
          label="Search Exercises"
          fullWidth
          value={searchExerciseName}
          onChange={handleTextChange} 
          color="primary"
          InputProps={{
            style: {
              borderRadius: "20px",
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit"
                
                >
                  <SearchIcon color="secondary"/>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        </form>
      </Box>

      <Box mx="auto" textAlign="center" mb={3}  sx={{height:{xs:"260px",sm:"450px",lg:"500px"},width:{xs:"370px",sm:"620px",md:"750px",lg:"950px"}}}>
        {video}

        {/* <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/PJnchirBCog"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          ht=260 370
        ></iframe> */}
      </Box>
    </>
  );
};

export default Videotutorial;
