import React from "react";
import "./styles.css";
import { Box, Button, Typography } from "@mui/material";

const GradientButton = ({ children, onClick }) => {
  return (
    <Box border="1px solid #B19545">
      <Typography>Get Started</Typography>
    </Box>
  );
};

export default GradientButton;
