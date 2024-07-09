import colors from "../color/color";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const icons = {
  mail: <EmailIcon sx={{ color: colors.text, fontSize: { sm: 30, xs: 22 } }} />,
  person: (
    <PersonIcon sx={{ color: colors.text, fontSize: { sm: 30, xs: 22 } }} />
  ),
  phone: (
    <PhoneIcon sx={{ color: colors.text, fontSize: { sm: 30, xs: 22 } }} />
  ),
  email: (
    <EmailIcon sx={{ color: colors.text, fontSize: { sm: 30, xs: 22 } }} />
  ),
  arrowBack: (
    <ArrowBackIosIcon sx={{ color: colors.text, fontSize: { sm: 15 } }} />
  ),
  arrowForward: (
    <ArrowForwardIosIcon sx={{ color: colors.text, fontSize: { sm: 15 } }} />
  ),
  manIcon: <ManIcon sx={{ color: colors.text, fontSize: { xs: 20 } }} />,
  womanIcon: <WomanIcon sx={{ color: colors.text, fontSize: { xs: 20 } }} />,
  google: <GoogleIcon sx={{ color: colors.text, fontSize: { xs: 20 } }} />,
  facebook: <FacebookIcon sx={{ color: colors.text, fontSize: { xs: 24 } }} />,
  instagram: (
    <InstagramIcon sx={{ color: colors.text, fontSize: { xs: 24 } }} />
  ),
  linkedIn: <LinkedInIcon sx={{ color: colors.text, fontSize: { xs: 24 } }} />,
  arrowUp: <KeyboardArrowUpOutlinedIcon sx={{ color: colors.gradientText, fontSize: { xs: 24 } }} />,
  arrowDown: <KeyboardArrowDownOutlinedIcon sx={{ color: colors.gradientText, fontSize: { xs: 24 } }} />,
  crossIcon: <CancelOutlinedIcon sx={{ color: colors.text, fontSize: { xs: 24 } }} />,
};

export default icons;
