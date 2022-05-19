const express = require('express');
const router = express.Router();
const searchController = require('../controllers/search.controller');

router.get('/api/v1/search/q?', searchController.search);

module.exports = router;