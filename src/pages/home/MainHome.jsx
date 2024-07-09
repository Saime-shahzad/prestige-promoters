import React from "react";
import Header from "./home-asstes/header/Header";
import { Box, Grid, Stack, Typography } from "@mui/material";
import colors from "../../assets/color/color";
import Images from "../../assets/images";
import BoldTypography from "./../../components/BoldTypography";
import HoverButton from "./../../components/HoverButton";
import Layout from "../../layouts/Layout";
import SectionOneImages from "./home-asstes/sectionOneImages";
import { Counter } from "./home-asstes/Counter";
import UserCard from "../../components/other-components/user-card";
import { browseTalent, howItsWork, talentCard } from "../../constants/othres";
import icons from "../../assets/Icons/icons";
import Avaialibility from "./Avaialibility";
import BrowseTalent from "./BrowseTalent";
import CustomMarquee from "./home-asstes/marquee";
import "./style.css";
import { CommonText } from "../../components/common-text";
import CustomButton from "../talent-page/assets/custom-Button";

const MainHome = () => {
  return (
    <Layout>
      <Box className="mainbody">
        {/* <Header /> */}
        {/* first section */}
        <Stack
          sx={{
            backgroundImage: `url(${Images.section1})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
            // height: "200vh",
            width: "100%",
            position: "relative",
            overflowX: "hidden",
          }}
        >
          {/* Ellepse background */}
          <Box
            sx={{
              backgroundImage: `url(${Images.Ellipse})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // backgroundAttachment: "fixed",
              backgroundSize: "100% 100%",
              height: "100%",
              width: "100%",
              position: "absolute",
              top: -90,
            }}
          />
          {/* Ellepse background */}
          <Box
            sx={{
              textAlign: "center",
              pt: 5,
              position: "relative",
            }}
          >
            {/* curl arrow */}
            <Box
              sx={{
                backgroundImage: `url(${Images.Arrow})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                height: "20%",
                width: { md: 50 },
                position: "absolute",
                top: { md: 190, xs: 75 },
                right: { md: "35%", xs: "8%" },
                transform: "translateX(-50%) rotate(-2deg)",
              }}
            />

            {/* curl arrow */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p
                className="apollo_text"
                // sx={{
                //   fontSize: { md: 60, sm: 30, xs: 20 },
                //   width: { sm: "70%", xs: "100%" },
                //   margin: "0 auto",
                //   lineHeight: "62px",
                //   letterSpacing:-3,
                //   fontWeight:100
                // }}
              >
                START YOUR JOURNEY <br /> WITH EXCELLENCE.
              </p>
              {/* <Box mt={2} className="getStarted" px={4} py={1.5}> */}
              <HoverButton
                title="Get Started"
                width={{ md: 180 }}
                height={{ md: 50, xs: 40 }}
              />
              {/* <p className="getStartedText">Get Started</p> */}
              {/* </Box> */}
            </Box>
          </Box>
          {/* section images */}
          <SectionOneImages />
          {/* section images */}
        </Stack>
        {/* first section */}
        {/* second section start */}
        {/* about us */}
        <Box
          sx={{
            width: "100%",
            py: { md: 10, sm: 10, xs: 10 },
            // px: { md: 10, sm: 5, xs: 2 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <CustomMarquee />
          <Box
            sx={{
              display: { sm: "flex", xs: "none" },
              backgroundImage: `url(${Images.diamond})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
              height: "173px",
              width: { sm: "180px", xs: "100%" },
              position: "absolute",
              bottom: "20% ",
              left: { sm: -70, xs: 10 },
            }}
          />
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              backgroundImage: `url(${Images.Ellipse2})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "",
              // backgroundAttachment: "fixed",
              backgroundSize: "100% 100%",
              height: "100%",
              width: { sm: "100%" },
              position: "absolute",
              right: { sm: 0 },
              top: -10,
            }}
          />
          <Grid
            container
            spacing={4}
            sx={{ px: { md: 10, sm: 5, xs: 2 }, mt: { md: 10 } }}
          >
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "flex-end",
              }}
            >
              <Box pl={2} sx={{ width: "100%" }}>
                <p className="about-us">ABOUT US</p>
                <p className="about-sub-heading">
                  Whatever you’re planning, <br /> make it extraordinary.
                </p>
                <p className="about-para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry
                </p>
                <Box mt={2}>
                  <HoverButton
                    title="Learn More"
                    width={120}
                    height={35}
                    fontSize={14.56}
                  />
                  {/* <CustomButton title="Learn More" /> */}
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // pr: 5,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  mt: { xs: -2, sm: 0, md: 0 },
                  border: "1.5px solid #585858",
                  borderRadius: 3.9,
                  overflow: "hidden",
                }}
              >
                <img
                  src={Images.about}
                  alt="About"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* about us */}
        {/* second section end */}
        {/* counter */}
        <Box my={10} mt={10} display={{ md: "flex", sm: "none", xs: "none" }}>
          <Counter />
        </Box>
        {/* counter */}
        {/* user card */}
        <Box
          px={{ md: 13, sm: 2, xs: 1 }}
          pb={{ md: 25, xs: 5 }}
          sx={{
            mt: 2,
            backgroundImage: `url(${Images.diamondRight})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            // backgroundAttachment: "fixed",
            backgroundSize: "100% 100%",
            height: "100%",
            // backgroundColor: "#000",
          }}
        >
          <Box
            sx={{
              ml: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
              }}
            >
              <p className="meet-client">MEET OUR TOP CLIENT</p>
              <p className="your-events">
                Discover Professionals Who Bring Your Events To Life.
              </p>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "40%",
                alignItems: "flex-end",
              }}
              pt={2}
            >
              <Box
                sx={{
                  border: "2px solid #585858",
                  width: { md: 170, xs: 80 },
                  height: { md: 50, xs: 40 },
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  px: 0.2,
                  justifyContent: "space-between",
                }}
              >
                {/* <Typography
                  sx={{
                    color: "#fff",
                    backgroundImage: colors.hoverBackground,
                    px: 3,
                    py: 1,
                    borderRadius: 10,
                    fontWeight: 600,
                    fontFamily: "Poppins",
                    display: { md: "flex", xs: "none" },
                  }}
                >
                  Men
                </Typography> */}
                <Box
                  sx={{
                    color: "#fff",
                    backgroundImage: colors.hoverBackground,
                    px: 3,
                    py: 1,
                    borderRadius: 10,
                    display: { md: "flex", xs: "none" },
                  }}
                >
                  <CommonText
                    title="Men"
                    textStyle={{ color: "#fff", letterSpacing: "2px" }}
                  />
                </Box>

                <Typography
                  sx={{
                    color: "#fff",
                    backgroundImage: colors.hoverBackground,
                    px: 0.7,
                    py: 0.7,
                    borderRadius: 100,
                    fontWeight: 600,
                    fontFamily: "Poppins",
                    display: { md: "none", xs: "flex" },
                  }}
                >
                  {icons.manIcon}
                </Typography>
                <Box
                  sx={{
                    color: "#fff",
                    px: 1,
                    py: 1,
                    borderRadius: 10,
                    display: { md: "flex", xs: "none" },
                  }}
                >
                  <CommonText
                    title="Women"
                    textStyle={{ color: "#fff", letterSpacing: "2px" }}
                  />
                </Box>

                <Typography
                  sx={{
                    color: "#fff",
                    backgroundImage: colors.hoverBackground,
                    px: 0.7,
                    py: 0.7,
                    borderRadius: 100,
                    fontWeight: 600,
                    fontFamily: "Poppins",
                    display: { md: "none", xs: "flex" },
                  }}
                >
                                   {icons.womanIcon}

                </Typography>

                {/* Add a divider or any other separator between Men and Women */}
                {/* <Typography
                  sx={{
                    color: "#fff",
                    // backgroundImage: colors.hoverBackground, // Commented out for consistency
                    px: 3,
                    py: 1,
                    borderRadius: 10,
                    fontWeight: 600,
                    fontFamily: "APOLLO",
                    display: { md: "flex", xs: "none" },
                  }}
                >
                  Women
                </Typography> */}
               
              </Box>
            </Box>
          </Box>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            //   spacing={8}
          >
            {talentCard.map((items, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "100%", sm: "50%", md: "33.33%", lg: "25%" },
                  padding: 1,
                  boxSizing: "border-box",
                }}
              >
                <UserCard
                  name={items.name}
                  job={items.job}
                  images={items.image}
                  // bulletBorder={items.color}
                  bulletColor={items.color}
                  popularity={items.popularity}
                />
              </Box>
            ))}
          </Stack>
        </Box>
        {/* user card */}
        {/* How its work */}
        <Box py={10} pb={15}>
          <Box
            sx={{
              textAlign: "center",
              pt: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <p className="work">HOW ITS WORK</p> */}
            <CommonText
              title="HOW ITS WORK"
              textStyle={{ fontSize: "40px", letterSpacing: "1px" }}
            />
            <p
              className="about-para"
              style={{
                color: "#fff",
                fontSize: 16,
                marginTop: "1px",
              }}
            >
              Discover professionals who bring your events to life.
            </p>
          </Box>

          {/* commmited byb saime    */}
          {/* <Box
           
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            gap={1}
            sx={{ px: { md: 13, sm: 2, xs: 1 } }}
          >
            {howItsWork.map((data) => {
              return (
                <Box
                  className="col-md-3 col-sm-6 col-xs-12"
                  sx={{ overflowX: "hidden" }}
                >
                  <Avaialibility
                    image={data.image}
                    heading={data.heading}
                    para={data.para}
                  />
                </Box>
              );
            })}
          
          </Box> */}

          {/* ///comiitted by saime */}
            <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            //   spacing={8}
          >
            {howItsWork.map((data , index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "100%", sm: "50%", md: "33.33%", lg: "25%" },
                  padding: 1,
                  boxSizing: "border-box",
                }}
              >
                 <Avaialibility
                    image={data.image}
                    heading={data.heading}
                    para={data.para}
                  />
              </Box>
            ))}
          </Stack>
        </Box>
        {/*  */}
        {/* Browse Talent */}
        <Stack
          px={{ xs: 2, md: 13 }}
          pt={{ xs: 5, md: 10 }}
          py={10}
          sx={{
            position: "relative",
            backgroundColor: "#151515",
            // boxShadow: "inset 0 0 100px 2px rgba(255, 255, 255, 0.3)",
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
          <Box mb={1} ml={2}>
            <p className="about-us">BROWSE OUR TALENT</p>
            <p className="about-para" style={{ marginTop: "-8px" }}>
              Discover professionals who bring your events to life.
            </p>
          </Box>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            //   spacing={8}
            mb={1}
          >
            {browseTalent.map((image, index) => (
              <Box
                key={index}
                sx={{
                  width: {
                    xs: "50%",
                    sm: "33.33%",
                    md: "33.33%",
                    lg: "16.66%",
                  },
                  padding: 1,
                  boxSizing: "border-box",
                }}
              >
                <BrowseTalent images={image} />
              </Box>
            ))}
          </Stack>
          <Box
            sx={{
              mt: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            mb={10}
          >
            <HoverButton title="Browse Talent" />
          </Box>

          {/* Become a part */}
          <Stack
            sx={{
              textAlign: { sm: "center", xs: "start" },
              width: { md: "100%", xs: "100%" },
              margin: { md: "0 auto" },
            }}
          >
            <p className="part-of" style={{ letterSpacing: "2px" }}>
              Become a Part of <br /> Prestige Promoters.
            </p>
            <p className="part-of-para">
              Unlock a world of premium event services by signing up. Whether
              <br />
              you're booking talent or promoting events, <br /> begin your
              journey with us now!
            </p>
            <Box
              sx={{
                border: "1px solid #585858",
                borderRadius:1,
                height: 60,
                width: "80%",
                mt: 4,
                display: "flex",
                alignItems: "center",
                pl: { sm: 2, xs: 1 },
                mx: { sm: 5, xs: 0 },
                alignSelf: "center",
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
                  outline: "none",
                }}
              />
              <Box
                sx={{
                  backgroundColor: colors.dark,
                  borderTopRightRadius:3,
                  borderBottomRightRadius:3,
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundImage:  "linear-gradient(30deg, #F1E172, #C3A64F , #F1E172)",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography className="classforfontFamilly" sx={{ 
                  color: "#fff", px: { sm: 5, xs: 2 } }}>
                  Register
                </Typography>
              </Box>
            </Box>
          </Stack>
          {/* Become a part */}
        </Stack>
        {/* Browse Talent */}
      </Box>
    </Layout>
  );
};

export default MainHome;
