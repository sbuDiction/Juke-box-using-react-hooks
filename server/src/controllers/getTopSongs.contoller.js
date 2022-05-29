const axios = require('axios');

const getTopSongs = async (req, res, next) => {
    const { id } = req.params;
    try {
        const deezerRes = await axios.get(`https://api.deezer.com/playlist/${id}`);
        res.json(deezerRes.data);
        console.log(id);
    } catch (err) {
        console.log('AN ERROR ', err);
    }
}

module.exports = {
    getTopSongs
}