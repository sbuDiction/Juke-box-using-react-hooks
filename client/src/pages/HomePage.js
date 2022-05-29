import ChartTracks from "../components/ChartTracks";
import PopularGenres from "../components/PopularGenres/PopularGenres";

const HomePage = () => {
    return (
        <>
            <div className="container-right">
                {/* <ChartAlbums /> */}

                <div className="home-divide">
                    <div className="popular-left">
                        <PopularGenres />
                    </div>
                    <div className="popular-right">
                        <ChartTracks />
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomePage;