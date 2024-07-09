import React from "react";
import "./styles.css";
import { Box } from "@mui/material";
import Images from "../../../../assets/images";
import CustomModal from "../custom-Modal/CustomModal";

const CustomButton = ({
  title,
  isIcon = false,
  px,
  pt,
  width,
  sx,
  isLogo = false,
  LogoImg,
  titleStyle,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  let sortBy = [];
  let category = [];
  let price = [];
  const modalData = [
    (sortBy = [
      {
        id: "1",
        arrayName: "Sort By",
        text: "High To Low",
      },
      {
        id: "2",
        text: "High To Low",
      },
      {
        id: "3",
        text: "High To Low",
      },
      {
        id: "4",
        text: "High To Low",
      },
    ]),
    (category = [
      {
        id: "1",
        arrayName: "Category",

        text: "All Category",
      },
      {
        id: "2",
        text: "Comedian",
      },
      {
        id: "3",
        text: "Actor",
      },
      {
        id: "4",
        text: "Musician",
      },
    ]),
    (price = [
      {
        id: "1",
        arrayName: "Price",

        text: "30$ - 60$",
      },
      {
        id: "2",
        text: "60$ - 100$",
      },
      {
        id: "3",
        text: "100$ - 200$",
      },
      
    ]),
  ];

  return (
    <Box
      className="modalButton"
      px={px}
      pt={pt}
      sx={{ width: width || "auto", ...sx }}
    >
      {isLogo && (
        <Box sx={{ display: { sm: "flex", xs: "none" } }} className="isLogo">
          <img src={LogoImg} alt="Calendar Icon" className="logoImage" />
        </Box>
      )}
      <Box className="titleContainer ">
        <p style={{ ...titleStyle }} onClick={handleClick}>
          {title}
        </p>
        {open && (
          <CustomModal
            open={open}
            setOpen={setOpen}
            data={title === "Sort By" ? modalData[0] :title === "Price" ? modalData[2] : modalData[1]}
          />
        )}
      </Box>
      {isIcon && (
        <div className="vectorImgContainer">
          <img onClick={handleClick} src={Images.Vector} className="vectorImage" alt="Sort Icon" />
        </div>
      )}
    </Box>
  );
};

export default CustomButton;
