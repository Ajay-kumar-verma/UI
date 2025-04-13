"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  TextField,
  IconButton,
  Typography,
  Avatar,
  Paper,
  Stack,
  Container,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import UserList from "../userList/page";
import io from "socket.io-client";
const ENDPOINT = "localhost:2000";
const socket = io(ENDPOINT);

interface BeautifulChatProps {
  roomId: string;
  username: string;
  onUserClick: (user: string) => void;
}

console.log("Chat Component is called");
const initialMessages = [
  { user: "Alice", text: "Hey there! 👋" },
  { user: "Bob", text: "Hello Alice! How are you?" },
  { user: "Alice", text: "I’m good, thanks! Working on a new project." },
  {
    user: "Alice",
    text: "Sure! I’ll share it once I clean up the code a bit. 😅",
  },
  { user: "Bob", text: "Haha, no worries. Looking forward to it!" },
  { user: "Alice", text: "Thanks! What are you working on these days?" },
  {
    user: "Bob",
    text: "Mostly UI work. Playing around with MUI and Tailwind lately.",
  },
  {
    user: "Alice",
    text: "MUI is awesome for rapid prototyping. Tailwind too, once you get used to it.",
  },
  {
    user: "Bob",
    text: "Exactly! I just built a dashboard UI in like an hour. 🔥",
  },
  { user: "Alice", text: "That’s sick! Send me a screenshot later 😄" },
];

const BeautifulChat = ({
  roomId,
  username,
  onUserClick,
}: BeautifulChatProps) => {
  const [UsersId, setUsersId] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] =
  useState<{ user: string; text: string }[]>(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.on("newuser", (id) => setUsersId((state) => [...state, id]));
    socket.on("userDisconnect", (id) =>
      setUsersId((state) => state.filter((user) => user !== id))
    );
    socket.on("receiveMessage", (message: { user: string; text: string }) => {
      const { text, user } = message;
      setMessages((prev) => [...prev, { text, user }]);
    });

    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    return () => {
      socket.off("newuser", (id) => console.log(id));
      socket.off("userDisconnect", (id) => console.log(id));
      socket.off("receiveMessage", (message) => console.log(message));
    };
  }, []);

  const handleSend = () => {
    if (message.trim() === "") return;
    const msg = { user: username, text: message };
    socket.emit("sendMessage", { roomId, message: msg });
    setMessages((prev) => [...prev, { ...msg, user: "me" }]);
    setMessage("");
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
      <UserList
        users={UsersId}
        currentUser={username}
        onUserClick={onUserClick}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Chat Room: {roomId}
        </Typography>
        <Typography variant="h6" gutterBottom>
          User: {username}
        </Typography>
      </Box>

      <Paper
        elevation={3}
        sx={{
          flexGrow: 1,
          p: 2,
          overflowY: "auto",
          mb: 2,
          borderRadius: 2,
          bgcolor: "background.default",
        }}
      >
        <Stack spacing={2}>
          {messages.map((msg, i) => {
            const isMe = msg.user === "me";
            return (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: isMe ? "flex-end" : "flex-start",
                }}
              >
                <Box
                  sx={{
                    maxWidth: "75%",
                    bgcolor: isMe ? "primary.main" : "grey.300",
                    color: isMe ? "white" : "black",
                    px: 2,
                    py: 1,
                    borderRadius: 3,
                    borderTopRightRadius: isMe ? 0 : 3,
                    borderTopLeftRadius: isMe ? 3 : 0,
                  }}
                >
                  {!isMe && (
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary", mb: 0.5 }}
                    >
                      {msg.user}
                    </Typography>
                  )}
                  <Typography variant="body1">{msg.text}</Typography>
                </Box>
              </Box>
            );
          })}
          <div ref={bottomRef} />
        </Stack>
      </Paper>

      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <IconButton color="primary" onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default BeautifulChat;
