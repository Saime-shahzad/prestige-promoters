import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import "./styles.css";
import Images from "../../../../assets/images";
import colors from "../../../../assets/color/color";
const UserIntro = ({ img, occupation, name }) => {
  return (
    <Box
      py={1}
      px={4}
      sx={{
        borderBottom: `2px solid ${colors.primary}`,
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 1)",
        backgroundColor: colors.dark,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flex: 3 }}>
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
              width: 170,
              height: 170,
              border: `2px solid ${colors.primary}`,
            }}
          >
            <img
              src={img}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                // border: `1.5px solid ${colors.primary}`,
              }}
            />
          </Box>
        </Box>
        <Box ml={2} sx={{ width: "70%" }}>
          <Box sx={{ margin: 0 }}>
            <p className="idUserName">{name}</p>
            <p
              style={{
                fontSize: 18,
                color: colors.grey500,
                margin: 0,
                marginTop: -5,
              }}
            >
              {occupation}
            </p>
          </Box>
          <Box sx={{ fontSize: 18, color: colors.grey500, margin: 0 }}>
            <Typography
              sx={{
                fontSize: 18,
                color: colors.grey500,
                margin: 0,
                fontFamily: "Poppins",
                lineHeight: 1.3,
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              nam excepturi libero et tempore eius, assumenda ipsa deleniti
              repellat consectetur ullam in aliquid illo distinctio ipsum ipsam
              odio dolorum facilis.
              <span style={{ color: colors.primary }}>Read more</span>
            </Typography>
          </Box>
          <Box mt={1} sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box>
              <Typography sx={{ color: "#fff", fontSize: 16, margin: 0 }}>
                Gender
              </Typography>
              <Typography
                sx={{ color: colors.grey500, fontSize: 14, margin: 0 }}
              >
                Male
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "#fff", fontSize: 16, margin: 0 }}>
                Language
              </Typography>
              <Typography
                sx={{ color: colors.grey500, fontSize: 14, margin: 0 }}
              >
                English
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "#fff", fontSize: 16, margin: 0 }}>
                Location
              </Typography>
              <Typography
                sx={{ color: colors.grey500, fontSize: 14, margin: 0 }}
              >
                United State
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
        }}
      >
        <Box
          sx={{
            border: "2px solid white",
            borderRadius: 50,
            display: "flex",
            alignItems: "center",
            flex: 1,
            gap: 2,
            p: 1,
          }}
        >
          <Box
            sx={{
              border: `2px solid ${colors.primary}`,
              p: 0.3,
              borderRadius: 50,
              // width: 110,
              // height: 110,
            }}
          >
            <Box
              sx={{
                borderRadius: 50,
                width: 55,
                height: 55,
                border: `2px solid ${colors.primary}`,
              }}
            >
              <img
                src={img}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  // border: `1.5px solid ${colors.primary}`,
                }}
              />
            </Box>
          </Box>
          <Box>
            <p className="introText">Our intro video</p>
            <Typography
              sx={{
                fontSize: 16,
                color: colors.grey500,
                margin: 0,
              }}
            >
              1min 20sec
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
          mt={2}
        >
          <Box
            sx={{
              border: `2px solid ${colors.primary}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 1,
            }}
            px={3}
            py={0.5}
          >
            <p className="userFllow">Follow</p>
          </Box>

          <Box>
            <p style={{ color: colors.grey500, margin: 0 }}>25,411 Followers</p>
            <p style={{ color: colors.grey500, margin: 0 }}>22,.98 Likes</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserIntro;
