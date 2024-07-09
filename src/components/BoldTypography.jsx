import { Typography } from "@mui/material";
import React from "react";
import colors from "../assets/color/color";

const BoldTypography = ({
  title,
  variant,
  style,
  backgroundImage,
  onClick,
}) => {
  return (
    <Typography
    className="bold-text"
      sx={{
        color: "transparent",
        // backgroundImage: colors.gradientText,
        backgroundImage: backgroundImage,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        fontFamily: "APOLLO",
        ...style,
      }}
      onClick={onClick}
    >
      {title}
    </Typography>
  );
};

export default BoldTypography;
