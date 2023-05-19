import React from "react";
import { Box, Button, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import MapChannel from "../../Pages/MapChannel";

const drawerWidth = 260;
const Footer = () => {
  return (
    <Box
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "#F8F8F8",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          height: "90px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid sx={{ ml: 6 }}>
          <Button
            variant="outlined"
            sx={{
              fontFamily: "DM Sans",
              fontStyle: "normal",
              fontWeight: "500",
              backgroundColor: "#FFFFFF",
              color: "#6D6D6D",
              border: "1px solid #6D6D6D",
              padding: "12px 45px",
              mr: 1,
            }}
          >
            Back
          </Button>
          <Button sx={{ color: "#959595", fontWeight: "500" }}>
            Cancel Montage
          </Button>
        </Grid>
        <Grid sx={{ mr: 6 }}>
          <Link to="/mapchannel">
            <Button variant="contained" sx={{ padding: "12px 45px" }}>
              next
            </Button>
          </Link>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Footer;
