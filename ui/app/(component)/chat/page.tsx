"use client";

import React from "react";
import Chat from "./chatsec/page";
import { Box, Container, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";


export default function chat() {
  const [Name, setName] = React.useState<string>("");
  const [join, setJoin] = React.useState<Boolean>(false);
  
  const JoinChat = () => {
    if (Name.trim() === "") return;
    setJoin(true);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "100%",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
     >  
      {join && (
        <Chat
          roomId="12345"
          username={Name}
          onUserClick={(user) => setName(user)}
        />
      )}
      {!join && (
        <Container
          maxWidth="xl"
          sx={{
            height: "100%",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="type your name..."
              variant="outlined"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && JoinChat()}
            />
            <IconButton color="primary" onClick={JoinChat}>
              <SendIcon />
            </IconButton>
          </Box>
        </Container>
      )}
    </Container>
  );
}
