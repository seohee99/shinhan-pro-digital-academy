var express = require('express');
var router = express.Router();

const User = require("../model/User");

// find All users
router.get('/', function(req, res, next) {
    User.find().then(users => {
        res.json(users);
    }).catch((error) => {
        console.error(error);
    })
});

// find user by id
router.get('/:userId',(req, res, next) => {
    User.findById(req.params.userId)
        .then(user => {
            res.json(user);
        }).catch((error) => {
            console.error(error);
        });
});
// find user by userid
router.get('/id/:userId',(req, res, next) => {
    User.find({userId : req.params.userId})
        .then(user => {
            res.json(user);
        }).catch((error) => {
            console.error(error);
        });
});
// insert user
router.post('/', (req, res, next) => {
    User.create(req.body)
    .then(user => {
        res.json(user);
    }).catch((error) => {
        console.error(error);
    });
})
// update user
router.put('/:userId',(req, res, next) => {
    User.findByIdAndUpdate(req.params.userId, {
        name:req.body.name ,
        userId:req.body.userId,
        password:req.body.password
    }).then(todo => {
        res.json(todo);
    }).catch((error) => {
        next(error);
    })
})

module.exports = router;
