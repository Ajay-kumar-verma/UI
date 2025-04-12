"use client";

import React from "react";
import UserList from "./userList/page";
import Chat from "./chatsec/page";
import { Container } from "@mui/material";

export default function chat() {
  return (
    <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "row", gap: 2, padding: 2 }}>
      <UserList
        users={["Alice", "Bob", "Charlie", "David"]}
        currentUser="Alice"
      />
      <Chat roomId="12345" username="Alice" />
    </Container>
  );
}
