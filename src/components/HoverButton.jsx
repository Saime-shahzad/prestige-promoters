import { Button, Typography } from "@mui/material";
import React from "react";
import colors from "../assets/color/color";

const HoverButton = ({ width, title, height, fontSize }) => {
  return (
    <Button
      p={4}
      variant="outlined"
      sx={{
        border: `1px solid ${colors.primary}`,
        color: "#fff",
        borderRadius: 1, // Apply border radius here
        width: width,
        height: height,
        fontFamily: "APOLLO",
        position: "relative", // Ensure Button acts as a container for positioning
        "&:hover": {
          backgroundImage: colors.hoverBackground,
          borderImage: colors.gradientText,
          borderImageSlice: 1,
          borderRadius: 1,
          transition: "all 2s ease",
        },
        "&:hover .hover-title": {
          display: "none",
        },
        "&:hover .hover-title-show": {
          display: "flex",
          transition: "all 2s ease",
        },
      }}
    >
      <Typography
        p={0.1}
        className="hover-title"
        sx={{
          fontFamily: "POPPINS",
          // fontFamily: "APPOLO",
          textTransform: "capitalize",
          color: "transparent",
          backgroundImage: colors.gradientText,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          fontSize: fontSize ? fontSize : 22,
          fontWeight: 400,
          letterSpacing: "3%",
        }}
      >
        {title}
      </Typography>
      <Typography
        p={0.1}
        className="hover-title-show"
        sx={{
          display: "none",
          textTransform: "capitalize",
          color: colors.text,
          fontFamily: "APPOLO",
          fontSize: fontSize ? fontSize : 22,
          fontWeight: 400,
          letterSpacing: "3%",
        }}
      >
        {title}
      </Typography>
    </Button>
  );
};

export default HoverButton;
