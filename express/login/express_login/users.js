var express = require("express");
const User = require("../models/User");
const { token } = require("morgan");
const { verify } = require("jsonwebtoken");
const { createToken, verifyToken } = require("../utils/auth");

var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/signup", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User.signUp(email, password);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(400);
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.login(email, password);
    const tokenMaxAge = 60 * 60 * 24 * 3;
    const token = createToken(user, tokenMaxAge);
    user.token = token;
    res.cookie("authToken", token, {
      httpOnly: true,
      maxAge: tokenMaxAge * 1000,
    });
    console.log(user);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(400);
    next(err);
  }
});

router.all("/logout", async (req, res, next) => {
  res.cookie("authToken", token, {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.json({message : "로그아웃 되었습니다"});

});

async function authenticate(req, res, next) {
  let token = req.cookies.authToken;
  let headerToken = req.headers.authorization;
  if (!token && headerToken) {
    token = headerToken.split(" ")[1];
  }

  const user = verifyToken(token);
  req.user = user;

  if (!user) {
    const error = new Error("Authorization Failed");
    error.status = 403;
    next(error);
  }
  next();
}

router.get("/protected", authenticate, async (req, res, next) => {
  console.log(req.user);
  res.json({ data: "민감한 데이터!!" });
});

module.exports = router;
