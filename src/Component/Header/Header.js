import React from "react";
import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
const drawerWidth = 260;
const Header = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        mt: 7,
        mr: 7,
        mb: 5,
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: "teal",
      }}
    >
      <Typography
        sx={{
          width: "162px",
          height: "36px",
          fontSize: "28px",
          fontWeight: 700,
          fontFamily: "DM Sans",
          lineHeight: "36px",
          letterSpacing: "0.02rem",
        }}
      >
        TEST_STUDY
      </Typography>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <AccountCircleRoundedIcon />

        <Typography sx={{ ml: 1 }}>Abhishek chaurasiya</Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
