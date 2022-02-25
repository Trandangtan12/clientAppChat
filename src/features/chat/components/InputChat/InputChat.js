import React from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const InputChat = (props) => {
  const { sendMessage, message, setMessage } = props;
  return (
    <Box sx={{ display: "flex", mb: 1, px: 1 }}>
      <Box sx={{ flexGrow: "1" }}>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          placeholder="Aa"
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />
      </Box>
      <Box>
        <Button
          onClick={(e) => sendMessage(e)}
          variant="contained"
          sx={{ height: "100%", ml: 1 }}
        >
          <SendOutlinedIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default InputChat;
