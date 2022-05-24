import axios from "axios";
// 9663729122 discover
// 5964916564 top songs
export const getTopSongs = (playlistId) => axios.get(`/api/v1/songs/top/${playlistId}`)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });