require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const boardRouter = require('./routes/board');
const birdRouter = require('./routes/bird');
const commentRouter = require('./routes/comment');


// DB Connection
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
mongoose.connect(DB_URL, { retryWrites: true, w: "majority"} )
        .then( () => console.log("Connected Successful"))
        .catch(err => console.log(err));


var app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bird',birdRouter);
app.use('/board',boardRouter);
app.use('/comment',commentRouter);

app.get('/sample', (req, res) => {
  res.send("get Sample");
});

app.post('/sample', (req, res) => {
  res.send("post Sample");
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err)
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({'error': 'error'});
  // res.render('error');

});

module.exports = app;
