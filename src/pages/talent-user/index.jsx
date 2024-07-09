import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Images from "../../assets/images";
import colors from "../../assets/color/color";
import UserIntro from "./assets/user-intro";
import UserImages from "./assets/user-images";
import UserAvailaibility from "./assets/user-availaibility";
import CustomButton from "../talent-page/assets/custom-Button";
import {
  days,
  talentPeopleCard,
  userCancelation,
} from "../../constants/othres";
import SmallBox from "../../components/SmallBox";
import { CommonText, TextNoGradient } from "../../components/common-text";
import { useLocation } from "react-router-dom";
import UserCard from "../talent-page/assets/custom-card";

const TalentedUser = () => {
  const location = useLocation();

  const [selectedImage, setSelectedImage] = useState(Images.brandonUser);
  const [currentIndex, setCurrentIndex] = useState(0);
  const UserImage = location.state.src;
  const UserName = location.state.name;
  const UserOcuupation = location.state.accupation;

  const smallView = [
    {
      id: 1,
      img: Images.brandonUser,
    },
    {
      id: 2,
      img: Images.businessman,
    },
    {
      id: 3,
      img: Images.hannah,
    },
    {
      id: 4,
      img: Images.actor,
    },
  ];

  const handleImageClick = (img, index) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % smallView.length;
    setSelectedImage(smallView[nextIndex].img);
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + smallView.length) % smallView.length;
    setSelectedImage(smallView[prevIndex].img);
    setCurrentIndex(prevIndex);
  };

  return (
    <Layout>
      <Box
        bgcolor="#000"
        sx={{
          backgroundImage: `url(${Images.talentBg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Box px={{ sm: 4, xs: 1 }}>
          <Box my={6} display={{ md: "flex", xs: "none" }}>
            <UserIntro
              img={UserImage}
              name={UserName}
              occupation={UserOcuupation}
            />
          </Box>
          {/* User Images */}
          <Box mt={10}>
            <Grid container spacing={0}>
              <Grid item xs={12} md={7}>
                <UserImages
                  handleImageClick={handleImageClick}
                  handleNext={handleNext}
                  handlePrevious={handlePrevious}
                  selectedImage={selectedImage}
                  smallView={smallView}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <Stack sx={{ border: "2px solid #585858", borderRadius: 3 }}>
                  <Box
                    p={1}
                    sx={{ borderBottom: `1px solid ${colors.grey500}` }}
                  >
                    <UserAvailaibility />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "cneter",
                      justifyContent: {
                        md: "space-around",
                        xs: "space-between",
                      },
                    }}
                    // gap={{ md: 3 }}
                    p={1}
                    my={2}
                  >
                    <CustomButton
                      title="Dallas"
                      isIcon={true}
                      LogoImg={Images.dallas}
                      isLogo={true}
                      sx={{ fontSize: 20, letterSpacing: 2, gap: 1 }}
                    />
                    <CustomButton
                      title="Jan 6 - Jan 13"
                      isIcon={true}
                      sx={{ fontSize: 20, letterSpacing: 2, gap: 1 }}
                      LogoImg={Images.calender}
                      isLogo={true}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                    gap={{ sm: 2, xs: 1 }}
                  >
                    {days.map((days) => {
                      return <SmallBox title={days} />;
                    })}
                  </Box>
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      borderBottom: `1px solid ${colors.grey500}`,
                    }}
                    py={3}
                    gap={2}
                  >
                    <Box
                      gap={2}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <Typography sx={{ color: "#fff", width: 100 }}>
                        Monday
                      </Typography>
                      <SmallBox title="8:30AM" />
                      <Typography sx={{ color: "#fff" }}>to</Typography>
                      <SmallBox title="5:30PM" />
                    </Box>
                    <Box
                      gap={2}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <Typography sx={{ color: "#fff", width: 100 }}>
                        Wednesday
                      </Typography>
                      <SmallBox title="8:30AM" />
                      <Typography sx={{ color: "#fff" }}>to</Typography>
                      <SmallBox title="5:30PM" />
                    </Box>
                    <Box
                      gap={2}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <Typography sx={{ color: "#fff", width: 100 }}>
                        Thursday
                      </Typography>
                      <SmallBox title="8:30AM" />
                      <Typography sx={{ color: "#fff" }}>to</Typography>
                      <SmallBox title="5:30PM" />
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        width: "100%",
                      }}
                      my={2}
                      px={{ md: 5 }}
                    >
                      <CustomButton
                        title="Book"
                        sx={{ flex: 1, letterSpacing: 10 }}
                        titleStyle={{
                          letterSpacing: "5px",
                          fontWeight: 500,
                          fontSize: "20px",
                        }}
                      />
                    </Box>

                    <Box sx={{ width: "100%" }} px={{ md: 5 }}>
                      {userCancelation.map((data, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                          mb={1}
                        >
                          <Box>
                            <CommonText
                              title={data?.title}
                              textStyle={{
                                color: "#929292",
                                letterSpacing: "2px",
                                fontSize: "18px",
                                marginTop: "3px",
                              }}
                              img={data?.img}
                              isShow={true}
                            />
                          </Box>
                          <CommonText
                            title={data?.titleTwo}
                            textStyle={{
                              letterSpacing: "2px",
                              fontSize: "18px",
                            }}
                            isShow={false}
                          />
                        </Box>
                      ))}
                    </Box>
                  </Stack>
                  <Box sx={{ width: "100%" }} px={{ md: 5 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      py={2}
                    >
                      <CommonText
                        title="Total"
                        textStyle={{
                          color: "#fff",
                          fontSize: 18,
                          letterSpacing: "2px",
                        }}
                      />
                      <CommonText
                        title="$ 2,860"
                        textStyle={{ fontSize: 18 }}
                      />
                    </Box>
                  </Box>
                </Stack>

                <Box
                  sx={{ border: "2px solid #585858", borderRadius: 3 }}
                  my={2}
                  p={{ sm: 4, xs: 1 }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box sx={{ width: 29, height: 29 }}>
                      <img
                        src={Images.dollarSign}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    <Box>
                      <TextNoGradient
                        title="Money back guarantee"
                        textStyle={{
                          color: "#FFFFFF",
                          fontSize: 18,
                          letterSpacing: "2px",
                        }}
                      />
                      <Typography sx={{ color: "#AAA7A7", fontSize: 16 }}>
                        you won’t be charged if your request is not fulfilled.
                        <span style={{ borderBottom: "1px solid #AAA7A7" }}>
                          learn more
                        </span>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box my={6}>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <CommonText
              title="BROWSE OUR TALENT"
              textStyle={{ fontSize: 42 }}
            />
            <Typography sx={{ color: "#FFFFFF", fontSize: 18 }}>
              Discover Professionals Who Bring Your Events To Life.
            </Typography>
          </Box>
          <Box
            mt={4}
            // ml={4}
            px={4}
            sx={{
              overflowX: "hidden",
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {talentPeopleCard.map((data, index) => {
              return (
                <Box
                  sx={{ flexBasis: "24%", marginBottom: "16px" }}
                  key={index}
                >
                  <UserCard
                    src={data.src}
                    name={data.name}
                    accupation={data.accupation}
                    rate={data.rate}
                    onClick={() => handleUserNav(data)}
                    isLiked={data.id === location?.state?.isLiked}
                  />
                </Box>
              );
            })}
          </Box>

          <Box
            sx={{
              mt: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            my={10}
          >
            <CustomButton title="Browse Talent" px={5} pt={1} />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default TalentedUser;
