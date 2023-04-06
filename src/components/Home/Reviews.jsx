import React from "react";
import { Paper, Typography, Avatar, Stack, Rating } from "@mui/material";
import { pink } from "@mui/material/colors";

const Reviews = () => {
  return (
    <Paper
      sx={{
        width: "30%",
        background: "rgba(255,255,255,0.05)",
        boxShadow: "0px 15px 32px rgba(255,255,255,0.05)",
        backdropFilter: "blur(30px)",
        padding: "16px",
        color: "true.main",
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" spacing={1}>
          <Avatar sx={{ backgroundColor: pink[500] }}>JD</Avatar>
          <Stack>
            <Stack direction="row" spacing={1}>
              <Typography fontWeight={700} color="true.main">
                John Doe
              </Typography>
              <Typography m={0} color="cap.main" variant="caption">
                (Weight Loss)
              </Typography>
            </Stack>
            <Rating
              name="read-only"
              value={3.5}
              precision={0.5}
              readOnly
              size="small"
            />
          </Stack>
        </Stack>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, maiores
          aperiam! Similique laborum quod rem voluptates debitis perspiciatis
          vero beatae?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis esse dolorem dolorum exercitationem blanditiis enim.
        </Typography>
      </Stack>
    </Paper>
  );
};

export default Reviews;
