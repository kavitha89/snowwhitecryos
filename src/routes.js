// @mui icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AnalyticsIcon from "@mui/icons-material/Analytics";

// Sections
// import Typography from "layouts/sections/elements/typography";
import Presentation from "layouts/pages/presentation";

const routes = [
  {
    name: "Profile",
    route: "/profile",
    component: <Presentation />,
    icon: <AccountCircleIcon />,
  },
  {
    name: "Ice Coins",
    route: "/icecoins",
    component: <Presentation />,
    icon: <MonetizationOnIcon />,
  },
  {
    name: "Carbon Footprint",
    route: "/carbonfp",
    component: <Presentation />,
    icon: <AnalyticsIcon />,
  },
  // {
  //   name: "github",
  //   icon: <GitHubIcon />,
  //   href: "https://www.github.com/creativetimofficial/material-kit-react",
  // },
];

export default routes;
