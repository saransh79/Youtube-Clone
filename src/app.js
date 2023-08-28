import React from 'react'

// For routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Box is like div
import { Box } from '@mui/system'

import SearchFeed from './components/SearchFeed'
import Feed from './components/Feed'
import VideoDetail from './components/VideoDetail'
import ChannelDetail from './components/ChannelDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
    const [lightMode, setLightMode] = React.useState(true)
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: lightMode ? '#fff' : '#000' }}>
                <Navbar lightMode={lightMode} setLightMode={setLightMode} />
                <Routes>
                    <Route path='/' exact element={<Feed lightMode={lightMode} />} />
                    <Route path='/video/:id' element={<VideoDetail lightMode={lightMode} />} />
                    <Route path='/channel/:id' element={<ChannelDetail lightMode={lightMode} />} />
                    <Route path='/search/:searchTerm' element={<SearchFeed lightMode={lightMode} />} />

                </Routes>
                <Footer />
            </Box>
        </BrowserRouter>
    )
}

export default App