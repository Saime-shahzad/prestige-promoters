import React from "react";
import MianHeader from "../components/other-components/header/MianHeader";
import { Box, Stack } from "@mui/material";
import colors from "../assets/color/color";
import Fotter from "../components/other-components/fotter/Fotter";

const MainLayout = ({ children }) => {
  return (
    <Box
      className=""
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.dark,
        px: { md: 1, xs: 2, sm: 5 },
      }}
    >
      <MianHeader />
      <Stack flex={1} sx={{ display: "flex" }}>
        {children}
      </Stack>
      <Fotter />
    </Box>
  );
};

export default MainLayout;
