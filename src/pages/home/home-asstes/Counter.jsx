import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import colors from "../../../assets/color/color";
import BoldTypography from "../../../components/BoldTypography";
import Images from "../../../assets/images";
import "./style.css"

export const Counter = () => {
  return (
    <div className="primaryContainer">
      <div className="secondaryContainer">
        <div className="imageContainer">
          <img src={Images.talent} className="image" />
        </div>
        <div>
          <p className="mainHeading">50+</p>
          <p className="subHeading">Talent</p>
        </div>
      </div>
      <div className="secondaryContainer">
        <div className="imageContainer">
          <img src={Images.client} className="image" />
        </div>
        <div>
          <p className="mainHeading">100+</p>
          <p className="subHeading">Happy Clients</p>
        </div>
      </div>
      <div className="secondaryContainer3">
        <div className="imageContainer">
          <img src={Images.booking} className="image" />
        </div>
        <div>
          <p className="mainHeading">150+</p>
          <p className="subHeading">Bookings</p>
        </div>
      </div>
    </div>
  );
};
