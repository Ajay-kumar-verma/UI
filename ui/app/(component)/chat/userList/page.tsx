"use client";
import React from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Container,
} from "@mui/material";

interface UserListProps {
  users: Record<string, string>;
  currentUser: string;
  onUserClick: (user: string) => void;
}

const UserList: React.FC<UserListProps> = ({
  users,
  currentUser,
  onUserClick,
}) => {
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
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxHeight: "100%",
          overflowY: "auto",
          p: 2,
          bgcolor: "background.paper",
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          👥 Online Users
        </Typography>
        <List dense>
          {Object.keys(users).map((user, index) => (
            <ListItem
              key={index}
              component="button"
              onClick={() => onUserClick(users[user])}
              sx={{
                bgcolor: user === currentUser ? "primary.light" : "transparent",
              }}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor: user === currentUser ? "primary.main" : "grey.500",
                  }}
                >
                  {user[0]?.toUpperCase()}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={user}
                primaryTypographyProps={{
                  fontWeight: user === currentUser ? "bold" : "normal",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default UserList;
