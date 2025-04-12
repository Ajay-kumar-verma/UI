'use client';
import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from '@mui/material';

interface UserListProps {
  users: string[];
  currentUser: string;
}

const UserList: React.FC<UserListProps> = ({ users, currentUser }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 250,
        maxHeight: '100%',
        overflowY: 'auto',
        p: 2,
        bgcolor: 'background.paper',
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        👥 Online Users
      </Typography>
      <List dense>
        {users.map((user, index) => (
          <ListItem key={index} sx={{ bgcolor: user === currentUser ? 'primary.light' : 'transparent', borderRadius: 1 }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: user === currentUser ? 'primary.main' : 'grey.500' }}>
                {user[0]?.toUpperCase()}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={user}
              primaryTypographyProps={{
                fontWeight: user === currentUser ? 'bold' : 'normal',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default UserList;
