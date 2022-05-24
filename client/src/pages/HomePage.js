import { useEffect, useState } from "react";
import { getTopSongs } from "../api/TopSongsApi";
// import ChartAlbums from "../components/ChartAlbums";
import ChartTracks from "../components/ChartTracks";
import Loading from "../components/Loading/Loading";
import PopularGenres from "../components/PopularGenres/PopularGenres";

const HomePage = () => {
    const [songs, setSongs] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        getTopSongs(5964916564).then(res => {
            if (mounted) setSongs(res.tracks.data);
            setLoading(false)
        });
        return () => mounted = false;
    }, []);
    return (
        <>
            <div className="container-right">
                {/* <ChartAlbums /> */}

                <div className="home-divide">
                    <div className="popular-left">
                        <PopularGenres />
                    </div>
                    <div className="popular-right">
                        {isLoading ? <Loading /> : <ChartTracks songs={songs} />}
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomePage;