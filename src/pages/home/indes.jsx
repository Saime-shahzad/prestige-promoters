import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import colors from "../../assets/color/color";
import BoldTypography from "../../components/BoldTypography";
import Images from "../../assets/images";
import HoverButton from "../../components/HoverButton";

import "./style.css";
import UserCard from "../../components/other-components/user-card";
import MDButton from "../../components/MDButton";
import Avaialibility from "./Avaialibility";
import { browseTalent, howItsWork, talentCard } from "../../constants/othres";
import BrowseTalent from "./BrowseTalent";

const Home = () => {
  return (
    <MainLayout>
      <Box sx={{ mb: 10 }}>
        <Grid sx={{ backgroundImage: `url(${Images.Ellipse})`, pt: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#FFFFFF",
                fontFamily: "APOLLO",
                textAlign: "center",
              }}
            >
              START YOUR JOURNEY <br /> WITH EXCELLENCE.
            </Typography>
            <HoverButton title="Get Started" height={50} />
          </Box>
          <Grid container justifyContent="center" sx={{ mt: 0 }}>
            <Grid
              item
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ width: "250px", height: "300px" }}>
                <img
                  src={Images.singer}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              md={4}
              alignItems="flex-end"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ width: "350px", height: "250px", mt: 10 }}>
                <img
                  src={Images.motivational}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ width: "250px", height: "300px" }}>
                <img
                  src={Images.sexaphone}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Stack sx={{ my: 4 }}>
          <marquee
            style={{
              backgroundColor: "#000",
              padding: "30px",
              marginTop: "20px",
            }}
          >
            <Box sx={{ width: "100%", height: "15vh" }}>
              <img
                src={Images.marquee}
                style={{ width: "100%", height: "100%", resize: "contain" }}
              />
            </Box>
          </marquee>
          <Grid
            container
            sx={{
              mt: 8,
              backgroundImage: `url(${Images.diamondRight})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // backgroundAttachment: "fixed",
              backgroundSize: "100% 100%",
              p: 10,
            }}
          >
            <Grid
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <BoldTypography
                title="ABOUT US"
                backgroundImage={colors.gradientText}
                style={{ fontSize: 40 }}
              />
              <BoldTypography
                title="Whatever you’re planning,make it extraordinary."
                backgroundImage={colors.gradientTextWhite}
                style={{ fontSize: 32 }}
              />
              <Typography sx={{ color: "white", fontFamily: "Poppins" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum is simply dummy text of the printing and
                typesetting industry Lorem Ipsum is simply dummy text of the
                printing and typesetting industry
              </Typography>
              <HoverButton width={200} title="Learn More" />
            </Grid>
            <Grid
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <Box
                sx={{
                  width: 400,
                  height: 350,
                }}
              >
                <img
                  src={Images.about}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Stack>
        {/* number of clients etc */}
        <Grid
          container
          sx={{
            // backgroundColor: colors.dark,
            borderImage: colors.gradientText,
            borderImageSlice: 1,
            borderTop: "2px solid #C4A750",
            borderBottom: "2px solid #C4A750",
            p: 4,
          }}
        >
          <Grid
            className="counter"
            md={4}
            sx={{ borderRight: "2px solid #C4A750" }}
          >
            <Box className="counterContainer" sx={{}}>
              <Box className="counterImgContainer" sx={{}}>
                <img
                  src={Images.talent}
                  style={{ width: "100%", height: "100%", resize: "contain" }}
                />
              </Box>
              <Box sx={{ mt: -2 }}>
                <BoldTypography
                  title="50+"
                  backgroundImage={colors.gradientText}
                  style={{ fontSize: "3vw", fontWeight: 600 }}
                />
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 500,
                    mt: -2,
                    fontSize: 26,
                  }}
                >
                  Talent
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            className="counter"
            md={4}
            sx={{ borderRight: "2px solid #C4A750" }}
          >
            <Box className="counterContainer" sx={{}}>
              <Box className="counterImgContainer" sx={{}}>
                <img
                  src={Images.client}
                  style={{ width: "100%", height: "100%", resize: "contain" }}
                />
              </Box>
              <Box sx={{ mt: -2 }}>
                <BoldTypography
                  title="100+"
                  backgroundImage={colors.gradientText}
                  style={{ fontSize: "3vw", fontWeight: 600 }}
                />
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 500,
                    mt: -2,
                    fontSize: 26,
                  }}
                >
                  Happy Client
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid className="counter" md={4}>
            <Box className="counterContainer" sx={{}}>
              <Box className="counterImgContainer" sx={{}}>
                <img
                  src={Images.booking}
                  style={{ width: "100%", height: "100%", resize: "contain" }}
                />
              </Box>
              <Box sx={{ mt: -2 }}>
                <BoldTypography
                  title="150+"
                  backgroundImage={colors.gradientText}
                  style={{ fontSize: "3vw", fontWeight: 600 }}
                />
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 500,
                    mt: -2,
                    fontSize: 26,
                  }}
                >
                  Bookings
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* meet our clients */}
        <Stack
          sx={{
            backgroundImage: `url(${Images.diamondRight})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // mx: 10,
            overflowX: "hidden",
          }}
        >
          <Box
            sx={{
              my: { md: 10, sm: 6, xs: 2 },
              px: { md: 10, sm: 6, xs: 2 },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <BoldTypography
                title="MEET OUR TOP TALENT"
                backgroundImage={colors.gradientText}
                style={{ fontSize: 30 }}
              />
              <Typography sx={{ color: "#fff", fontFamily: "Poppins" }}>
                discover professionals who bring your events to life.
              </Typography>
            </Box>
            <Box
              sx={{
                border: "2px solid #585858",
                width: 170,
                height: 50,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                px: 0.2,
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  backgroundImage: colors.hoverBackground,
                  px: 3,
                  py: 1,
                  borderRadius: 10,
                  fontWeight: 600,
                  fontFamily: "Poppins",
                }}
              >
                Men
              </Typography>
              {/* Add a divider or any other separator between Men and Women */}
              <Typography
                sx={{
                  color: "#fff",
                  // backgroundImage: colors.hoverBackground, // Commented out for consistency
                  px: 3,
                  py: 1,
                  borderRadius: 10,
                  fontWeight: 600,
                  fontFamily: "APOLLO",
                }}
              >
                Women
              </Typography>
            </Box>
          </Box>
          <Box
            className="row"
            sx={{
              px: { md: 10, sm: 0, xs: 0.3 },
              pb: 15,
              width: "100%",
            }}
          >
            {talentCard.map((data) => {
              return (
                <Box
                  className="col-md-3 col-sm-6 col-xs-12"
                  sx={{
                    mb: { sm: 6, md: 0, xs: 6 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <UserCard
                    images={data.image}
                    name={data.name}
                    job={data.job}
                    bulletBorder={data.color}
                    bulletColor={data.color}
                  />
                </Box>
              );
            })}
          </Box>
        </Stack>

        {/* How its work */}
        <Box className="row" sx={{ my: 10, mx: 10 }}>
          <Box sx={{ textAlign: "center" }}>
            <BoldTypography
              title="HOW ITS WORK"
              backgroundImage={colors.gradientText}
              style={{ fontSize: 40 }}
            />
            <Typography
              sx={{ color: "#fff", fontFamily: "Poppins", fontWeight: 100 }}
            >
              Discover professionals who bring your events to life.
            </Typography>
          </Box>
          {howItsWork.map((data) => {
            return (
              <Box className="col-md-3 col-sm-6 col-xs-12">
                <Avaialibility
                  image={data.image}
                  heading={data.heading}
                  para={data.para}
                />
              </Box>
            );
          })}
        </Box>
        {/*  */}
        {/* Browse Talent */}
        <Stack
          px={{ xs: 2, md: 10 }}
          pt={{ xs: 5, md: 10 }}
          py={10}
          sx={{
            position: "relative",
            backgroundColor: "#000",
            boxShadow: "inset 0 0 100px 2px rgba(255, 255, 255, 0.3)",
          }}
        >
          <Box
            sx={{
              width: { xs: 100, md: 175 },
              height: { xs: 100, md: 175 },
              position: "absolute",
              top: { xs: -10, md: -20 },
              left: { xs: -40, md: -80 },
              opacity: 0.5,
            }}
          >
            <img
              src={Images.diamond}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: 100, md: 175 },
              height: { xs: 100, md: 175 },
              position: "absolute",
              bottom: { xs: -20, md: -40 },
              left: 0,
              opacity: 0.6,
            }}
          >
            <img
              src={Images.diamond}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Box>
            <BoldTypography
              title="BROWSE OUR TALENT"
              backgroundImage={colors.gradientText}
              style={{ fontSize: { xs: 20, md: 30 } }}
            />
            <Typography sx={{ color: "#fff", fontFamily: "Poppins" }}>
              Discover professionals who bring your events to life.
            </Typography>
          </Box>
          <Box
            className="row"
            mt={7}
            sx={{ display: "flex", flexWrap: "wrap" }}
          >
            {browseTalent.map((image, index) => {
              return (
                <Box key={index} className="col-md-2 col-sm-4 col-xs-6">
                  <BrowseTalent images={image} />
                </Box>
              );
            })}
          </Box>
          {/* Become a part */}
          <Stack sx={{ textAlign: "center", width: "50%", margin: "0 auto" }}>
            <BoldTypography
              title={`Become a Part of Prestige Promoters.`}
              backgroundImage={colors.gradientText}
              style={{ fontSize: 35, mt: 10 }}
            />
            <Typography sx={{ color: "#fff", fontFamily: "Poppins", mt: 2 }}>
              Unlock a world of premium event services by signing up. Whether
              <br />
              you're booking talent or promoting events, <br /> begin your
              journey with us now!
            </Typography>
            <Box
              sx={{
                border: "1px solid #585858",
                height: 40,
                mt: 4,
                display: "flex",
                alignItems: "center",
                pl: 2,
                mx: 5,
              }}
            >
              <input
                placeholder="Type your Email"
                style={{
                  border: "none",
                  display: "flex",
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "transparent",
                  color: "#fff",
                }}
              />
              <Box
                sx={{
                  backgroundColor: colors.dark,
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "#fff", px: 5 }}>Register</Typography>
              </Box>
            </Box>
          </Stack>
          <h1>welcome</h1>
          {/* Become a part */}
        </Stack>
        {/* Browse Talent */}
      </Box>
    </MainLayout>
  );
};

export default Home;
