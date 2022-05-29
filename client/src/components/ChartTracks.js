import SongCard from "./SongCard/SongCard";
import { useState, useEffect } from "react";
import Loading from "./Loading/Loading";
import { getTopSongs } from "../api/TopSongsApi";

const ChartTracks = () => {
    const [songs, setSongs] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        getTopSongs(5964916564).then(res => {
            if (mounted) setSongs(res.tracks.data);
            setLoading(false);
        });
        return () => {
            mounted = false;
        }
    }, []);


    return (
        <>
            <h1>Top Songs</h1>
            {isLoading ? <Loading />
                :
                <section className="top-songs-container">
                    {songs.slice(0, 10).map((track) => (
                        <SongCard song={track} key={track.id} />
                    ))}
                </section>
            }

        </>
    );
}

export default ChartTracks;