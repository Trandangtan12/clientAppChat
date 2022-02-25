import { Box } from "@mui/system";
import React from "react";

const Message = ({ message: { user, text }, name }) => {
  let isSendByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSendByCurrentUser = true;
  }
  return isSendByCurrentUser ? (
    <Box sx={{ my: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            fontSize: "14px",
            color: "#8a8d91",
            mr: 1.5,
            textAlign: "right",
          }}
        >
          {trimmedName}
        </Box>
        <Box
          sx={{
            p: 2,
            background: "#1976d2",
            color: "white",
            borderRadius: 5,
            textAlign: "right",
            letterSpacing: 0,
            wordWrap: "break-word",
          }}
        >
          {text}
        </Box>
      </Box>
    </Box>
  ) : (
    <Box sx={{ my: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            p: 2,
            color: "black",
            background: "#e4e6eb",
            borderRadius: 5,
          }}
        >
          {text}
        </Box>
        <Box sx={{ fontSize: "14px", color: "#8a8d91", ml: 1 }}>{user}</Box>
      </Box>
    </Box>
  );
};

export default Message;
