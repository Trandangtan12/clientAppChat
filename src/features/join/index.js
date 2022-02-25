import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "./join.css";
import { Button, Container } from "@mui/material";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
   <Container maxWidth="sm">
      <h1 className="heading">Join</h1>
      <div className="form">
        <div>
          <TextField
            fullWidth
            onChange={(e) => setName(e.target.value)}
            label="Name"
            sx={{ my: 1 }}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            fullWidth
            onChange={(e) => setRoom(e.target.value)}
            label="Room"
            variant="outlined"
            sx={{ my: 1 }}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <Button variant="contained" fullWidth sx={{ my: 2 }}>
            Sign In
          </Button>
        </Link>
      </div>
      </Container>
  );
};

export default Join;
