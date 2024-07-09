import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "../pages/home/home-asstes/header/Header";
import colors from "../assets/color/color";
import FotterAgain from "../pages/home/home-asstes/fotter/Fotter";

const Layout = ({ children }) => {
  return (
    <Box
      className=""
      sx={{
        backgroundColor: "#1D1C1C",
        // px: { md: 1, xs: 2, sm: 5 },
      }}
    >
      <Header />
      <Stack flex={1} sx={{ display: "" }}>
        {children}
      </Stack>
      <FotterAgain />
    </Box>
  );
};

export default Layout;
