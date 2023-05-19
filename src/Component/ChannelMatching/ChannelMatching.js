import React from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Button,
} from "@mui/material";

const ChannelMatching = () => {
  return (
    <Box sx={{ mb: 3 }}>
      {/* Channel name tackling started */}
      <Paper
        elevation={0}
        sx={{
          height: "102px",
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid>
          <Typography
            sx={{ fontFamily: "sans-serif", fontWeight: "550", ml: 6 }}
          >
            Channel1
          </Typography>
        </Grid>
        <Grid sx={{ minWidth: 250 }}>
          <FormControl fullWidth>
            <InputLabel id="primarychannel">Select Channel</InputLabel>
            <Select
              labelId="primarychannel"
              id="primarychannel"
              value=""
              label="Select Channel"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid sx={{ minWidth: 250 }}>
          <FormControl fullWidth>
            <InputLabel id="primarychannel">Select Channel</InputLabel>
            <Select
              labelId="primarychannel"
              id="primarychannel"
              value=""
              label="Select Channel"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <Button sx={{ fontWeight: "550", fontFamily: "sans-serif" }}>
            + Add backup channel
          </Button>
        </Grid>
      </Paper>
      {/* Channel name tackling completed */}
    </Box>
  );
};

export default ChannelMatching;
