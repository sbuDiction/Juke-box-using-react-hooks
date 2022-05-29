import axios from 'axios';
export const getTopSongs = (playlistId) => axios.get(`/api/v1/songs/top/${playlistId}`)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });