import { Avatar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

const InfoBar = ({ room }) => {
  return (
    <Box
      sx={{
        background: "#1976d2",
        boxSizing: "border-box",
        px: 2,
        color: "white",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box>
          <MeetingRoomIcon />
        </Box>
        <Box sx={{ pl: 1 }}>
          <h3>{room}</h3>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoBar;
