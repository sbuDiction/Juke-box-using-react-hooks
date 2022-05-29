import './MusicPlayer.css';
import { useEffect, useState } from 'react';

const MusicPlayer = ({ tracks }) => {
    let currentTrack = 0;
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio] = useState(new Audio(tracks[index].preview));

    const togglePlayer = () => {
        setIsPlaying(!isPlaying);
        audio.src = tracks[index].preview;
    };

    const toggleNext = () => {
        setIndex(index === tracks.length - 1 ? index : index + 1);
    };

    const toggleBack = () => {
        setIndex(index <= 0 ? 0 : index - 1);
    }


    useEffect(() => {
        document.getElementById('album-art').style.background = `#fff url(${tracks[index].album.cover_xl}) center/cover no-repeat`;
        document.getElementById('vinyl').style.backgroundImage = `url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/83141/vinyl.png"), url(${tracks[index].album.cover_xl})`;
        isPlaying ? audio.play() : audio.pause();
        audio.addEventListener('ended', () => setIsPlaying(false));

    });


    return (
        <>
            <div className="container-right">

                <div className="home-divide">
                    <div className="popular-left">
                        <div className={`music-player-container ${isPlaying ? 'is-playing' : ''}`}>

                            <div className="music-player">
                                <div className="player-content-container">
                                    <h1 className="artist-name">{tracks[index].artist.name}</h1>
                                    <h2 className="album-title">{tracks[index].album.title}</h2>
                                    <h3 className="song-title">{tracks[index].title_short}</h3>
                                    <div className="music-player-controls">
                                        <div className="control-back" onClick={toggleBack}></div>
                                        <div className="control-play" onClick={togglePlayer}></div>
                                        <div className="control-forwards" onClick={toggleNext}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="album">
                                <div className="album-art" id='album-art'></div>
                                <div className="vinyl" id='vinyl'></div>
                            </div>
                        </div>
                    </div>
                    <div className="popular-right">
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicPlayer;