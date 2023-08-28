import { Box } from "@mui/system"
import { CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from "../data/constants"

const ChannelCard = ({ channelDetails, marginTop }) => (
  <Box sx={{
    boxShadow: 'none',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '338px',
    height: '300px',
    margin: 'auto',
    marginTop
  }}>

    <Link to={`/channel/${channelDetails?.id?.channelId}`}>
      <CardContent sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        textAlign: 'center',
        color: 'gray'
      }}>

        <CardMedia
          image={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetails?.snippet?.title}
          sx={{
            borderRadius: '50%', height: 180,
            width: 180,
            mb: 2,
            border: '2px solid #e3e3e3'
          }}
        />

        <Typography variant='h6'>
          {channelDetails?.snippet?.title}
          <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
        </Typography>

        {channelDetails?.statistics?.subscriberCount &&
          <Typography variant="body1" sx={{ opacity: 0.8 }} >
            {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        }
        
      </CardContent>
    </Link>
  </Box>
)

export default ChannelCard