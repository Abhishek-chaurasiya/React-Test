import React from "react";
import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";

const Progress = () => {
  return (
    <Grid sx={{ mr: 7, mb: 4 }}>
      <Paper
        elevation={0}
        sx={{
          height: "137px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Avatar
            sx={{
              color: "#10A44B",
              border: "2px solid #10A44B",
              backgroundColor: "white",
              mb: 1,
            }}
          >
            1
          </Avatar>
          <Typography
            sx={{
              width: "110px",
              height: "23px",
              fontWeight: 700,
              color: "#10A44B",
            }}
          >
            Upload EDFs
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Avatar
            sx={{
              color: "#C4C4C4",
              border: "2px solid #C4C4C4",
              backgroundColor: "white",
              mb: 1,
            }}
          >
            2
          </Avatar>
          <Typography
            sx={{
              width: "112px",
              height: "23px",
              fontWeight: 700,
              color: "#C4C4C4",
            }}
          >
            Map Channels
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Avatar
            sx={{
              color: "#C4C4C4",
              border: "2px solid #C4C4C4",
              backgroundColor: "white",
              mb: 1,
            }}
          >
            3
          </Avatar>
          <Typography
            sx={{
              width: "112px",
              height: "23px",
              fontWeight: 700,
              color: "#C4C4C4",
            }}
          >
            <span>Save Preview</span>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Progress;
