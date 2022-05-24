import axios from "axios";

export const searchSongs = (query) => axios.get(`/api/v1/search/track/?=q${query}`)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });