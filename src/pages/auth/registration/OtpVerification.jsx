import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import BoldTypography from "../../../components/BoldTypography";
import colors from "../../../assets/color/color";
import MDButton from "../../../components/MDButton";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import styles from "./OtpVerification.module.css";
import Container from "@mui/material/Container";

const initialValue = {
  otp: null,
};

const validationSchema = yup.object({
  otp: yup.number().required("Please enter contact OTP"),
});

const OtpVerification = () => {
  const navigation = useNavigate();
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (e, i) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[i] = value;
      setOtp(newOtp);
    }
  };

  const onSubmit = async (values) => {
    try {
      console.log("OTP==>", values.otp);
    } catch (error) {
      console.log(error);
    } finally {
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: (values) => onSubmit(values),
  });

  const { values, handleSubmit, errors } = formik;

  return (
    <Box
      sx={{
        backgroundColor: "#151515",
        py: { sm: 7, xs: 1 },
        height: "100vh",
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
        <BoldTypography
          title="OTP VERIFICATION"
          backgroundImage={colors.gradientText}
          style={{ fontSize: { xs: 30, sm: 60 } }}
        />
        <Typography
          sx={{
            color: colors.text,
            fontFamily: "Poppins",
          }}
        >
          please enter the verification code sent to{" "}
          <BoldTypography
            title="+479********8"
            backgroundImage={colors.gradientText}
          />
        </Typography>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            my: 5,
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                gap: 1,
              }}
            >
              {otp.map((data, index) => (
                <Box
                  sx={{
                    width: { sm: 50, xs: 40 },
                    height: { sm: 50, xs: 40 },
                  }}
                  key={index}
                >
                  <div className={styles.otpInputWrapper}>
                    <input
                      type="text"
                      value={data}
                      onChange={(e) => handleChange(e, index)}
                      // style={{
                      //   width: "100%",
                      //   height: "100%",
                      //   padding: "10px",
                      //   outline: "none",
                      //   textAlign: "center",
                      //   background: "#674E1A",
                      //   color: "#fff",
                      //   border: "white",
                      //   borderRadius: "10px",
                      // }}
                      className={`${styles.otpInput} ${
                        data ? styles.filled : ""
                      }`}
                      // style={{ backgroundColor: data ? "green" : "white" }}
                    />
                  </div>
                </Box>
              ))}
            </Box>
            {errors.otp && (
              <Typography sx={{ color: "red" }}>{errors.otp}</Typography>
            )}
            <MDButton
              type="submit"
              // onClick={() => navigation("/post-registration")}
              title="Verify Now"
              borderImage={colors.gradientText}
              textColor={colors.gradientText}
              style={{ px: 8, alignSelf: "center", margin: "0 auto", my: 6 }}
            />
          </form>
          <Stack>
            <Typography
              sx={{
                color: colors.text,
                letterSpacing: 2,
                fontFamily: "Poppins",
                fontSize: { sm: 22, xs: 18 },
                borderBottom: "1px solid #fff",
                cursor: "pointer",
              }}
            >
              Resent code
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                mt: 4,
              }}
            >
              <Typography
                sx={{
                  color: colors.text,
                  fontSize: { sm: 18, xs: 14 },
                  fontFamily: "Poppins",
                }}
              >
                Don’t have an account?
              </Typography>
              <BoldTypography
                onClick={() => navigation("/")}
                title="Sign In"
                backgroundImage={colors.gradientText}
                style={{
                  fontSize: { sm: 22, xs: 18 },
                  fontWeight: 600,
                  mb: 0.4,
                  cursor: "pointer",
                }}
              />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default OtpVerification;
