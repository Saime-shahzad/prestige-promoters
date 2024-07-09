import { Box, Typography } from "@mui/material";
import React from "react";
import "./styles.css";
import colors from "../../../../assets/color/color";

const UserImages = ({
  selectedImage,
  handleImageClick,
  handlePrevious,
  handleNext,
  smallView,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        gap: 2,
      }}
    >
      {/* user preview */}
      <Box>
        <Box
          bgcolor={colors.dark}
          sx={{
            width: { md: 550, xs: "100%" },
            height: 450,
            border: `1px solid ${colors.grey500}`,
            borderRadius: 2,
          }}
          pt={2}
        >
          <img
            src={selectedImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* next previous options */}
        <Box
          display={{ md: "flex", xs: "none" }}
          alignItems="flex-end"
          justifyContent="flex-end"
          padding={2}
          gap={2}
        >
          <Box
            className="nextPreViousOptions"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: 50,
              cursor: "pointer",
              border: `2px solid ${colors.primary}`,
              transition: "background-color 0.3s",
              "&:hover": {
                bgcolor: "grey.400",
              },
            }}
            onClick={handlePrevious}
          >
            <Typography variant="h6" component="div" sx={{ fontSize: 32 }}>
              &lt;
            </Typography>
          </Box>
          <Box
            className="nextPreViousOptions"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: 50,
              cursor: "pointer",
              border: `2px solid ${colors.primary}`,
              transition: "background-color 0.3s",
              "&:hover": {
                bgcolor: "grey.400",
              },
            }}
            onClick={handleNext}
          >
            <Typography variant="h6" component="div" sx={{ fontSize: 32 }}>
              &gt;
            </Typography>
          </Box>
        </Box>
        {/* next previous options */}
      </Box>
      {/* user preview */}
      {/* user options */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "column", xs: "row" },
          alignItems: "center",
          gap: { md: 5.5, xs: 1 },
        }}
        mb={{ xs: 2, md: 0 }}
      >
        {smallView.map((imagesShow, index) => (
          <Box
            key={imagesShow.id}
            sx={{
              width: 80,
              height: 80,
              border: `1px solid ${colors.grey500}`,
              borderRadius: 2,
              cursor: "pointer",
            }}
            pt={{ md: 2, xs: 0.5 }}
            onClick={() => handleImageClick(imagesShow.img, index)}
          >
            <img
              src={imagesShow.img}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        ))}
      </Box>
      {/* user options */}
    </Box>
  );
};

export default UserImages;
