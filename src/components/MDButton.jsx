import { Box, Button } from "@mui/material";
import React from "react";
import BoldTypography from "./BoldTypography";
import colors from "../assets/color/color";

import google from "./../assets/images/google.png";

const MDButton = ({
  title,
  borderImage,
  textColor,
  isLogo = false,
  style,
  onClick,
  type,
}) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      variant="outlined"
      sx={{
        borderWidth: { sm: 2, xs: 0.5 },
        // borderImage: colors.gradientText,
        borderImage: borderImage,
        borderImageSlice: 1,
        py: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        "&:hover": {
          backgroundColor: "transparent",
          color: "none",
          borderWidth: { sm: 2, xs: 0.5 },
          borderImage: borderImage,
          borderImageSlice: 1,
        },
        ...style,
      }}
    >
      {isLogo && (
        <Box sx={{ width: "20px", height: "20px", mb: 1 }}>
          <img
            src={google}
            alt="google"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      )}
      <BoldTypography
        title={title}
        backgroundImage={textColor}
        style={{
          fontWeight: 500,
          fontSize: { sm: 18, xs: 14 },
          cursor: "pointer",
        }}
      />
    </Button>
  );
};

export default MDButton;
