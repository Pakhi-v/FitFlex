import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/back.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '51px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '18px', xs: '12px' } }} mt="31px" textAlign="center" pb="40px">Made with ❤️ by Pakhi Vashishth </Typography>
  </Box>
);

export default Footer;
