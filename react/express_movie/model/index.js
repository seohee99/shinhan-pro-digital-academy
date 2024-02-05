require("dotenv").config();
const fs = require("fs").promises; // fs promises API 사용
const mongoose = require("mongoose");
const path = require('path');

// let Movie = require("./Movie");
// let Review = require("./Review");

// DB Connection
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
mongoose
  .connect(DB_URL, { retryWrites: true, w: "majority" })
  .then(() => console.log("Connected Successful"))
  .catch((err) => console.log(err));

// 영화 데이터 저장
fs.readFile("./data/movie-list.json", "utf8")
  .then(jsonString => {
    const movieData = JSON.parse(jsonString);
    return Promise.all(movieData.map(data => Movie.create(data)));
  })
  .then(() => console.log('Movie data saved successfully'))
  .catch(err => console.log("File read failed:", err));

/// 리뷰 데이터 저장
const commentsDir = './data/comments';

fs.readdir(commentsDir)
  .then(files => {
    return Promise.all(files.map(file => {
      return fs.readFile(path.join(commentsDir, file), 'utf8')
        .then(jsonString => {
          const reviewData = JSON.parse(jsonString);
          return Promise.all(reviewData.map(data => Review.create(data)));
        });
    }));
  })
  .then(() => console.log('Review data saved successfully'))
  .catch(err => console.log("Unable to scan directory:", err));
