const axios = require('axios');

const search = async (req, res, next) => {
    const { q } = req.query;
    try {
        const deezerRes = await axios.get(`https://api.deezer.com/search?q=${q}`);
        res.json(deezerRes.data);       
    } catch(err) {
        console.log('AN ERROR ', err);
    }
}

module.exports = {
    search
}