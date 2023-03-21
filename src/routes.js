// @mui icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AnalyticsIcon from "@mui/icons-material/Analytics";

// Sections
import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    name: "Profile",
    route: "/sections/elements/typography",
    component: <Typography />,
    icon: <AccountCircleIcon />,
  },
  {
    name: "Ice Coins",
    route: "/sections/elements/typography",
    component: <Typography />,
    icon: <MonetizationOnIcon />,
  },
  {
    name: "Carbon Footprint",
    route: "/sections/elements/typography",
    component: <Typography />,
    icon: <AnalyticsIcon />,
  },
  // {
  //   name: "github",
  //   icon: <GitHubIcon />,
  //   href: "https://www.github.com/creativetimofficial/material-kit-react",
  // },
];

export default routes;
