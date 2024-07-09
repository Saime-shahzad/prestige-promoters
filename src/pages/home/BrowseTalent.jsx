import { Box, Stack } from "@mui/material";
import React from "react";
import BoldTypography from "../../components/BoldTypography";
import Images from "../../assets/images";
import colors from "../../assets/color/color";

const BrowseTalent = ({ images }) => {
  return (
    <Stack
      sx={{
        // height: { xs: 200, sm: 275 },
        pt: 1.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #585858",
        borderRadius: 5,
        position: "relative",
        px: 2,
        backgroundColor: colors.dark,
      }}
    >
      <Box sx={{ width: { xs: 120, sm: 143 }, height: { xs: 200, sm: 245 } }}>
        <img
          src={images}
          style={{ width: "100%", height: "100%", objectFit: "contain" }} // changed to "contain"
        />
      </Box>
      <Box
        sx={{
          width: 14,
          height: 14,
          position: "absolute",
          right: 20,
          bottom: 25,
          transition: "transform 0.3s",
          "&:hover": {
            transform: "rotate(15deg)",
            cursor: "pointer",
          },
        }}
      >
        <img
          src={Images.plus}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
    </Stack>
  );
};

export default BrowseTalent;
