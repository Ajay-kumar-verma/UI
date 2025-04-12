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
  onUserClick: (user: string) => void;
}

const UserList: React.FC<UserListProps> = ({ users=["Alice", "Bob", "Charlie", "David"], currentUser='Alice', onUserClick }) => {
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
          <ListItem
            key={index}
            component="button"
            onClick={() => onUserClick(user)}
            sx={{
              bgcolor: user === currentUser ? 'primary.light' : 'transparent',
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
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
