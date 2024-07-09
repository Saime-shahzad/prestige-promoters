import { Avatar, Box, Button, Grid, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import colors from "../../../assets/color/color";
import BoldTypography from "../../../components/BoldTypography";
import MDButton from "../../../components/MDButton";
import { DropDown, TextInput } from "../../../components/auth/AuthInputs";
import { gender, months } from "../../../constants/register";
import * as yup from "yup";
import { useFormik } from "formik";

import person from "./../../../assets/images/person.png";

const initialValue = {
  month: "",
  day: "",
  year: "",
  gender: "",
  state: "",
  city: "",
  profession: "",
};

const validationSchema = yup.object({
  month: yup.string().required("Please select month"),
  day: yup.string().required("Please enter day"),
  year: yup.string().required("Please enter year"),
  gender: yup.string().required("Please select gender"),
  state: yup.string().required("Please enter state"),
  city: yup.string().required("Please enter city"),
  profession: yup.string().required("Please enter profession"),
});

const PostRegistration = () => {
  const onSubmit = async (value) => {
    try {
      console.log("PostRegistration==>", value);
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
        py: { sm: 7, xs: 1 },
      }}
    >
      <Stack
        className="col-md-6 col-sm-10 col-xs-12"
        sx={{
          borderRadius: { md: 3, sm: 0 },
          boxShadow: { sm: "0px 4px 10px rgba(0, 0, 0, 0.4)" },
          margin: "0 auto",
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
            my: 4,
          }}
        >
          <BoldTypography
            title="Register"
            //   variant={sm:"h2",xs:"h6"}
            style={{ fontSize: { xs: 30, sm: 60 }, mt: -5 }}
            backgroundImage={colors.gradientText}
          />
        </Box>
        <Stack sx={{ textAlign: "start" }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <DropDown
                  menuItem={months}
                  label="Months"
                  title="Date of Birth"
                  value={values.month}
                  name="month"
                  onChange={handleChange}
                  error={errors.month}
                />
              </Grid>
              <Grid item xs={6} md={3} sx={{ mt: { md: 2.8 } }}>
                <TextInput
                  placeholder="Day"
                  name="day"
                  value={values.day}
                  onChange={handleChange}
                  type="number"
                  errors={errors.day}
                />
              </Grid>
              <Grid item xs={6} md={3} sx={{ mt: { md: 2.8 } }}>
                <TextInput
                  placeholder="Year"
                  name="year"
                  value={values.year}
                  onChange={handleChange}
                  type="number"
                  errors={errors.year}
                />
              </Grid>
              <Grid item xs={12}>
                <DropDown
                  menuItem={gender}
                  label="Gender"
                  title="Gender"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  error={errors.gender}
                />
              </Grid>
              <Grid item xs={12} sx>
                <TextInput
                  placeholder="State"
                  label="State"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  type="text"
                  errors={errors.state}
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  placeholder="City"
                  label="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  type="text"
                  errors={errors.city}
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  placeholder="Profession"
                  label="Profession"
                  name="profession"
                  value={values.profession}
                  onChange={handleChange}
                  type="text"
                  errors={errors.profession}
                />
              </Grid>
            </Grid>
            <MDButton
              type="submit"
              title="Register"
              borderImage={colors.gradientText}
              textColor={colors.gradientText}
              style={{ px: 10, alignSelf: "center", margin: "0 auto", mt: 2 }}
            />
          </form>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PostRegistration;
