import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import colors from "../../../../assets/color/color";
import Images from "../../../../assets/images";
import MDMenu from "../../../../components/Menu";
// import { hederItems, hederItemsCenter } from "../../../../constants/othres";
import { hederItemsCenter } from "../../../../constants/othres";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import icons from "../../../../assets/Icons/icons";
import BasicPopover from "../../../../components/popOver/BasicPopover";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button';

const Header = () => {
  const navigation = useNavigate();
  const currentPath = useLocation();
  

  // for the telents dropdown menue
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const hederItems = [
    {
      id: 1,
      title: "Login",
      onClick: () => navigation("/login"),
    },
    {
      id: 2,
      title: "Register",
      onClick: () => navigation("/pre-registration"),
    },
    {
      id: 3,
      title: "Logout",
      onClick: () => alert("hello"),
    },
  ];

  const locationObj = {
    pathname: currentPath.pathname,
    currentPath: (currentPath.state = {
      id: "1",
    }),
  };
  return (
    <Stack
      sx={{
        backgroundColor: colors.dark,
        py: { md: 2, xs: 1 },
        px: { md: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Start */}
        <Box
          sx={{ width: { sm: 220, xs: 120 }, height: { sm: 60, xs: "100%" } }}
        >
          <img
            src={Images.logo}
            style={{ width: "100%", height: "100%", objectFit: "" }}
          />
        </Box>
        {/* Start */}
        {/* center */}
        <Box
          sx={{
            display: { md: "flex", sm: "none", xs: "none" },
            alignItems: "center",
            gap: 6,
            color: "#fff",
            ml: -25,
          }}
        >
          {hederItemsCenter.map((values, index) => {
            return (
              <Box key={index} onClick={() => navigation(values.onClick)}>
                <p className="pagesText">
                  {values.title === "Talent" ? (
                    <div className="d-flex parrantForArrows ">
                      <div>{values.title}</div>
                      <div
                        className=""
                        
                      >
                        <div id="basic-button"
                        onClick={handleClick}

                          className="btn"
                          style={{ position: "absolute", top: 20 }}
                        >
                          {" "}
                          {icons.arrowDown}
                        </div>
                        <Menu
                        sx={
                          { mt: "45px", "& .MuiMenu-paper": 
                            { backgroundColor: "#1D1C1C", 
                              color:"white",
                              borderRadius:2
                            }, 
                            "&.Mui-selected": { color: "green", }
                          }
                        }
                        
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                          
                        >
                          <MenuItem onClick={handleClose}></MenuItem>

                          <MenuItem onClick={handleClose} selected
                          
                          sx={{
                            // Change this to your desired color
                            '&.Mui-selected': {
                              backgroundColor: "black",
                             
                               // Change this to your desired color
                             },
                          }}
                          
                          >Profile</MenuItem>
                          <MenuItem onClick={handleClose}>My account</MenuItem>
                          <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                       
                      </div>
                    </div>
                  ) : (
                    values.title
                  )}
                </p>
              </Box>
            );
          })}
        </Box>
        {/* center */}
        {/* end */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1.5, md: 0, sm: 2 },
            border: "1px solid white",
            // border: { md: "0px solid #fff", xs: "1px solid #fff" },
            p: { md: 0.5, xs: 0.5, sm: 1 },
            px: { md: 0.5, xs: 1, sm: 1 },
            borderRadius: 10,
          }}
        >
          <Box
            sx={{
              display: { md: "flex", sm: "flex" },
              px: { md: 2, xs: 1, sm: 1 },
            }}
          >
            <MDMenu src={Images.menu} menuItems={hederItemsCenter} />
          </Box>

          <MDMenu isAvatar={true} menuItems={hederItems} src={Images.actor} />
        </Box>
        {/* end */}
      </Box>
    </Stack>
  );
};

export default Header;
