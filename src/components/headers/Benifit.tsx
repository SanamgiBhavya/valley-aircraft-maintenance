import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

function Benefit() {
  return (
    <Box sx={{ mt: 6 }} data-aos="fade-up">
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ bgcolor: "#f3f3f3" }}>
          <Grid item xs={12} sm={6} md={3} sx={{ paddingX: 0 }}>
            <Box
              className="benefit_item"
              sx={{
                height: 100,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderRight: "solid 1px #ffffff",
                paddingX: 2,
              }}
            >
              <Box className="benefit_icon" sx={{ fontSize: 30, color: "#fe4c50" }}>
                <i className="fa fa-truck" aria-hidden="true"></i>
              </Box>
              <Box className="benefit_content" sx={{ pl: 2 }}>
                <Typography variant="subtitle2" sx={{ textTransform: "uppercase", fontWeight: 500, mb: 0 }}>
                  free shipping
                </Typography>
                <Typography variant="caption" sx={{ lineHeight: "18px", color: "#51545f", mb: 0 }}>
                  Orders above 50 CAD
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ paddingX: 0 }}>
            <Box
              className="benefit_item"
              sx={{
                height: 100,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderRight: "solid 1px #ffffff",
                paddingX: 2,
              }}
            >
              <Box className="benefit_icon" sx={{ fontSize: 30, color: "#fe4c50" }}>
                <i className="far fa-money-bill-alt"></i>
              </Box>
              <Box className="benefit_content" sx={{ pl: 2 }}>
                <Typography variant="subtitle2" sx={{ textTransform: "uppercase", fontWeight: 500, mb: 0 }}>
                  cach on delivery
                </Typography>
                <Typography variant="caption" sx={{ lineHeight: "18px", color: "#51545f", mb: 0 }}>
                  The Internet Tend To Repeat
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ paddingX: 0 }}>
            <Box
              className="benefit_item"
              sx={{
                height: 100,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderRight: "solid 1px #ffffff",
                paddingX: 2,
              }}
            >
              <Box className="benefit_icon" sx={{ fontSize: 30, color: "#fe4c50" }}>
                <i className="fa fa-undo" aria-hidden="true"></i>
              </Box>
              <Box className="benefit_content" sx={{ pl: 2 }}>
                <Typography variant="subtitle2" sx={{ textTransform: "uppercase", fontWeight: 500, mb: 0 }}>
                  30 days return
                </Typography>
              </Box></Box></Grid></Grid></Container></Box>);
}

export default Benefit;