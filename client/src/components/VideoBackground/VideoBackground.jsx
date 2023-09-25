import React from 'react' 
import './VideoBackground.css' 
import video from '../../assets/video.mp4' 

const VideoBackground = () => {
    return(
        <div className='main' >
            <video src = {video} autoPlay loop muted/>
        </div>
    );
}

export default VideoBackground ;