const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.send("Birds Homepage");
})
router.get('/about', (req,res,next) => {
    res.send("Birds About Homepage");
})

module.exports = router;