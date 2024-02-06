require("dotenv").config();
const mongoose = require("mongoose");
var express = require('express');
var router = express.Router();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
mongoose.connect(DB_URL, { retryWrites: true, w: "majority"} )
        .then( () => console.log("Connected Successful"))
        .catch(err => console.log(err));


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
});

module.exports = router;
