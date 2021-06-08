const express = require('express');
const router = express.Router();
const youtubeController = require('../../controllers/youtube.controller');



//Two API endpoints for the search and the get calls.
router.get("/",youtubeController.getVideo);
router.get("/search",youtubeController.searchVideo);

module.exports = router;