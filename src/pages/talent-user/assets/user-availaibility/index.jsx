import React from "react";
import "./styles.css";
import { Box, Stack } from "@mui/material";
import RadioButton from "../../../../components/Availaibility-radio-Button";
import Images from "../../../../assets/images";

const UserAvailaibility = () => {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <p className="commonText">Hourly rate</p>
          <p className="" style={{ fontSize: "16px", color: "#FFFEFE" }}>
            $130
          </p>
        </Box>
        <Box>
          <p className="commonText">Availaibility</p>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Stack mt={-1.5}>
              <RadioButton bgColor="#52FF00" borderColor="#52FF00" />
            </Stack>
            <Stack>
              <p className="" style={{ fontSize: "16px", color: "#FFFEFE" }}>
                Availaible
              </p>
            </Stack>
          </Box>
        </Box>
        <Box>
          <p className="commonText">Reviews</p>
          <Box sx={{ display: "flex", alignItems: "", gap: 1 }}>
            <p className="" style={{ fontSize: "16px", color: "#FFFEFE" }}>
              4.7
            </p>
            <Box sx={{ width: 70, height: "100%" }}>
              <img
                src={Images.stars}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserAvailaibility;
