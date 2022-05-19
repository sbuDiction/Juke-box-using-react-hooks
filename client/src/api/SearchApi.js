import axios from "axios";

export const onSearch = (searchString) => {
    return axios.get(`/api/v1/search/?q=${searchString}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}