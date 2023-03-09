// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "./pages/LandingPages/AboutUs";
import ContactUs from "./pages/LandingPages/ContactUs";
import Author from "./pages/LandingPages/Author";
// import SignIn from "layouts/pages/authentication/sign-in";

const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "about ussssss",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "contact us",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "author",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
      // {
      //   name: "account",
      //   collapse: [
      //     {
      //       name: "sign in",
      //       route: "/pages/authentication/sign-in",
      //       component: <SignIn />,
      //     },
      //   ],
      // },
    ],
  },
  {
    name: "github",
    icon: <GitHubIcon />,
    href: "https://www.github.com/creativetimofficial/material-kit-react",
  },
];

export default routes;
