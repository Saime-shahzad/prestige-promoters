import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import "./styles.css";
import { Box, Grid, Stack } from "@mui/material";
import CustomButton from "./assets/custom-Button";
import Images from "../../assets/images";
import UserCard from "./assets/custom-card";
import { talentPeopleCard } from "../../constants/othres";
import { useNavigate } from "react-router-dom";
import HoverButton from "../../components/HoverButton";

const TalentHome = () => {
  const navigation = useNavigate();
  const [isLiked, setIsliked] = useState(false);

  const modalOptions = [
    {
      title: "Sort By",
    },
    {
      title: "All Categories",
    },
    {
      title: "Price",
    },
  ];

  const handleUserNav = (data) => {
    console.log(data.id);
    navigation(`/talentedUser/${data?.id}`, { state: { ...data, isLiked } });
  };

  const handleLiked = (id) => {
    setIsliked((prev) => (prev === id ? null : id));
    console.log(id);
  };

  return (
    <Layout>
      <Box
        bgcolor={"#000"}
        py={4}
        sx={{
          backgroundImage: `url(${Images.talentBg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        {/* first section */}
        <Box>
          <Grid
            container
            //   spacing={2}
          >
            <Grid
              item
              xs={12}
              md={6}
              mt={{ xs: 2 }}
              pl={{ md: 4 }}
              sx={{
                display: { xs: "flex", md: "block" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack direction="row" spacing={2}>
                {modalOptions.map((data, index) => (
                  <CustomButton key={index} title={data.title} isIcon={true} />
                ))}
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              mt={{ xs: 2 }}
              pr={{ md: 4 }}
              sx={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "flex-end",
                justifyContent: "center",
              }}
            >
              <Box className="searchBox">
                <Box className="searchImgContainer">
                  <img src={Images.search} alt="search" className="img" />
                </Box>
                <div style={{ display: "flex", flex: 1 }}>
                  <input
                    placeholder="Type your text here"
                    className="inputs"
                    style={{ width: "100%" }}
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* first section */}
        {/* second section card */}
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
              <Box sx={{ flexBasis: "24%", marginBottom: "16px" }} key={index}>
                <UserCard
                  src={data.src}
                  name={data.name}
                  accupation={data.accupation}
                  rate={data.rate}
                  onClick={() => handleUserNav(data)}
                  isLiked={data.id === isLiked}
                  handleLiked={() => handleLiked(data.id)}
                />
              </Box>
            );
          })}
        </Box>
        {/* second section card */}
        <Box
          sx={{
            mt: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <HoverButton title="Browse Talent" px={5} pt={1} />
          {/* <CustomButton  title="Browse Talent" px={5} pt={1} /> 
          committed by saime because wrong button is used there
          */}
        </Box>
      </Box>
    </Layout>
  );
};

export default TalentHome;
