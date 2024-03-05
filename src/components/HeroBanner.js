import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImg from '../assets/images/banner4.jpg'

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '120px', xs: '70px' },
            ml: { lg: '120px', sm: '50px' }
        }}>
            <Typography color="#ff2625" fontWeight="600" fontSize="26px">
                Fit Fusion
            </Typography>
            <Typography fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '40px' } }}
                mb='20px' mt='25px'
            >
                Sweat, Smile <br /> And Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={4}>
                Check out the most effective exercises
            </Typography>
            <Button variant='contained' color='error'
                sx={{ backgroundColor: '#ff2625', padding: '10px' }}
            >Explore Exercises</Button>
            <Typography fontWeight={600}
                color={'#ff2625'}
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none' }
                }}
                fontSize="200px"
            >
                Exercise
            </Typography>
            <img src={HeroBannerImg} alt="banner" className='hero-banner-img' />
        </Box>
    )
}

export default HeroBanner;