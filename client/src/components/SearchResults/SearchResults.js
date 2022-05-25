import { Link } from "react-router-dom";
import ArtistCard from "../ArtistCard/ArtistCard";
import Genres from "../Genres";
import SongCard from "../SongCard/SongCard";
import StandarCard from "../StandardCard/StandardCard";
import ItemResult from "./ItemResults";
import './SearchResults.css';

const SearchResults = ({ artistsFound = [], albumsFound = [], songsFound = [], resultsFound = [] }) => {

    const displaySearchResults = () => {
        return (
            <>
                <h1>Top results</h1>
                <section className="top-songs-container">
                    {
                        resultsFound.map(track => (
                            <SongCard key={track.id} song={track} />
                        ))
                    }
                </section>
                <div className="container-right">
                    <h1>Artists</h1>
                    <div className="featured-artists">
                        {
                            artistsFound.map(artist => (
                                // <StandarCard
                                //     text={artist.artist.name}
                                //     pic={artist.artist.picture_medium}
                                //     key={artist.id}
                                //     url={`/artist/${artist.artist.id}`}
                                // />
                                <ArtistCard artist={artist.artist} key={artist.id} />
                            ))
                        }
                    </div>
                </div>


            </>
        );
    }

    const displayDiscover = () => {
        return (
            <>
                <Genres />
            </>
        );
    }

    return (
        resultsFound.length > 0 ? displaySearchResults() : displayDiscover()
    );
}

export default SearchResults;