import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { searchAlbums } from "../api/SearchAlbumsApi";
// import { onSearch } from '../api/SearchApi';
import { searchArtist } from "../api/SearchArtistsApi";
import { searchSongs } from "../api/SearchSongSApi";
import { onSearch } from '../api/SearchApi';
import SearchResults from "./SearchResults/SearchResults";
import _ from "lodash";


const SearchBar = () => {
    const [tracks, setTracks] = useState([]);
    const [showResults, setResults] = useState(false);
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [deezerRes, setDeezerRes] = useState([]);

    const handleSearch = () => {
    }

    const handleOnChange = e => {
        let inputVal = e.target.value;
        if (inputVal !== '') {
            onSearch(inputVal).then(res => {
                setDeezerRes(res.data);
                setArtists(res.data)
                setResults(true);
                console.log(res.data);
            });

        }
        setResults(false);
    }

    // if (!showResults)
    return (
        <>
            <div className="search-container">
                <form onSubmit={handleSearch}>
                    <FontAwesomeIcon className="icon-search" icon={faSearch} />
                    <input
                        type="text"
                        placeholder="Search Artist, Albums, Songs"
                        onChange={_.debounce(handleOnChange, 1000)}
                        autoFocus
                    />
                </form>
            </div>

            <SearchResults
                resultsFound={deezerRes}
                artistsFound={artists}
            />
        </>
    );
    // return (
    //     <>
    //         <div className="search-container">
    //             <form onSubmit={handleSearch}>
    //                 <FontAwesomeIcon className="icon-search" icon={faSearch} />
    //                 <input
    //                     type="text"
    //                     placeholder="Search Artist, Albums, Songs"
    //                     onChange={_.debounce(handleOnChange, 1000)}
    //                 />
    //                 <SearchResults
    //                     artistsFound={artists}
    //                     albumsFound={albums}
    //                     songsFound={tracks}
    //                 />
    //             </form>
    //         </div>
    //     </>
    // );


}

export default SearchBar;