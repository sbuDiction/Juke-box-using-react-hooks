import SongCard from "./SongCard/SongCard";

const ChartTracks = ({ songs }) => {
    return (
        <>
            <h1>Top Songs</h1>
            <section className="top-songs-container">
                {songs.slice(0, 6).map((track) => (
                    <SongCard song={track} key={track.id} />
                ))}
            </section>
        </>
    );
}

export default ChartTracks;