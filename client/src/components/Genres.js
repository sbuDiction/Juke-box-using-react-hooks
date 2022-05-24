import { useState, useEffect } from "react";
import { getTopSongs } from "../api/TopSongsApi";
import Loading from "./Loading/Loading";
import StandarCard from "./StandardCard/StandardCard";

const Genres = () => {
    const [songs, setSongs] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        getTopSongs(9663729122).then(res => {
            if (mounted) setSongs(res.tracks.data);
            setLoading(false);
        });
        return () => mounted = false;
    }, [songs, isLoading]);

    if (isLoading)
        return (
            <>
                <Loading />
            </>
        );
    return (
        <>
            <h1>Genres</h1>
            <div className="genres-section">
                {songs.map((genre) => (

                    <StandarCard
                        key={genre.id}
                        text={genre.artist.name}
                        pic={genre.album.cover_xl}
                        url={`/genre/${genre.id}`}
                    />

                ))}
            </div>
        </>
    );
}

export default Genres;