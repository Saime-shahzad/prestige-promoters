import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Images from "../../../../assets/images";
import icons from "../../../../assets/Icons/icons";

const SectionOneImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  //   const handlePrevClick = () => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //     );
  //   };

  //   const handleNextClick = () => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //     );
  //   };

  const images = [
    {
      id: 1,
      img: Images.singer,
    },
    {
      id: 2,
      img: Images.motivational,
    },
    {
      id: 3,
      img: Images.sexaphone,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true);
      }, 500); // Duration of fade-out transition
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  return (
    <Box>
      {/* web screen */}
      <Grid
        //   container
        spacing={2}
        sx={{
          display: { md: "flex", xs: "none" },
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: { md: 10 },
        }}
        mt={-5}
      >
        <Grid
          item
          xs={12}
          md={4}
          sm={6}
          sx={{
            backgroundImage: `url(${Images.dottedBorder})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
          }}
        >
          <Box sx={{ width: 297, height: 405, pb: 4 }}>
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
        <Grid item xs={12} md={4} sm={6} mt={20} sx={{ position: "relative" }}>
          <Box
            sx={{
              width: 370,
              height: 359,
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <img
              src={Images.motivational}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: 200,
              position: "absolute",
              top: "-27%",
              right: "-63%",
            }}
          >
            <img
              src={Images.Frame}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sm={6}
          sx={{
            backgroundImage: `url(${Images.dottedBorder})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
          }}
        >
          <Box
            sx={{
              width: 297,
              height: 405,
              pb: 4,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
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
      {/* web screen */}
      {/* mobile screen */}
      <Grid
        container
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          justifyContent: "center",
          mt: 4,
        }}
      >
        {images.map((image, index) => (
          <Grid
            item
            xs={12}
            key={index}
            sx={{ display: index === currentIndex ? "block" : "none" }}
          >
            <Box
              sx={{
                width: "100%",
                height: 400,
                position: "relative",
                opacity: fade ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <img
                src={image.img}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SectionOneImages;
