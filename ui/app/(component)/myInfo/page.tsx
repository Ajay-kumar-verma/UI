"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Container, Divider, Typography } from "@mui/material";
import { Image } from "antd";
import { Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

import Feedback from "../feedback/page";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  border:`1px solid ${colorize()}`,
  borderRadius: "10px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "black",
  fontWeight: "bold",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function colorize() {
 return `#`+ Math.floor(Math.random() * 16777215).toString(16);
}

export default function ColumnLayoutInsideGrid() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Box sx={{ flexGrow: 1, position: "relative", zIndex: 1 }}>
        <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 8 }}>
          <Grid size={4}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center", // horizontal center
                alignItems: "center", // vertical center
              }}
            >
              <Container maxWidth="lg" sx={{ position: "relative" }}>
                <Typography
                  variant="h1"
                  sx={{
                    width: "100%",
                    position: "absolute",
                    top: "50%",
                    left: "40%",
                    transform: "translate(-30%, -30%) rotate(-30deg)",
                    color: "rgba(87, 71, 231, 0.2)",
                    fontSize: "3em",
                    fontWeight: "bold",
                    pointerEvents: "none",
                    zIndex: 2,
                  }}
                >
                  Open for teaching.
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Item sx={{ height: "120px", boxSizing: "border-box" }}>
                    <Image
                      width={100}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                  </Item>
                  <Stack spacing={2}>
                    <Item>Ajay kumar verma</Item>
                    <Item>
                      <Button
                        size="small"
                        variant="text"
                        color="primary"
                        startIcon={<PhoneIcon />}
                        href="tel:+918095240976"
                      >
                        Call ME
                      </Button>
                    </Item>
                  </Stack>
                  <Stack spacing={2}>
                    <Item> Exp & Rating</Item>
                    <Item>Dist</Item>
                  </Stack>
                </Stack>
              </Container>
            </Box>
          </Grid>
          <Grid size={4}>
            <Stack spacing={2}>
              <Divider textAlign="center">Acadmic</Divider>
              <Item>Highest Qualification:BE(CSE)</Item>
              <Item>College Name:T john instituite of technology</Item>
              <Item>School name:Devi gyal hight school</Item>
              <Item>Extra curicular activity</Item>
            </Stack>
          </Grid>
          <Grid size={4}>
            <Stack spacing={2}>
              <Divider textAlign="center">Interested in Teaching</Divider>
              <Item>Board: CBSE,CISCE,NIOS,BSEB</Item>
              <Item>Class: V to X</Item>
              <Item>Subjects: All</Item>
              <Item>Days: 5 days a week,M W F,T T S </Item>
            </Stack>
          </Grid>
          <Grid size={4}>
            <Stack spacing={2}>
              <Divider textAlign="center">Address</Divider>
              <Item>Addr: Boring Road</Item>
              <Item>Pin:800001</Item>
              <Item>City: Patna</Item>
              <Item>State: Bihar</Item>
            </Stack>
          </Grid>
          <Grid size={4}>
            <Stack spacing={2}>
              <Divider textAlign="center">Fee expectation</Divider>
              <Item>NC to II: 1000, Negotial</Item>
              <Item>III to V: 1500, Negotial</Item>
              <Item>VI to VIII: 2000, Negotial</Item>
              <Item>IX, X:3000, Negotial</Item>
            </Stack>
          </Grid>
          <Grid size={4}>
            <Stack spacing={2}>
              <Divider textAlign="center">Extra information</Divider>
              <Item>Anything teacher wants to add</Item>
              <Item>Extra information </Item>
            </Stack>
          </Grid>
        </Grid>
        <Container maxWidth="xl" sx={{ mt: 4 }}>
          <Container maxWidth="md">
            <Grid>
              <Divider textAlign="center">Comments & Feedback</Divider>
              <Stack spacing={2}>
                <Feedback />
              </Stack>
            </Grid>
          </Container>
        </Container>
      </Box>
    </Container>
  );
}
