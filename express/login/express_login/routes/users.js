var express = require('express');
var router = express.Router();
var {token} = require("morgan");
var {createToken, verifyToken, authenticate} = require("../utils/auth");

const User = require("../models/User");

// http://localhost/users/
router.get('/', function(req, res, next) {
  User.find()
    .then(user => {
      res.json(user);
    })
    .catch(error => console.error(error));
});

router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => {
      res.json(user);
    })
    .catch((error) => {
      console.error(error);
    })
})

// http://localhost/users/signup
router.post('/signup', async (req, res, next) => {
  try {
    console.log(req.body);
    const {email, password, nickname} = req.body;
    const user = await User.signUp(email, password, nickname);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(400);
    next(error);
  }
})

// http://localhost/users/login
router.post('/login', async (req, res, next) => {
  try {
    const {email, password} = req.body;
    const user = await User.login(email, password);
    const tokenMaxAge = 60 * 60 * 24 * 3;
    const token = createToken(user, tokenMaxAge);
    // 로그인 하면 해당 유저에 대한 토큰을 생성해서 cookie에 담아 보냄 
    user.token = token;
    res.cookie("authToken", token, {
      httpOnly : true,
      maxAge : tokenMaxAge * 1000,
    });

    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(400);
    next(error);
  }
})
// http://localhost/users/logout => get/post 요청 상관없음 
router.all('/logout', async(req, res, next)=> {
  res.cookie("authToken", token,{
    httpOnly : true,
    expires : new Date(Date.now()),
  });
  res.json({message : "로그아웃 되었습니다."})
})



router.get("/protected", authenticate, async (req, res, next) => {
  console.log(req.user);
  res.json({ data: "민감한 데이터!!" });
});

module.exports =  router;
