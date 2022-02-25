import { Box } from "@mui/system";
import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Message/Message";

const Messages = ({ messages, name }) => (
  <ScrollToBottom>
    {messages.map((message, i) => (
      <Box key={i}>
        <Message message={message} name={name} />
      </Box>
    ))}
  </ScrollToBottom>
);

export default Messages;
