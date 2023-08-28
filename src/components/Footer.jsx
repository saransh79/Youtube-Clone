import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const Footer = () => {
    return (
        <Box p= {2} mt= {1} >
            <Typography variant='body2' sx={{textAlign: 'center', color: 'gray'}}>
                Made with ❤️ by Saransh Gangwar
            </Typography>
        </Box>
    )
}

export default Footer