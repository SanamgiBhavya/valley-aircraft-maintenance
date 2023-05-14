// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "./components/MKTypography";

// Images

const date = new Date().getFullYear();

const footerRoutes = {
  brand: {
    name: "Valley Maintenance",
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "/about-us" },
        { name: "freebies", href: "#" },
        { name: "premium tools", href: "#" },
        { name: "blog", href: "#" },
      ],
    },
    // {
    //   name: "Location & Hours",
    //   items: [
    //     { name: "West - Corona, CA", href: "#" },
    //     { name: "Southwest - Chandler, AZ", href: "#" },
    //     { name: "Central - Fort Worth, TX", href: "#" },
    //   ],
    // },
    {
      name: "Contact",
      items: [
        { name: "contact us", href: "/contact-us" },
        { name: "Toll Free: 877-477-XXXX", href: "#" },
        { name: "Customer Service: 800-861-3192", href: "#" },
        { name: "Fax: 800-329-3020", href: "#" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "#" },
        { name: "privacy policy", href: "#" },
        { name: "licenses", href: "#" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Valley Aircraft Maintenance.{" "}
    </MKTypography>
  ),
};

export default footerRoutes;