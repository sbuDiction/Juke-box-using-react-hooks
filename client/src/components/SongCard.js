import { Card } from 'react-bootstrap';
import AddToPlayListButton from './AddToPlayListButton';
import MusicPlayer from './MusicPlayer';


const SongCard = ({ song, id, isPlaylist }) => {

    return (

        <>
            < Card id={id} style={{ width: '18rem' }
            }>

                <Card.Img variant="top" src={song.artist.picture_medium} />
                <Card.Body>
                    <Card.Title>{song.title}</Card.Title>
                    {!isPlaylist && <AddToPlayListButton song={song} />}

                    {isPlaylist && < MusicPlayer song={song} />}
                </Card.Body>
            </Card >
        </>
    )

}

export default SongCard;