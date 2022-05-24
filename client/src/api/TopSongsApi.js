import axios from "axios";

export const getTopSongs = (playlistId) => axios.get('/api/v1/songs/top/5964916564')
    .then(response => response.data)
    .catch(error => {
        throw error;
    });