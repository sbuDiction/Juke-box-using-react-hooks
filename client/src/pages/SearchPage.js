import { useContext } from "react";
import { searchResultsContext } from "../contextProviders/SearchResultsContext";
import SongCard from "../components/SongCard";


const SearchPage = ({ isHidden }) => {
    const results = useContext(searchResultsContext);
    return (
        <div className={`container ${isHidden}`}>
            <div className="row">
                {results.map((song, index) => (
                    <div key={index} className="col">
                        <SongCard key={index} song={song} id={index} isPlaylist={false} />
                    </div>
                ))}
            </div>
        </div>
    )

}

export default SearchPage;