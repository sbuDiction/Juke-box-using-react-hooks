import './MusicPlayer.css';
import { useEffect, useState } from 'react';

const MusicPlayer = ({ song }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const play = () => setIsPlaying(!isPlaying);

    useEffect(() => {
        document.getElementById('album-art').style.background = `#fff url(${song.album.cover_xl}) center/cover no-repeat`;
        document.getElementById('vinyl').style.backgroundImage = `url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/83141/vinyl.png"), url(${song.album.cover_xl})`;
    })

    console.log(song);

    return (
        <>



            <div className="container-right">

                <div className="home-divide">
                    <div className="popular-left">
                        <div className={`music-player-container ${isPlaying ? 'is-playing' : ''}`}>

                            <div className="music-player">
                                <div className="player-content-container">
                                    <h1 className="artist-name">{song.artist.name}</h1>
                                    <h2 className="album-title">{song.album.title}</h2>
                                    <h3 className="song-title">{song.title_short}</h3>
                                    <div className="music-player-controls">
                                        <div className="control-back"></div>
                                        <div className="control-play" onClick={play}></div>
                                        <div className="control-forwards"></div>
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