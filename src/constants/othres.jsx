import Images from "../assets/images";

const talentCard = [
  {
    image: Images.user1,
    name: "Alex Coasta",
    job: "Comedian",
    color: "#52FF00",
    popularity: "Top Rated",
  },
  {
    image: Images.musician,
    name: "Miracle Septimus",
    color: "#FFC700",
    job: "Musician",
    popularity: "Popular",
  },
  {
    image: Images.actor,
    name: "Craig Rhiel",
    color: "#FF0000",
    job: "Actor & Speaker",
    popularity: "New",
  },
  {
    image: Images.speaker,
    name: "Gretchen Saris",
    color: "#52FF00",
    job: "Singer",
    popularity: "New",
  },
];

const howItsWork = [
  {
    image: Images.talent,
    heading: "Select The Artist/Talent",
    para: "Choose from a skilled professionals tailored to your event needs.",
  },
  {
    image: Images.booking,
    heading: "Check Availability",
    para: "View real-time availability and select your preferred date and time for the event.",
  },
  {
    image: Images.cart,
    heading: "Book Online",
    para: "Securely book your chosen artist or talent with just a few clicks.",
  },
  {
    image: Images.phone,
    heading: "Get Confirmation",
    para: "Receive a confirmation call within 48 hours to finalize your booking details.",
  },
];

const browseTalent = [
  Images.musician,
  Images.actor,
  Images.speaker,
  Images.user1,
  Images.businessman,
  Images.youngBusinessman,
  Images.speaker,
  Images.actor,
  Images.user1,
  Images.musician,
  Images.businessman,
  Images.youngBusinessman,
];

const hederItems = [
  {
    id: 1,
    title: "Login",
    onClick: () => navigation("/login"),
  },
  {
    id: 2,
    title: "Register",
    onClick: () => navigation("/pre-registration"),
  },
  {
    id: 3,
    title: "Logout",
    onClick: () => alert("hello"),
  },
];
const hederItemsCenter = [
  {
    id: 1,
    title: "Home",
    onClick: "/",
  },
  {
    id: 2,
    title: "About",
    onClick: () => {},
  },
  {
    id: 3,
    title: "Talent",
    onClick: "/talents",
  },
  {
    id: 4,
    title: "How its Work",
  },
];

const talentPeopleCard = [
  {
    id: 1,
    name: "Alex Costa",
    accupation: "Comedian",
    rate: "56,900",
    src: Images.userCard,
  },
  {
    id: 2,
    name: "Hanna Westervelt",
    accupation: "Singer",
    rate: "56,900",
    src: Images.hannah,
  },
  {
    id: 3,
    name: "Brandon Lipshuz",
    accupation: "Motivator",
    rate: "56,900",
    src: Images.brandon,
  },
  {
    id: 4,
    name: "Anika George",
    accupation: "Developer",
    rate: "56,900",
    src: Images.anika,
  },
  {
    id: 5,
    name: "Alex Costa",
    accupation: "Comedian",
    rate: "56,900",
    src: Images.userCard,
  },
  {
    id: 6,
    name: "Alex Costa",
    accupation: "Comedian",
    rate: "56,900",
    src: Images.userCard,
  },
  {
    id: 7,
    name: "Alex Costa",
    accupation: "Comedian",
    rate: "56,900",
    src: Images.userCard,
  },
  {
    id: 8,
    name: "Alex Costa",
    accupation: "Comedian",
    rate: "56,900",
    src: Images.userCard,
  },
  {
    id: 9,
    name: "Alex Costa",
    accupation: "Comedian",
    rate: "56,900",
    src: Images.userCard,
  },
  {
    id: 10,
    name: "Alex Costa",
    accupation: "Comedian",
    rate: "56,900",
    src: Images.userCard,
  },
  {
    id: 11,

    name: "Alex Costa",
    accupation: "Comedian",
    rate: "56,900",
    src: Images.userCard,
  },
  {
    id: 12,

    name: "Alex Costa",
    accupation: "Comedian",
    rate: "56,900",
    src: Images.userCard,
  },
  {
    id: 13,

    name: "Alex Costa",
    accupation: "Comedian",
    rate: "56,900",
    src: Images.userCard,
  },
  {
    id: 14,

    name: "Alex Costa",
    accupation: "Comedian",
    rate: "56,900",
    src: Images.userCard,
  },
  {
    id: 15,

    name: "Alex Costa",
    accupation: "Comedian",
    rate: "56,900",
    src: Images.userCard,
  },
  {
    id: 16,

    name: "Alex Costa",
    accupation: "Comedian",
    rate: "56,900",
    src: Images.userCard,
  },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const userCancelation = [
  {
    title: "Cancelation Process",
    titleTwo: "Flexible",
    img: Images.cancel,
  },
  {
    title: "Total Hours 22H",
    titleTwo: "$ 2,860",
    img: Images.clock,
  },
];

export {
  talentCard,
  howItsWork,
  browseTalent,
  hederItems,
  hederItemsCenter,
  talentPeopleCard,
  days,
  userCancelation,
};
