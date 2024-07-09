import { Box } from "@mui/material";
import React from "react";
import colors from "../assets/color/color";

const SmallBox = ({ title }) => {
  return (
    <Box
      sx={{
        border: `1px solid ${colors.grey500}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 1,
      }}
      px={0.9}
    >
      <p style={{ color: colors.grey500, margin: 0, padding: 0 }}>{title}</p>
    </Box>
  );
};

export default SmallBox;
