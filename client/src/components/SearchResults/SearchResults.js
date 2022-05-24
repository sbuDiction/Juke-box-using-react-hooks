import { Link } from "react-router-dom";
import ItemResult from "./ItemResults";
import './SearchResults.css';

const SearchResults = ({ artistsFound = [], albumsFound = [], songsFound = [] }) => {
    return (
        <>
            <div id="hint-container">
                <div>
                    <section>
                        <h3 className="title-section">Artists</h3>
                        {artistsFound.length > 0 ? (
                            artistsFound.map((artist) => (
                                <Link to={`/artist/${artist.id}`}>
                                    <ItemResult
                                        key={artist.id}
                                        text={artist.name}
                                        pic={artist.picture_small}
                                    />
                                </Link>
                            ))
                        ) : (
                            <div className="error">No Matches Were Found</div>
                        )}
                    </section>

                    <section>
                        <h3 className="title-section">Albums</h3>
                        {albumsFound.length > 0 ? (
                            albumsFound.map((album) => (
                                <Link to={`/album/${album.id}`}>
                                    <ItemResult
                                        key={album.title}
                                        text={album.title}
                                        pic={album.cover_small}
                                    />
                                </Link>
                            ))
                        ) : (
                            <div className="error">No Matches Were Found</div>
                        )}
                    </section>

                    <section>
                        <h3 className="title-section">Songs</h3>
                        {songsFound.length > 0 ? (
                            songsFound.map((track) => (
                                <Link to={`/album/${track.album.id}`}>
                                    <ItemResult
                                        key={track.id}
                                        text={track.title_short}
                                        pic={track.album.cover_small}
                                    />
                                </Link>
                            ))
                        ) : (
                            <div className="error">No Matches Were Found</div>
                        )}
                    </section>
                </div>
            </div>
        </>
    );
}

export default SearchResults;