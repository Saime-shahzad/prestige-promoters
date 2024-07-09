import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import colors from "../../assets/color/color";

import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import "./style.css";

const TextInput = ({
  placeholder,
  label,
  icon,
  type,
  name,
  onChange,
  value,
  errors,
}) => {
  return (
    <Stack>
      <Typography
        sx={{
          color: colors.text,
          fontSize: { sm: 22, xs: 18 },
          lineHeight: "21px",
          fontFamily: "Poppins",
        }}
      >
        {label}
      </Typography>
      <Box
        sx={{
          border: `1px solid ${colors.text}`,
          my: 2,
          borderRadius: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
          pl: { sm: 2, xs: 1 },
          py: 1,
        }}
      >
        <Box>{icon}</Box>
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          style={{
            width: "100%",
            backgroundColor: "transparent",
            border: "none",
            height: "6vh",
            outline: "none",
            display: "flex",
            flex: 1,
            color: "#fff",
            fontWeight: 500,
            fontSize: "18px",
            "::placeholder": {
              // color: "colors.text",
              color: "#fff",
            },
          }}
        />
      </Box>
      <Typography sx={{ color: "red" }}>{errors}</Typography>
    </Stack>
  );
};

const AuthPassword = ({ label, placeholder, name, value, onChange, error }) => {
  const [showVisibility, setShowVisibility] = useState(false);

  const showPassword = () => {
    setShowVisibility((prev) => !prev);
  };

  return (
    <Stack>
      <Typography
        sx={{
          color: colors.text,
          fontSize: { sm: 22, xs: 18 },
          lineHeight: "21px",
          fontFamily: "Poppins",
        }}
      >
        {label}
      </Typography>
      <Box
        sx={{
          border: `1px solid ${colors.white}`,
          my: 2,
          borderRadius: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
          px: { sm: 2, xs: 1 },
        }}
      >
        <input
          placeholder={placeholder}
          type={showVisibility ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          style={{
            width: "100%",
            backgroundColor: "transparent",
            border: "none",
            height: "6vh",
            outline: "none",
            display: "flex",
            flex: 1,
            color: colors.text,
            fontWeight: 600,
            fontSize: "18px",
          }}
        />
        <Box onClick={showPassword}>
          {showVisibility ? (
            <VisibilityOffIcon
              sx={{ color: colors.text, fontSize: { sm: 30, xs: 22 } }}
            />
          ) : (
            <VisibilityIcon
              sx={{ color: colors.text, fontSize: { sm: 30, xs: 22 } }}
            />
          )}
        </Box>
      </Box>
      <Typography sx={{ color: "red" }}>{error}</Typography>
    </Stack>
  );
};

const DropDown = ({
  menuItem,
  value,
  label,
  placeholder,
  name,
  onChange,
  title,
  className,
  error,
}) => {
  return (
    <Box sx={{ textAlign: "start" }} className={`${className}`}>
      <Typography sx={{ color: "#fff", fontSize: 20, fontWeight: 500, mb: 1 }}>
        {title}
      </Typography>
      <FormControl fullWidth sx={{ border: "1px solid #fff", borderRadius: 2 }}>
        <InputLabel sx={{ color: colors.grey, fontWeight: 600 }}>
          {label}
        </InputLabel>
        <Select
          value={value}
          name={name}
          onChange={onChange}
          label={placeholder}
          sx={{
            color: "#fff",
            "& .MuiSelect-select": {
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
            },
          }}
        >
          {menuItem?.map((data, index) => {
            return (
              <MenuItem key={index} value={data}>
                {data}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Typography sx={{ color: "red", mt: 2 }}>{error}</Typography>
    </Box>
  );
};

export { TextInput, AuthPassword, DropDown };
