import { Box, List, Stack, Typography, styled, ListItem } from "@mui/material";
import React from "react";
import Images from "../../../../assets/images";
import colors from "../../../../assets/color/color";
import icons from "../../../../assets/Icons/icons";
import "./styles.css";

// width: { xs: "50%", sm: "33.33%", md: "33.33%", lg: "25%" },

const StyledListItem = styled(ListItem)(({ theme }) => ({
  py: 1,
  fontSize: 18,
  "&:hover": {
    color: "transparent",
    backgroundImage: colors.gradientText,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    cursor: "pointer",
  },
}));
const FotterAgain = () => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      //   justifyContent="center"
      alignItems="center"
      px={{ md: 4, sm: 2, xs: 1 }}
      pt={{ md: 8, xs: 7 }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "33.33%", md: "33.33%", lg: "34%" },
          mt:-6
        }}
      >
        <Stack
          ml={{ md: 0 }}
          pb={{ xs: 2 }}
          sx={{ borderBottom: { xs: "1px solid #fff", sm: "none" } }}
        >
          <Box
            className="imgContainer"
            sx={{ width: { sm: 180, xs: 180 }, height: 70 }}
          >
            <img
              src={Images.logo}
              alt="logo"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Typography
            sx={{
              pr: 2,
              color: "#fff",
              fontFamily: "Poppins",
              width: { md: "90%" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            eveniet qui omnis reiciendis itaque eum totam, nemo veniam autem vel
            aliquid quidem beatae unde quae ut explicabo repellendus expedita
            magni!
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "33.33%", md: "33.33%", lg: "18%" },
          borderBottom: { xs: "1px solid #fff", sm: "none" },
        }}
        mt={{ xs: 1, sm: 0 }}
        ml={{ xs: -2, sm: 2 }}
      >
        <p className="fotterHeading">Quick Links</p>
        <List sx={{ color: "#fff", paddingTop: 0 }}>
          <StyledListItem>Home</StyledListItem>
          <StyledListItem>About</StyledListItem>
          <StyledListItem>Talents</StyledListItem>
          <StyledListItem>How it Works</StyledListItem>
        </List>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "33.33%", md: "33.33%", lg: "18%" },
          borderBottom: { xs: "1px solid #fff", sm: "none" },
        }}
        mt={{ xs: 1, sm: 0 }}
        ml={{ xs: -2 }}
      >
        <p className="fotterHeading">Help</p>
        <List sx={{ color: "#fff", paddingTop: 0 }}>
          <StyledListItem>Help Center</StyledListItem>
          <StyledListItem>Term & Conditions</StyledListItem>
          <StyledListItem>Privacy Policy</StyledListItem>
          <StyledListItem>Cookies Policy</StyledListItem>
        </List>
      </Box>
      <Box
        sx={{ width: { xs: "100%", sm: "33.33%", md: "33.33%", lg: "30%" } }}
      >
        <Stack ml={{ md: 8 }} mt={{md:-6 , sx:0}}>
          <p className="fotterHeading">Contact Us</p>
          <List sx={{ color: "#fff", paddingTop: 0 }}>
            <StyledListItem>+345 454 4626</StyledListItem>
            <StyledListItem>info@prestige.com</StyledListItem>
            <StyledListItem>street 102, green line</StyledListItem>
          </List>
        </Stack>
      </Box>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="space-between"
        // bgcolor={"green"}
        width={"100%"}
        py={2}
        borderTop="1px solid #fff"
        mt={2}
      >
        <Box>
          <Typography color={colors.text} fontFamily={"Poppins"} fontSize={17}>
            Copyright @ 2024. Prestige Promoters. All rights Reserved
          </Typography>
        </Box>
        <Box display={{ sm: "flex", xs: "none" }} gap={4}>
          <Typography
            sx={{
              "&:hover": {
                bgcolor: colors.primary,
                p: 0.3,
                px: 0.5,
                borderRadius: 50,
                transition: "all .5s ease",
              },
            }}
          >
            {icons.google}
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                bgcolor: colors.primary,
                p: 0.3,
                px: 0.5,
                borderRadius: 50,
                transition: "all .5s ease",
              },
            }}
          >
            {icons.facebook}
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                bgcolor: colors.primary,
                p: 0.3,
                px: 0.5,
                borderRadius: 50,
                transition: "all .5s ease",
              },
            }}
          >
            {icons.instagram}
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                bgcolor: colors.primary,
                p: 0.3,
                px: 0.5,
                borderRadius: 50,
                transition: "all .5s ease",
              },
            }}
          >
            {icons.linkedIn}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default FotterAgain;
