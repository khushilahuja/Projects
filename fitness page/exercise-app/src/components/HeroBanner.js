import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImg from '../assets/assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="2px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700} mb='23px' mt='30px'
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}>
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={2}>
        Checkout the most effective Exercises
      </Typography>

      <Button variant='contained' color="error" href="#exercises" style={{padding: '10px'}}>Explore Exercises</Button>

      <Typography fontWeight={600} color='#ff2625' fontSize='200px'
      sx={{opacity: '0.1', display: {lg: 'block', xs: 'none'}}}>
        Exercise
      </Typography>
      <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
