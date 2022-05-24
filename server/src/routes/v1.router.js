const express = require('express');
const getTopSongs = require('../controllers/getTopSongs.contoller');
const router = express.Router();
const searchController = require('../controllers/search.controller');

router.get('/api/v1/search/q?', searchController.search);
router.get('/api/v1/songs/top/:id?', getTopSongs.getTopSongs);

module.exports = router;