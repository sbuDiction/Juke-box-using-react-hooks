import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { searchAlbums } from "../api/SearchAlbumsApi";
// import { onSearch } from '../api/SearchApi';
import { searchArtist } from "../api/SearchArtistsApi";
import { searchSongs } from "../api/SearchSongSApi";
import SearchResults from "./SearchResults/SearchResults";
import _ from "lodash";


const SearchBar = () => {
    const [tracks, setTracks] = useState([]);
    const [showResults, setResults] = useState(false);
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);

    const handleSearch = () => {
    }

    const handleOnChange = e => {
        let inputVal = e.target.value;
        if (inputVal !== '') {
            // setResults(true);
            console.log('search running..');
            console.log(showResults);
            // onSearch(inputVal).then(res => {
            //     setDeezerRes(res.data);
            //     setResults(true);
            // });

            searchArtist(inputVal).then(res => {
                setArtists(res.data);
                console.log(res.data);
                setResults(true);

                // setResults(true);
            });

            searchAlbums(inputVal).then(res => {
                setAlbums(res.data);
                setResults(true);

                console.log(res.data);
            });

            searchSongs(inputVal).then(res => {
                setTracks(res.data);
                setResults(true);

                console.log(res.data);
            });

        }
        setResults(false);
    }

    if (!showResults)
        return (
            <>
                <div className="search-container">
                    <form onSubmit={handleSearch}>
                        <FontAwesomeIcon className="icon-search" icon={faSearch} />
                        <input
                            type="text"
                            placeholder="Search Artist, Albums, Songs"
                            onChange={_.debounce(handleOnChange, 1000)}
                        />
                    </form>
                </div>
            </>
        );
    return (
        <>
            <div className="search-container">
                <form onSubmit={handleSearch}>
                    <FontAwesomeIcon className="icon-search" icon={faSearch} />
                    <input
                        type="text"
                        placeholder="Search Artist, Albums, Songs"
                        onChange={_.debounce(handleOnChange, 1000)}
                    />
                    <SearchResults
                        artistsFound={artists}
                        albumsFound={albums}
                        songsFound={tracks}
                    />
                </form>
            </div>
        </>
    );


}

export default SearchBar;