const axios = require('axios');

const searchTracks = async (req, res, next) => {
    const { q } = req.query;
    try {
        const deezerRes = await axios.get(`https://api.deezer.com/search/track?q=${q}&limit=3`);
        res.json(deezerRes.data);
    } catch (err) {
        console.log('AN ERROR ', err);
    }
}

module.exports = {
    searchTracks
}