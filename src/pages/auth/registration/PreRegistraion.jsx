import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import BoldTypography from "../../../components/BoldTypography";
import colors from "../../../assets/color/color";

import { AuthPassword, TextInput } from "../../../components/auth/AuthInputs";
import MDButton from "../../../components/MDButton";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

import person from "./../../../assets/images/person.png";
import icons from "../../../assets/Icons/icons";

const initialValue = {
  full_name: "",
  phone: "",
  email: "",
  password: "",
  password_confirmation: "",
};

const validationSchema = yup.object({
  full_name: yup.string().required("Please enter name"),
  phone: yup.string().required("Please enter contact number"),
  email: yup
    .string()
    .required("Please enter email")
    .email("Invalid email format"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter password"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm password"),
});

const PreRegistraion = () => {
  const navigation = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        formik.setFieldValue("image", file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const onSubmit = async (value) => {
    try {
      console.log("PreRegistration==>", value);
      navigation("/otp-verification");
    } catch (error) {
      console.log(error);
    } finally {
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: (value) => onSubmit(value),
  });

  const { values, handleChange, handleSubmit, errors } = formik;

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        py: { sm: 3, xs: 1 },
      }}
    >
      <Stack
        className="col-md-6 col-sm-10 col-xs-12"
        sx={{
          borderRadius: { md: 3, sm: 0 },
          boxShadow: { sm: "0px 4px 10px rgba(0, 0, 0, 0.4)" },
          margin: "0 auto",
          //   my: { sm: "2rem" },
          py: 2,
          border: `1px solid ${colors.white}`,
          textAlign: "center",
          backgroundImage: colors.backgroundColor,
          px: { sm: 4, xs: 1 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <BoldTypography
            title="Register"
            //   variant={sm:"h2",xs:"h6"}
            style={{ fontSize: { xs: 30, sm: 60 }, mt: -5 }}
            backgroundImage={colors.gradientText}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={{
                width: { sm: 90, xs: 50 },
                height: { sm: 90, xs: 50 },
                border: "4px solid",
                borderColor: "transparent",
                backgroundImage: colors.gradientText,
                alignSelf: "center",
                objectFit: "contain",
              }}
            >
              <img
                src={selectedImage || person}
                alt="person"
                style={{ width: "100%", height: "100%" }}
              />
            </Avatar>
            <Button
              variant="body2"
              sx={{ color: colors.text, fontSize: { xs: 14, sm: 18 } }}
              onClick={handleClick}
            >
              Add Photo
            </Button>
            <input
              type="file"
              ref={inputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
              accept="image/*"
            />
          </Box>
        </Box>
        <Stack>
          <form
            onSubmit={handleSubmit}
            style={{
              textAlign: "start",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              flex: 1,
            }}
          >
            <TextInput
              label="Full Name"
              placeholder="Enter Full Name"
              icon={icons?.person}
              type="text"
              name="full_name"
              onChange={handleChange}
              value={values.full_name}
              errors={errors.full_name}
            />
            <TextInput
              label="Phone"
              placeholder="Enter Contact Number"
              icon={icons?.phone}
              type="number"
              name="phone"
              onChange={handleChange}
              value={values.phone}
              errors={errors.phone}
            />
            <TextInput
              label="Email"
              placeholder="Enter Email"
              icon={icons?.email}
              type="email"
              onChange={handleChange}
              value={values.email}
              errors={errors.email}
              name="email"
            />
            <AuthPassword
              label="Password"
              placeholder="Enter Password"
              value={values.password}
              name="password"
              onChange={handleChange}
              error={errors.password}
            />
            <AuthPassword
              label="Confirm Password"
              placeholder="Enter Confirm Password"
              value={values.password_confirmation}
              name="password_confirmation"
              onChange={handleChange}
              error={errors.password_confirmation}
            />
            <MDButton
              type="submit"
              title="Proceed"
              borderImage={colors.gradientText}
              textColor={colors.gradientText}
              style={{ px: 10, alignSelf: "center", margin: "0 auto", mt: 2 }}
              //   onClick={() => navigation("/otp-verification")}
            />
          </form>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PreRegistraion;
