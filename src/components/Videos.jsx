import { Stack, Box } from "@mui/system";

import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, lightMode, direction }) => {
    if (!videos?.length) return 'Loading...';

    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='center' gap={2}>

            {videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} lightMode={lightMode} />}
                    {item.id.channelId && <ChannelCard channelDetails={item} />}
                </Box>
            ))}

        </Stack>
    )
}

export default Videos 