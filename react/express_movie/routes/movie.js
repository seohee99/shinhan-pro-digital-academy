const express = require("express");
const router = express.Router();

let Movie = require("../model/Movie");

router.get("/", (req, res, next) => {
    Movie.find().then(data => {
        res.json(data);
    }).catch(err=>{
        next(err)
    })
})