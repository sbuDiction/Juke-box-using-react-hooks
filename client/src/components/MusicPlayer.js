import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css';
import { useState } from 'react';

const MusicPlayer = ({ song }) => {
    // const [audioInstance, setAudioInstance] = useState(null);
    return (
        <>
            {/* <audio controls>
                <source src={song.preview}></source>
            </audio> */}
            <ReactJkMusicPlayer
                // getAudioInstance={(instance) => {
                //     // setAudioInstance(instance);
                //     console.log(instance);
                // }}
            />
        </>
    )
}

export default MusicPlayer;