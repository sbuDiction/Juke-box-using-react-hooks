const express = require('express');
const  searchAlbums  = require('../controllers/albums.controller');
const  searchArtist  = require('../controllers/artist.controller');
const getTopSongs = require('../controllers/getTopSongs.contoller');
const router = express.Router();
const searchController = require('../controllers/search.controller');
const  searchTracks  = require('../controllers/tracks.controller');

router.get('/api/v1/search/q?', searchController.search);
router.get('/api/v1/songs/top/:id?', getTopSongs.getTopSongs);
router.get('/api/v1/search/album/q?', searchAlbums.searchAlbums);
router.get('/api/v1/search/artist/q?', searchArtist.searchArtist);
router.get('/api/v1/search/track/q?', searchTracks.searchTracks);

module.exports = router;