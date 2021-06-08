const express = require("express");
const router = express.Router();
const testRoute = require('./test.route');
const youtubeRoute = require('./youtube.route');



router.use('/test',testRoute);
router.use('/videos',youtubeRoute);
module.exports = router;