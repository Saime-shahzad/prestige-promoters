import React from "react";
import "./styles.css";
import { Avatar, Box, Typography } from "@mui/material";
import Images from "../../../../assets/images";
import colors from "../../../../assets/color/color";

const UserCard = ({
  name,
  accupation,
  rate,
  src,
  onClick,
  isLiked,
  handleLiked,
}) => {
  return (
    <Box className="primaryContain" py={2}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
        pt={0}
      >
        <Box
          sx={{
            border: `2px solid ${colors.primary}`,
            p: 0.3,
            borderRadius: 50,
          }}
        >
          <Box
            sx={{
              borderRadius: 50,
              width: 91,
              height: 91,
              border: `2px solid ${colors.primary}`,
              borderRadius: 50,
            }}
          >
            <img
              src={src}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                // border: `1.5px solid ${colors.primary}`,
              }}
            />
          </Box>
        </Box>
        <Box className="profile-container" onClick={onClick}>
          <p className="profile-text">View Profile</p>
        </Box>
      </Box>
      {/* user detail */}
      <Box className="userDetail">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          mt={1}
        >
          <Box>
            <p className="user-name">{name}</p>
          </Box>
          <Box sx={{ width: 28, height: 28 }} onClick={handleLiked}>
            {isLiked ? (
              <img
                src={Images.heart}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                alt="Heart Filled"
              />
            ) : (
              <img
                src={Images.heartOutline}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                alt="Heart Outline"
              />
            )}
          </Box>
        </Box>
        <Box mt={-1}>
          <Box>
            <p className="user-occupation" style={{ margin: 0 }}>
              {accupation}
            </p>
          </Box>
          <Box
            sx={{
              width: "auto",
              height: 15,
            }}
          >
            <img
              src={Images.stars}
              style={{ height: "100%", objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Box>
      {/* user detail */}
      {/* social network */}
      <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
        <Box sx={{ display: "flex", alignItems: "", gap: 1 }}>
          <Box sx={{ width: 20, height: 20, margin: 0 }}>
            <img
              src={Images.facebook}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Box sx={{ margin: 0 }}>
            <p style={{ color: "#C5C5C5", fontSize: 19 }}>4M</p>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "", gap: 1 }}>
          <Box sx={{ width: 19, height: 19, margin: 0 }}>
            <img
              src={Images.insta}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Box sx={{ margin: 0 }}>
            <p style={{ color: "#C5C5C5", fontSize: 19 }}>1M</p>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "", gap: 1 }}>
          <Box sx={{ width: 19, height: 19, margin: 0 }}>
            <img
              src={Images.twitter}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Box sx={{ margin: 0 }}>
            <p style={{ color: "#C5C5C5", fontSize: 19 }}>3M</p>
          </Box>
        </Box>
      </Box>
      {/* social network */}
      <Box ml={0}>
        <p style={{ color: "#fff", fontSize: "18px" }}>
          ${rate}/
          <span style={{ color: "#C5C5C5", fontSize: "20px" }}>videos</span>
        </p>
      </Box>
    </Box>
  );
};

export default UserCard;
