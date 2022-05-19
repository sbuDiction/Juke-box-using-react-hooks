import SongCard from "../components/SongCard";

const Playlist = () => {
    const songs = localStorage.getItem('songs');
    const songsArray = JSON.parse(songs) || [];
    return (
        <>
            <h1>Playlist</h1>

            <div className={`container`}>
                <div className="row">
                    {songsArray.map((song, index) => (
                        <div key={index} className="col">
                            <SongCard key={index} song={song} id={index} isPlaylist={true} />
                        </div>
                    ))}
                </div>
            </div>
        </>

    )

}

export default Playlist;