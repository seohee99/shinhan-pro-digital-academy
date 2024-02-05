const express = require('express');
const router = express.Router();

let Comment = require("../model/Comment");
let Board = require("../model/Board");

router.get('/', (req, res, next) => {
    Comment.find()
    .then(data => res.send(data));
});

router.get('/:id', (req, res, next) => {
    Comment.find({board : req.params.id})
        .then(comment => {
            res.json(comment);
        })
        .catch((error) => {
            console.error(error);
        });
});

router.post('/:boardId', (req, res, next) => {
    Board.findById(req.params.boardId).then(data =>   
        Comment.create({
            board : data._id,
            title : req.body.title,
            content : req.body.content,
            writer : req.body.writer || "Annonymous",
        })
            .then(comment => {
                res.json(comment);
            })
            .catch((error) => {
                console.error(error);
            })
    ); 
});

router.delete('/:commentId', (req, res, next) => {
    Comment.findById(req.params.commentId).then(data =>   
        Comment.deleteOne()
            .then(comment => {
                res.send(`${data._id}가 삭제되었습니다.`);
            })
            .catch((error) => {
                console.error(error);
            })
    ); 
})

// 65bc9717405f5c4ff5519f5e
router.put('/:commentId', (req, res, next) => {
    Comment.findById(req.params.commentId).then(data => {
        Comment.updateOne(data, {
            board : data._id,
            title : req.body.title || data.title,
            content : req.body.content || data.content,
            writer : req.body.writer || data.writer
        }).then(comment =>{
            res.json(comment)
        })
        .catch((error) => {
            console.error(error);
        })
    })
})

module.exports = router;