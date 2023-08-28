import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { CheckCircle, ThumbUp } from "@mui/icons-material"
import { Box, Stack } from "@mui/system"

import Videos from "./Videos"
import { fetchFromAPI } from "../data/APIdata"
import { Typography } from "@mui/material"


const VideoDetail = ({ lightMode }) => {
  const { id } = useParams()

  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then(data => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items))
  }, [id])

  if (!videoDetail?.snippet) return 'Loading...'

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail

  return (
    <Box minHeight='95vh'>
      <Stack>
        <Box flex={1}>
          <Box sx={{ position: 'sticky', top: '76px'}}>

            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className='react-player' />

            <Typography color={lightMode ? '#000' : '#fff'} variant="h5" fontWeight='bold' p={1} >
              {title}
            </Typography>
            
            <Stack direction='row' justifyContent='space-between' sx={{ color: 'gray'}} py={1} px={1} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} sx={{color: 'gray'}}>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant="body1" sx={{ opacity: 0.8 }} >

                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8 }} >

                <ThumbUp sx={{ fontSize: '16px', mr: '5px' }} />
                  {parseInt(likeCount).toLocaleString()} 
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box px={2} py={1} >
        <Stack><Videos videos={videos} /></Stack>
          
        </Box>
      </Stack>

    </Box>
  )
}

export default VideoDetail