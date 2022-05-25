import React from "react";
import { Link } from "react-router-dom";
import "./ArtistCard.css";

const ArtistCard = ({ artist }) => {
    return (
        <Link to={`/artist/${artist.id}`} className="card">
            <img className="blur" src={artist.picture_small} alt={artist.name} />
            <img className="pic" src={artist.picture_medium} alt={artist.name} />
            <span>{artist.name}</span>
        </Link>
    );
};

export default ArtistCard;