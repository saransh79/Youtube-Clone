import { useState, useEffect } from "react"

// useParams is a function used to fetch parameters from an url
import { useParams } from "react-router-dom"
import { Box } from "@mui/system"

import Videos from "./Videos"
import ChannelCard from "./ChannelCard"
import { fetchFromAPI } from "../data/APIdata"

const ChannelDetail = ({ lightMode }) => {
  const [channelDetails, setChannelDetails] = useState(null)
  const [videos, setVideos] = useState([])
  const id = useParams().id;

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetails(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(data => setVideos(data?.items))
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div className="channel-background" style={{
          background: "url('https://www.teahub.io/photos/full/9-93322_youtube-channel-cover-background.jpg')" || "linear-gradient(to right, #b31217, #e52d27)"
        }} />
        <ChannelCard channelDetails={channelDetails} marginTop='-140px' lightMode={lightMode} />
      </Box>

      <center><Videos videos={videos} /></center>

    </Box>
  )
}

export default ChannelDetail