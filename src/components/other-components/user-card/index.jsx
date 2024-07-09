import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Images from "../../../assets/images";
import colors from "../../../assets/color/color";
import "./styles.css"; // Import CSS file
import icons from "../../../assets/Icons/icons";
import { CommonText } from "../../common-text";

const UserCard = ({
  job,
  name,
  images,
  bulletColor,
  bulletBorder,
  popularity,
}) => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <CardActionArea>
        <Box
          className="user-card-container"
          sx={{ border: "1px solid #585858", borderRadius: 4 }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 20,
              left: 10,
              border: "1px solid #585858",
              height: 28,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 1.5,
              textAlign: "center",
              backgroundColor: "rgba(88, 88, 88, 0.21)",
              p: 2,
              // boxShadow: "0px 4px 6px rgba(0, 0, 0, 1)",
            }}
          >
            <CommonText
              title={popularity}
              textStyle={{
                color: "#FFFFFF",
                letterSpacing: "2px",
              }}
            />
          </Box>

          <CardMedia
            component="img"
            height="450"
            width="900"
            image={images}
            alt="green iguana"
            sx={{ objectFit: "contain", pt: 4 }}
          />
          <Box
            className="arrows"
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box className="left-arrow" sx={{ width: 30, height: 30 }}>
              {icons.arrowBack}
            </Box>
            <Box className="right-arrow" sx={{ width: 30, height: 30 }}>
              {icons.arrowForward}
            </Box>
          </Box>
          <Box className="quick-add" sx={{ p: -12 }}>
            {/* <Typography>QUICK ADD</Typography> */}
            <CommonText
              title="QUICK ADD"
              textStyle={{
                color: "#FFFFFF",
                paddingTop: "2px",
                letterSpacing: "2px",
              }}
            />
            <Typography sx={{ fontSize: 22 }}>+</Typography>
          </Box>
        </Box>
        <CardContent sx={{ p: 0 }}>
          <Stack>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
                pt: 2,
              }}
            >
              <p className="user-name-home-card">{name}</p>
              {/* <CommonText
                title={name}
                textStyle={{
                  color: "#FFFFFF",
                  fontSize: "20px",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "16ch",
                  overFlow: "hidden",
                   margin-left: 10px
                }}
              /> */}
              <Box
                className="availaibility"
                sx={{
                  px: 1,
                  py: 0.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    border: `1px solid ${bulletBorder}`,
                    p: 0.3,
                    borderRadius: 50,
                    // width: 20,
                    // height: 20,
                    display: "flex",
                    // alignItems: "center",
                    // justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      backgroundColor: bulletColor,
                      borderRadius: 50,
                    }}
                  />
                </Box>
                <p className="available">Available</p>
              </Box>
            </Box>
            <Box sx={{ mt: -1 }}>
              <p
                classNmae="available"
                style={{
                  color: "#C5C5C5",
                  marginLeft: "10px",
                  fontSize: "16px",
                }}
                // sx={{
                //   color: "#fff",
                //   fontWeight: 100,
                //   fontSize: 16,
                //   fontFamily: "Poppins",
                //   ml: 1,
                // }}
              >
                {job}
                <Box sx={{ width: 100, height: 30, marginTop: "-5px" }}>
                  <img
                    src={Images.stars}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </p>
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;
