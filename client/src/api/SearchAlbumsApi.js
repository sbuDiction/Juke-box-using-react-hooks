import axios from "axios";

export const searchAlbums = (query) => axios.get(`/api/v1/search/album/?=q${query}`)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });