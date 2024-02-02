const express = require('express');
const router = express.Router();

let Board = require("../model/Board");


router.get('/', (req,res,next) => {
    Board.find().then(data=>res.send("Seohee's Board"));
});

router.get('/:id', (req,res,next) => {
    console.log(req.params.id);
    Board.findById(req.params.id)
        .then(board => {
            res.json(board);
            console.log(board)
        })
        .catch((error) => {
            console.error(error);
        });
});

router.post('/', (req,res,next) => {
    Board.create(req.body)
    .then(board => {
        res.json(board);   
    })
    .catch((error) => {
        console.error(error);
    });
});

module.exports = router;