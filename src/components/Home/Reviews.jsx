import React from "react";
import { Paper, Typography, Avatar, Stack, Rating } from "@mui/material";
import { pink } from "@mui/material/colors";

const Reviews = ({name,plan,rating,desc}) => {
  return (
    <Paper
      sx={{
        width: "30%",
        background: "rgba(255,255,255,0.05)",
        boxShadow: "0px 15px 32px rgba(255,255,255,0.05)",
        backdropFilter: "blur(30px)",
        padding: "16px",
        color: "true.main",
        marginLeft:"2em"
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" spacing={1}>
          <Avatar sx={{ backgroundColor: pink[500] }}>JD</Avatar>
          <Stack>
            <Stack direction="row" spacing={1}>
              <Typography fontWeight={700} color="true.main">
                {name}
              </Typography>
              <Typography m={0} color="cap.main" variant="caption">
                ({plan})
              </Typography>
            </Stack>
            <Rating
              name="read-only"
              value={rating}
              precision={0.5}
              readOnly
              size="small"
            />
          </Stack>
        </Stack>
        <Typography variant="body1">
          {desc}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default Reviews;
