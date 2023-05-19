import React from "react";
import Sidenav from "../Component/Sidebar/Sidenav";
import Header from "../Component/Header/Header";
import Progress from "../Component/Progress/Progress";
import { Box, Grid } from "@mui/material";
import MapContent from "../Component/MapChannel/MapContent";
import Footer from "../Component/Footer/Footer";
const drawerWidth = 260;

const MapChannel = () => {
  return (
    <Box
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "#F8F8F8",
      }}
    >
      <Grid sx={{ display: "flex", flexDirection: "column", ml: 7 }}>
        <Sidenav />
        <Header />
        <Progress />
        <MapContent />
      </Grid>
    </Box>
  );
};

export default MapChannel;
