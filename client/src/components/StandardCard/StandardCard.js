import "./StandardCard.css";
import { Link } from "react-router-dom";

const StandarCard = ({ text, pic, url }) => {
    return (
        <>
            <Link to={url}>
                <div className="card-container">
                    <img src={pic} alt={text} />
                    <div className="name-genre-center">{text}</div>
                </div>
            </Link>
        </>
    );
}

export default StandarCard;