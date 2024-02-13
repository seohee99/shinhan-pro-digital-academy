const express = require('express');
const router = express.Router();

var {authenticate} = require("../utils/auth");
let Board = require('../models/Board');
let Comment = require('../models/Comment');

// /api/comment/?boardId=:boardId&page=1&size=10 GET (코멘트 조회)
router.get('/:boardId', (req, res, next) => {
    Board.findById(req.params.boardId).then(board => {
        Comment.find()
            .then(comments => {
                res.status(201).json(comments)
            })
            .catch(error =>{
                console.error(error);
                res.status(400);
                next(error);
            })
    })
});


// 로그인 필요 (로그인 된 유저만 가능)
// /api/comment POST
router.post('/',authenticate, async(req, res, next) => {
    try {
        const {board, content} = req.body;
        const newComment = await Comment.create({
            board, 
            content,
            author : req.user._id,
        });
        res.status(201).json(newComment);
        
    } catch (error) {
        console.error(error);
        res.status(400);
        next(error);
    }
    
})

// /api/comment/:commentId PUT
router.put('/:commentId',authenticate, async(req, res, next) => {
    try {
        const {content} = req.body;
        const updatedComment = await Comment.findByIdAndUpdate(req.params.commentId, 
            {
                content
            },
            {
                new : true
            });
        if(!updatedBoard) {
            return res.status(404).json({ error: '해당 댓글을 찾을 수 없습니다.' });
        }
        res.status(201).json(updatedBoard);
        
    } catch (error) {
        console.error(error);
        res.status(400);
        next(error);
    }
    
})

// /api/comment/:commendId DELETE
router.delete('/:commentId', authenticate, async (req, res, next) => {
    try {
      const deletedComment = await Comment.findByIdAndDelete(req.params.commentId);

      if (!deletedComment) {
        return res.status(404).json({ error:  '해당 댓글을 찾을 수 없습니다.' });
      }

      res.json({ message: '해당 댓글이 삭제되었습니다.' });

    } catch (error) {
      console.error(error);
      res.status(400);
      next(error);
    }
  });


module.exports = router;