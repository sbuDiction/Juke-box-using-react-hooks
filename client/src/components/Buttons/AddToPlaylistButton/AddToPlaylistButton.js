import './AddToPlaylistButton.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';

const AddToPlaylistButton = ({ track }) => {
    const [toggle, setToggle] = useState();
    const [tracks, setTracks] = useState([]);

    const handleAdd = () => {

        let localStore = localStorage.getItem('songs');
        if (!localStore) {
            localStorage.setItem('songs', JSON.stringify([track]));
        } else {
            let songsArray = JSON.parse(localStore);
            songsArray.push(track);
            localStorage.setItem('songs', JSON.stringify(songsArray));
        }
    }

    const fectPlaylist = () => {
        let tracks = localStorage.getItem('songs');
        let tracksArray = JSON.parse(tracks) || [];
        setTracks(tracksArray);
    }

    const removeTrack = (id) => {
        const trackIndex = tracks.indexOf()
    }

    // useEffect(() => {
    //     fectPlaylist();
    // }, [tracks]);



    // const handleToggle = () => {
    //     setToggle(!toggle);
    //     tracks.find(savedTrack => savedTrack.id === track.id) ?
    // }


    return (
        <>
            <div className='Track-Card'>
                <button className='add'>Add</button>
            </div>
        </>
    );
}

export default AddToPlaylistButton;