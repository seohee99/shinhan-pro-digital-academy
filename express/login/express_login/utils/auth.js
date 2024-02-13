const jwt = require("jsonwebtoken");

function createToken(visibleUser, maxAge = 60 * 60 * 51 * 3){
    return jwt.sign(visibleUser, process.env.JWT_SECRET || "MyJWT", {
        expiresIn : maxAge,
    });
}

function verifyToken(_token){
    if(!_token){
        return null;
    }
    const verifyToken = jwt.verify(_token, process.env.JWT_SECRET || "MyJWT");
    return verifyToken;
}

// authenticate(인증) 함수
function authenticate(req, res, next){
    let token = req.cookies.authToken;
    let headerToken = req.headers.authorization;
    if(!token && headerToken){
      token = headerToken.split(" ")[1]
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

module.exports = {createToken, verifyToken, authenticate};