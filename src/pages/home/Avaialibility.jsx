import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import BoldTypography from "../../components/BoldTypography";
import Images from "../../assets/images";
import HoverButton from "../../components/HoverButton";
import colors from "../../assets/color/color";
import "./style.css";

const Avaialibility = ({ image, heading, para }) => {
  return (
    <Stack className="saime d-flex align-items-center">
      <Box
        sx={{
          backgroundColor: "#151515",
          maxWidth: 345,
          height: 360,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: 2,
          mt: 6,
          pb: 4,
          position: "relative",
        }}
      >
        <Card 
          sx={{
            p: 2,
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            boxShadow:"none"
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              border: "2px solid #C4A750",
              p: 2,
              borderRadius: 50,
            }}
          >
            <img
              src={image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <p className="availaibility-heading">{heading}</p>
          <p
            className="availaibility-para"
            style={{
              // fontFamily: "Poppins",
              textAlign: "center",
              color: colors.text,
              textTransform:"capitalize"
              
              // letterSpacing: 2,
              // px: 2,
            }}
          >
            {para}
          </p>
        </Card>
        <Box mt={3} sx={{ position: "absolute", bottom: 20,  }}>
          <HoverButton
            title="Learn More"
            fontSize={18}
            
          />
         
        </Box>
      </Box>
    </Stack>
  );
};

export default Avaialibility;
