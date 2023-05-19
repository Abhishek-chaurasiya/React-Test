import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import React from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Progress from "../Progress/Progress";
import { Link } from "react-router-dom";
import Header from "../Header/Header.js";
const drawerWidth = 260;

const Content = () => {
  return (
    <Box
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "#F8F8F8",
      }}
    >
      <Grid sx={{ display: "flex", flexDirection: "column", ml: 7 }}>
        {/* Title and Icon tackling started */}
        <Header />
        {/* Title and Icon tackling Completed */}

        {/* Progress tackling started */}
        <Progress />
        {/* Progress tackling Completed */}
        {/* File Upload tackling Started */}
        <Grid sx={{ mr: 7, mb: 7 }}>
          <Paper
            sx={{
              height: "500px",
              padding: "32px",
            }}
            elevation={0}
          >
            <Paper
              sx={{
                height: "436px",
                border: "2px dashed #8A8A8A",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              elevation={0}
            >
              <FileCopyIcon
                sx={{ color: "#2F7EC7", fontSize: "50px", mb: 2 }}
              />
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#EAEAEA",
                  color: "#6D6D6D",
                  mb: 2,
                  border: "1px solid #6D6D6D",
                  padding: "12px 24px 12px 24px",
                }}
              >
                Browse Files
              </Button>
              <Typography
                paragraph
                sx={{ fontWeight: "550", color: "#0F0F0F" }}
              >
                or drop files here
              </Typography>
            </Paper>
          </Paper>
        </Grid>
        {/* File Upload tackling Completed */}
      </Grid>
    </Box>
  );
};

export default Content;
