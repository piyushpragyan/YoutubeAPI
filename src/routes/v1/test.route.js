const express = require('express');
const router = express.Router();


//This is the test route for checking the routing.
router.get('/',(req,res) => {
    res.send('Hey There')
})


module.exports = router;