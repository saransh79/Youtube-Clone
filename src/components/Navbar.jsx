import React from 'react'
import { Stack } from '@mui/system'
import { Link } from 'react-router-dom'

import logo from '../data/images/logo.png'
import SearchBar from './SearchBar'
import { IconButton } from '@mui/material'
import { DarkMode, LightModeOutlined } from '@mui/icons-material';

const Navbar = ({ lightMode, setLightMode }) => (
    <Stack
        direction='row'
        alignItems='center'
        p={1}
        sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>

        <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="logo" className='logo'/>
        </Link>

        <Stack direction='row' alignItems='center'>

            <SearchBar />
            <IconButton onClick={() => setLightMode(mode => !mode)} sx={{
                ml: 3,
                color: '#fff'
            }}>
                {lightMode ? <LightModeOutlined /> : <DarkMode />}
            </IconButton>
        </Stack>
    </Stack>
)

export default Navbar