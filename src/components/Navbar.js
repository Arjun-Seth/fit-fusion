import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-around"

            sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '22px', xs: '12px' }, justifyContent: 'none', alignItems: 'center' }} px='20px'
        >
            <Link to="/">
                <img src={Logo} alt="logo" style={{ width: '124px', height: '124px', margin: '0 20px' }} />
            </Link>
            <Stack
                direction="row"
                gap="40px"
                fontSize="24px"
                fontFamily="Alegreya"
                alignItems="flex-end"
            >
                <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
                <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }} > Exercises</a>
            </Stack>
        </Stack >
    );
};

export default Navbar;