const express = require('express');

const router = express.Router();
router.get("/:paramId", (req,res,next) => {
    console.log(req.session);
    
    if (!req.session.viewCount) {
        req.session.viewCount = 0;
    }
    req.session.viewCount++;

    if (!req.session.path){
        req.session.path = [];
    }
    console.log(req.params.paramId);
    req.session.path.push(req.params.paramId);
    
    console.log("View Count ::",req.session.viewCount);
    res.send("session test");
});

module.exports = router;