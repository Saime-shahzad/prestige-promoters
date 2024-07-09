import React from "react";
import "./styles.css";
import { Box, Typography } from "@mui/material";

const CommonText = ({ textStyle, title, img, isShow = false }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "", gap: 1 }}>
      {isShow && img && (
        <Box sx={{ width: 18, height: 18 }}>
          <img
            src={img}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            alt="Icon"
          />
        </Box>
      )}
      <p className="commonPara" style={{ ...textStyle, margin: "0px" }}>
        {title}
      </p>
    </Box>
  );
};

const TextNoGradient = ({ textStyle, title }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "", gap: 1 }}>
      <p className="TextNoGradient" style={{ ...textStyle }} pt={0.2}>
        {title}
      </p>
    </Box>
  );
};

export { CommonText, TextNoGradient };
