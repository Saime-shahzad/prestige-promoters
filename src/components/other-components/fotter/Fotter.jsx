import {
  Box,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import Images from "../../../assets/images";
import colors from "../../../assets/color/color";

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

const Footer = () => {
  return (
    <Grid container spacing={2} px={10}  sx={{ overflowX: "hidden", mb: 2 }}>
      <Grid
        item
        xs={12}
        md={4}
        sm={6}
        sx={{
          // borderRight: { md: "2px solid #fff" },
          borderBottom: { md: "none", xs: "2px solid #fff" },
        }}
      >
        <Stack>
          <Box
            className="imgContainer"
            sx={{ width: { sm: 180, xs: 100 }, height: 70 }}
          >
            <img
              src={Images.logo}
              alt="logo"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Typography sx={{ pr: 2, color: "#fff", fontFamily: "Poppins" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            eveniet qui omnis reiciendis itaque eum totam, nemo veniam autem vel
            aliquid quidem beatae unde quae ut explicabo repellendus expedita
            magni!
          </Typography>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        md={2}
        sm={6}
        sx={{
          // borderRight: { md: "2px solid #fff" },
          borderBottom: { md: "none", xs: "2px solid #fff" },
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: "#fff", fontFamily: "Poppins", pl: 1 }}
        >
          Quick Links
        </Typography>
        <List sx={{ color: "#fff", paddingTop: 0 }}>
          <StyledListItem>Home</StyledListItem>
          <StyledListItem>About</StyledListItem>
          <StyledListItem>Talents</StyledListItem>
          <StyledListItem>How it works</StyledListItem>
        </List>
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        sm={6}
        sx={{
          // borderRight: { md: "2px solid #fff" },
          borderBottom: { md: "none", xs: "2px solid #fff" },
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: "#fff", fontFamily: "Poppins", pl: 1 }}
        >
          Help
        </Typography>
        <List sx={{ color: "#fff", paddingTop: 0 }}>
          <StyledListItem>Help Center</StyledListItem>
          <StyledListItem>Term & Conditions</StyledListItem>
          <StyledListItem>Privacy Policy</StyledListItem>
          <StyledListItem>Cookies Policy</StyledListItem>
        </List>
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        sm={6}
        sx={{
          borderBottom: { md: "none", xs: "2px solid #fff" },
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: "#fff", fontFamily: "Poppins", pl: 1 }}
        >
          Contact Us
        </Typography>
        <List sx={{ color: "#fff", paddingTop: 0 }}>
          <StyledListItem>+345 454 4626</StyledListItem>
          <StyledListItem>info@prestige.com</StyledListItem>
          <StyledListItem>street 102, green line</StyledListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Footer;
