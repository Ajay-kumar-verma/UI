'use client'

import React from "react";
import { Box, Typography, Container, Stack, Button } from "@mui/material";

export default function WatermarkContainer() {
  return (
    <Container maxWidth="md" sx={{ py: 6, position: "relative" }}>
      {/* Watermark text */}
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-45deg)",
          color: "rgba(0, 0, 0, 0.1)", // Light gray color
          fontSize: "6rem",
          fontWeight: "bold",
          pointerEvents: "none", // Prevent interaction with watermark
          zIndex: 0,
        }}
      >
        Watermark Text
      </Typography>

      {/* Content */}
      <Box
        sx={{
          position: "relative", // Content is positioned above the watermark
          zIndex: 1,
          mt:40
        }}
      >
        <Typography variant="h4" textAlign="center" sx={{ mb: 3 }}>
          Watermarked Content
        </Typography>

        <Stack spacing={3} alignItems="center">
          <Button variant="contained">Click Me</Button>
        </Stack>
      </Box>
    </Container>
  );
}
