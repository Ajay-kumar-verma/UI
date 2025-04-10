"use client";

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  MenuItem,
  Rating,
  Snackbar,
  Stack,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useState } from "react";

export default function TeacherFeedbackForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    classGrade: "",
    teacher: "",
    date: "",
    communication: 0,
    interaction: 0,
    clarity: 0,
    responsiveness: 0,
    support: 0,
    punctuality: 0,
    overall: 0,
    updates: "",
    comfort: "",
    improvement: "",
    praise: "",
    suggestions: "",
    incidents: "",
    shareConsent: false,
    followUp: false,
  });

  const [snackOpen, setSnackOpen] = useState(false);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRatingChange = (name: any, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted Feedback:", formData);
    setSnackOpen(true);
    setFormData({
      parentName: "",
      studentName: "",
      classGrade: "",
      teacher: "",
      date: "",
      communication: 0,
      interaction: 0,
      clarity: 0,
      responsiveness: 0,
      support: 0,
      punctuality: 0,
      overall: 0,
      updates: "",
      comfort: "",
      improvement: "",
      praise: "",
      suggestions: "",
      incidents: "",
      shareConsent: false,
      followUp: false,
    });
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h5" gutterBottom textAlign="center">
        Parent Feedback Form for Teacher
      </Typography>

      <Box component="form" onSubmit={handleSubmit} mt={4}>
        <Stack spacing={3}>
          {/* Ratings */}
          {[
            ["communication", "Communication with Parents"],
            ["interaction", "Interaction with Student"],
            ["clarity", "Clarity of Explanation"],
            ["responsiveness", "Responsiveness"],
            ["support", "Support & Guidance"],
            ["punctuality", "Punctuality & Professionalism"],
            ["overall", "Overall Satisfaction"],
          ].map(([key, label]) => (
            <Box key={key}>
              <Typography>{label}</Typography>
              <Rating
                name={key}
                value={formData[key as keyof typeof formData]}
                onChange={(_, value) =>
                  handleRatingChange(key as keyof typeof formData, value)
                }
              />
            </Box>
          ))}

          <TextField
            label="Any suggestions for improvement?"
            name="suggestions"
            value={formData.suggestions}
            onChange={handleChange}
            fullWidth
            multiline
            rows={2}
          />
          <TextField
            label="Specific incidents or examples you'd like to share?"
            name="incidents"
            value={formData.incidents}
            onChange={handleChange}
            fullWidth
            multiline
            rows={2}
          />

          {/* Options */}
          <FormControlLabel
            control={
              <Checkbox
                name="shareConsent"
                checked={formData.shareConsent}
                onChange={handleChange}
              />
            }
            label="I consent to share this feedback with the teacher"
          />
          <Button variant="contained" type="submit">
            Submit Feedback
          </Button>
        </Stack>
      </Box>

      <Snackbar
        open={snackOpen}
        autoHideDuration={5000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Thank you! Your feedback has been submitted.
        </Alert>
      </Snackbar>
    </Container>
  );
}
