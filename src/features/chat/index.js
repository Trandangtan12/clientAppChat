import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation } from "react-router";
import { Container, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import InfoBar from "./components/InfoBar/InfoBar";
import InputChat from "./components/InputChat/InputChat";
import Messages from "./components/Messages/Messages";

let socket;
const ENDPOINT = "https://appchat25022021.herokuapp.com/";

const Chat = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  console.log("staging");

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT, {
      transports: ["websocket", "polling", "flashsocket"],
    });

    setName(name);
    setRoom(room);
    socket.emit("join", { name, room }, ({ error }) => {});

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);
  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <Container sx={{ p: 0 }} maxWidth="sm">
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <InfoBar room={room} />
        <Box sx={{ flexGrow: "1", overflow: "auto", px: 1 }}>
          <Messages messages={messages} name={name} />
        </Box>
        <InputChat
          sendMessage={sendMessage}
          message={message}
          setMessage={setMessage}
        />
      </Box>
    </Container>
  );
};

export default Chat;
