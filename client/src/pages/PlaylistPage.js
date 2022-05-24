import SongCard from "../components/SongCard/SongCard";


const PlaylistPage = () => {
    const songs = localStorage.getItem('songs');
    const songsArray = JSON.parse(songs) || [];
    return (
        <>
            <h1>Playlist</h1>
            {
                songsArray.map(song => (
                    <SongCard song={song} />
                ))
            }
        </>

    )

}

export default PlaylistPage;