import { Avatar, Box, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import icons from "../assets/Icons/icons";
import colors from "../assets/color/color";
import { CommonText } from "./common-text";
import { useNavigate } from "react-router-dom";

const MDMenu = ({ isAvatar = false, src, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const navigation = useNavigate();


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
   
    >
      
      
      {isAvatar ? (
        <Avatar
          sx={{
            cursor: "pointer",
            width: { xs: 26, sm: 45 },
            height: { xs: 26, sm: 45 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: colors.gradientText,
            overflow:"visible",
            
            
           
           
            // backgroundColor: "transparent",
            transition: "background-image 3s ease-in-out", // Smooth transition effect
            // "&:hover": {
            //   backgroundImage: colors.gradientText,
            // },
          }}
          onClick={handleClick}
        >
          
          <span className="profileAvatorStayling" 
          style={{backgroundColor:"red", padding:5, borderRadius:50, position:"absolute",
            // top:{md: 10, xs: 1, sm: 2 },
            top:"-1px", right:"7px" , zIndex:99999, opacity:1
          }}></span>
          {icons.person} 
          
        </Avatar>
      ) : (
        <Box
          sx={{
            width: { sm: "1.5rem", xs: "1.1rem" },
            height: { sm: "1.5rem", xs: "1.1rem" },
            mt: { sm: -0.5, xs: -1.3 },
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <img
            src={src}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
      )}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            backgroundColor: colors.dark,
            padding: 1,
          },
        }}
      >
        {menuItems?.map((data, index) => {
          return (
            <MenuItem
              key={index}
              onClick={() => {
                navigation(data?.onClick)
                
                handleClose();
              }}
              sx={{ width: "10rem", color: "#fff" }}
            >
              <CommonText
                title={data.title}
                textStyle={{
                  fontSize: "20px",
                  letterSpacing: "1px",
                  color: "#fff",
                  "&:hover": {
                    color: "red",
                  },
                }}
              />
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default MDMenu;
