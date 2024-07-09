import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import icons from "../assets/Icons/icons";

const RadioButton = ({ borderColor, bgColor, data ,handleClose }) => {
  
  
  return (
    <Box
      sx={{
        border: `1px solid ${borderColor}`,
        borderRadius: 50,
        width: "100%",

        display: "block",
        alignItems: "center",
        justifyContent: "center",
          fontFamily: "POPPINS",
      }}
    >
     { data && <div className="modalHeader border-bottom text-white p-2 d-flex w-100 justify-content-between ">
      <div className="textParrent fs-4 fw-normal"> {data[0]?.arrayName}</div>
      <div className=" " style={{cursor:"pointer" , paddingTop:6}} onClick={handleClose}>
        {icons.crossIcon}
      </div>
      </div>}
      {data ? (
        data?.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                color: "white",
                borderRadius: 50,
                display: "flex",
                width: "100%",
                p:1,
                px:3,

              }}
            >
              
              <div className="radioParentDivforModal w-100 ">
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    label={item.text}
                    control={<Radio />}
                    labelPlacement="start"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
          fontFamily: "POPPINS",

                      width: "100%",
                      ml: 0, // Ensure there's no margin on the left side
                      "& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)":
                        {
                          color: "#C4A750",
                        },
                      "& .MuiSvgIcon-root + .MuiSvgIcon-root": {
                        color: "#C4A750",
                      },
                    }}
                    value={item.text}
                  />
                </RadioGroup>
              </div>
            </Box>
          );
        })
      ) : (
        <Box
          sx={{
            width: 12,
            height: 12,
            backgroundColor: bgColor,
            borderRadius: 50,
          }}
        />
      )}
    </Box>
  );
};

export default RadioButton;
