import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import about from '../Assets/Images/about.jpg'

export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={about}
            alt="picture"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
              Quality Products,Affordable prices
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
             At megabazar, we are dedicated to providing high-quality products, seamless shopping, and exceptional customer service. 
             Our mission is to make online shopping easy, enjoyable, and accessible for everyone. Whether you're looking for the 
             latest trends or everyday essentials, we've got you covered. Shop with confidence and discover a world of possibilities!
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              At Megabazar, we believe shopping should be fun, easy, and hassle-free. 
              That’s why we offer a wide range of quality products at unbeatable prices, all in one place. 
              With a commitment to excellent customer service and a seamless shopping experience, we make sure you 
              get what you love—fast and effortlessly.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}