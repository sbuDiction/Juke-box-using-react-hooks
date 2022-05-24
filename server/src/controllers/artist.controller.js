const axios = require('axios');

const searchArtist = async (req, res, next) => {
    const { q } = req.query;
    try {
        const deezerRes = await axios.get(`https://api.deezer.com/search/artist?q=${q}&limit=3`);
        res.json(deezerRes.data);
    } catch (err) {
        console.log('AN ERROR ', err);
    }
}

module.exports = {
    searchArtist
}