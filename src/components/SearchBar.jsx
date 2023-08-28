import React from 'react'
import { useState } from 'react'

// useNavigate function is used to pass something to the base url
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate= useNavigate();
    
    const handleSubmit= (e) =>{
        e.preventDefault();

        if(searchTerm){
            navigate(`/search/${searchTerm}`)
            setSearchTerm('')
        }
    }
    return (
        // Paper is mui's div like component with white background 
        <Paper
            component='form'
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                paddingLeft: 2,
                boxShadow: 'none'
            }}>
            <input className='search-bar' placeholder='Search...' value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value) }} />
            {/* IconButton is working as a button */}
            <IconButton type='submit' sx={{
                padding: '5px',
                color: 'red'
            }}>
                {/* Search is an icon from material ui */}
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar