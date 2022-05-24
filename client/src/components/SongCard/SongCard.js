import AddToPlaylistButton from '../Buttons/AddToPlaylistButton/AddToPlaylistButton';
import PlayButton from '../Buttons/PlayButton/PlayButton';
import './SongCard.css';

const SongCard = ({ song, isPlaylist }) => {

    return (
        <>
            <div className="container-song">
                <div className="cover-container">
                    <img src={song.album.cover_small} alt={song.title} />
                </div>
                <div className="info-container">
                    <span>{song.title_short}</span>
                    <div className="contributors">
                        <p key={song.artist.id} className="track-artist">
                            {song.artist.name}
                        </p>
                    </div>
                </div>
                {/* <p className="duration"></p> */}
                {isPlaylist && <PlayButton url={song.preview} />}
                {!isPlaylist && <AddToPlaylistButton track={song} />}
            </div>
        </>
    )

}

export default SongCard;