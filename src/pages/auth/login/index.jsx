import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import colors from "../../../assets/color/color";
import BoldTypography from "../../../components/BoldTypography";
import { AuthPassword, TextInput } from "../../../components/auth/AuthInputs";
import MDButton from "../../../components/MDButton";
import { useNavigate } from "react-router-dom";
import icons from "../../../assets/Icons/icons";

const Login = () => {
  const navigation = useNavigate();

  return (
    <Box
      className=""
      sx={{
        backgroundColor: "#1D1C1C",
        height: "100vh",
        overflowX: "hidden",
      }}
    >
      <Stack
        className="col-md-6 col-sm-10 col-xs-12"
        sx={{
          borderRadius: { md: 3, sm: 0 },
          boxShadow: { sm: "0px 4px 10px rgba(0, 0, 0, 0.4)" },
          margin: "0 auto",
          my: { sm: "2rem" },
          py: 2,
          border: `1px solid ${colors.white}`,
          textAlign: "center",
          //   backgroundColor: "#282C35",
          backgroundImage: colors.backgroundColor,
        }}
      >
        <BoldTypography
          title="Login"
          //   variant={sm:"h2",xs:"h6"}
          style={{ fontSize: { xs: 30, sm: 60 } }}
          backgroundImage={colors.gradientText}
        />
        <Typography
          sx={{
            color: colors.white,
            my: 2,
            fontSize: { xs: 20, sm: 25 },
            lineHeight: "21px",
            fontFamily: "Poppins",
          }}
        >
          Welcome back! Please enter your details
        </Typography>
        <Stack sx={{ textAlign: "left", mx: { sm: 10, xs: 2 }, my: 4 }}>
          <form>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextInput label="Email" placeholder="Enter EMail" />
              <AuthPassword label="Password" placeholder="Enter Password" />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <input type="checkbox" />
                <Typography
                  sx={{
                    color: colors.text,
                    fontSize: { sm: 18, xs: 14 },
                    lineHeight: "21px",
                    fontFamily: "Poppins",
                  }}
                >
                  Remember Me
                </Typography>
              </Box>
              <Box>
                <BoldTypography
                  backgroundImage={colors.gradientText}
                  title="Forget Password"
                  style={{
                    fontWeight: 600,
                    fontSize: { sm: 18, xs: 14 },
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Box>
            <Stack sx={{ my: 4 }}>
              <MDButton
                title="sign in"
                borderImage={colors.gradientText}
                textColor={colors.gradientText}
              />
            </Stack>
          </form>
          <Stack>
            <MDButton
              title="Sign in with google"
              borderImage={colors.gradientTextWhite}
              textColor={colors.gradientTextWhite}
              isLogo={true}
            />
          </Stack>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
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
            onClick={() => navigation("/pre-registration")}
            title="Sign up"
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
  );
};

export default Login;
