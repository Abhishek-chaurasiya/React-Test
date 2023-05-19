import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import ChannelMatching from "../ChannelMatching/ChannelMatching";

const MapContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mr: 7,
        mb: 4,
      }}
    >
      {/* Channel name tackling started */}
      <Paper
        elevation={0}
        sx={{
          height: "63px",
          backgroundColor: "#E5F3FF",
          padding: 3,
          mb: 3,
        }}
      >
        <Stack direction="row" spacing={10}>
          <Typography
            sx={{ fontFamily: "sans-serif", fontWeight: "550", ml: 3 }}
          >
            Channel
          </Typography>
          <Typography sx={{ fontFamily: "sans-serif", fontWeight: "550" }}>
            Primary Channel(default Select)
          </Typography>
          <Typography sx={{ fontFamily: "sans-serif", fontWeight: "550" }}>
            Reference Channel(default N/A)
          </Typography>
        </Stack>
      </Paper>
      {/* Channel name tackling completed */}
      <ChannelMatching />
      <ChannelMatching />
      <ChannelMatching />
      <ChannelMatching />
    </Box>
  );
};

export default MapContent;
