const express = require('express');
const router = express.Router();

var {authenticate} = require("../utils/auth");
let Board = require('../models/Board');

// public
// /api/board GET(보드리스트 조회)
router.get('/', (req, res, next) => {
    Board.find()
        .then(boards => {
            res.status(201).json(boards)
        })
        .catch(error =>{
            console.error(error);
            res.status(400);
            next(error);
        })
});

// /api/board/:boardId
router.get('/:boardId', (req, res, next) => {
    Board.findById(req.params.boardId)
        .then(board => {
            res.status(201).json(board);
        })
        .catch(error => {
            console.error(error);
            res.status(400);
            next(error);
        })
})


// 로그인 필요
// /api/board POST
router.post('/',authenticate, async(req, res, next) => {
    try {
        const {title, content} = req.body;
        const newBoard = await Board.create({
            title, 
            author : req.user._id,
            content
        });
        res.status(201).json(newBoard);
        
    } catch (error) {
        console.error(error);
        res.status(400);
        next(error);
    }

})

// /api/board/:boardId PUT
router.put('/:boardId',authenticate, async(req, res, next) => {
    try {
        const {title, content} = req.body;
        const updatedBoard = await Board.findByIdAndUpdate(req.params.boardId, {
            title, 
            content
        },
        {
            new : true
        });
        if(!updatedBoard) {
            return res.status(404).json({ error: '해당 게시물을 찾을 수 없습니다.' });
        }
        res.status(201).json(updatedBoard);
        
    } catch (error) {
        console.error(error);
        res.status(400);
        next(error);
    }

})

// /api/board/:boardId DELETE
router.delete('/:boardId', authenticate, async (req, res, next) => {
    try {
      const deletedBoard = await Board.findByIdAndDelete(req.params.boardId);

      if (!deletedBoard) {
        return res.status(404).json({ error: 'Board not found' });
      }

      res.json({ message: '해당 게시물이 삭제되었습니다.' });

    } catch (error) {
      console.error(error);
      res.status(400);
      next(error);
    }
  });


module.exports = router;