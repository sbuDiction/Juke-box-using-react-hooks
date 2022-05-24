import MusicPlayer from "../components/MusicPlayer";
import SongCard from "../components/SongCard";

const Playlist = () => {
    const songs = localStorage.getItem('songs');
    const songsArray = JSON.parse(songs) || [];
    return (
        <>
            <h1>Playlist</h1>
            <hr></hr>
            <MusicPlayer  />
            {/* <div className={`container`}>
                <div className="row">
                    {songsArray.map((song, index) => (
                        <div key={index} className="col">
                            <SongCard key={index} song={song} id={index} isPlaylist />
                        </div>
                    ))}
                </div>
            </div> */}
        </>

    )

}

export default Playlist;