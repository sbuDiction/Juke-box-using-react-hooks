import ArtistCard from '../ArtistCard/ArtistCard';
import Genres from '../Genres';
import SongCard from '../SongCard/SongCard';
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