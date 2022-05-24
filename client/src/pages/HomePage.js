import { useEffect, useState } from "react";
import { getTopSongs } from "../api/TopSongsApi";
import ChartAlbums from "../components/ChartAlbums";
import ChartTracks from "../components/ChartTracks";
import PopularGenres from "../components/PopularGenres/PopularGenres";

const HomePage = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        let mounted = true;
        getTopSongs().then(res => {
            console.log(res)
            if (mounted) setSongs(res.tracks.data);
        });
        return () => mounted = false;
    }, []);

    console.log(songs);

    return (
        <>
            <div className="container-right">
                {/* <ChartAlbums /> */}

                <div className="home-divide">
                    <div className="popular-left">
                        <PopularGenres />
                    </div>
                    <div className="popular-right">
                        {/* <ChartTracks /> */}
                        <ChartTracks songs={songs} />
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomePage;