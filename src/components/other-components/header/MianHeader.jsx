import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import Images from "../../../assets/images";
import colors from "../../../assets/color/color";
import icons from "../../../assets/Icons/icons";
import "./style.css";
import MDMenu from "../../Menu";
import { useNavigate } from "react-router-dom";

const MianHeader = () => {
  const navigation = useNavigate();

  const items = [
    {
      id: 1,
      title: "Login",
      onClick: () => navigation("/login"),
    },
    {
      id: 1,
      title: "Register",
      onClick: () => navigation("/pre-registration"),
    },
    {
      id: 1,
      title: "Logout",
    },
  ];

  return (
    <Box
      className="main"
      sx={{
        py: 2,
        px: { md: 10 },
        // position: "sticky",
        // top: 1,
        // zIndex: 1,
      }}
    >
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
      <Box
        sx={{
          display: { md: "flex", sm: "none", xs: "none" },
          alignItems: "center",
          gap: 6,
          color: "#fff",
          ml: -10,
        }}
      >
        <Typography sx={{ fontSize: 22, fontFamily: "Poppins" }}>
          Home
        </Typography>
        <Typography sx={{ fontSize: 22, fontFamily: "Poppins" }}>
          About
        </Typography>
        <Typography sx={{ fontSize: 22, fontFamily: "Poppins" }}>
          Talent
        </Typography>
        <Typography sx={{ fontSize: 22, fontFamily: "Poppins" }}>
          How its work
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          border: "2px solid #fff",
          p: 1,
          px: 2,
          borderRadius: 10,
        }}
      >
        <MDMenu src={Images.menu} menuItems={items} />
        <MDMenu isAvatar={true} menuItems={items} />
      </Box>
    </Box>
  );
};

export default MianHeader;
