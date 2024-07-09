import { Box } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import Images from "../../../../assets/images";

const CustomMarquee = () => {
  return (
    <Marquee direction="left" speed={100} delay={5}>
      <Box sx={{ width: "calc(100% - 20px)", height: "15vh", mx: "10px" }}>
        <img
          src={Images.tagLine}
          alt="Tag Line"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ width: "calc(100% - 20px)", height: "15vh", mx: "10px" }}>
        <img
          src={Images.tagLine}
          alt="Tag Line"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
    </Marquee>
  );
};

export default CustomMarquee;
