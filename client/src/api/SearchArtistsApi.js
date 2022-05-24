import axios from "axios";

export const searchArtist = (query) => {
    console.log(query);
    return axios.get(`/api/v1/search/artist/?q=${query}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}