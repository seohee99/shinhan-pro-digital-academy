const express = require('express');
const router = express.Router();

let Board = require("../model/Board");

/**
 * /board           GET  - 게시글 리스트를 조회.
 * /board           POST - 게시글 자원을 생성해 줘
 * /board/:boardId  GET  - 게시글 자원 중에 boardId 자원을 가져와 줘
 * /board/:boardId  PUT  - 게시글자원중 boardId자원을 수정해 줘.
 * /board/:boardId  DELETE- 게시글자원중 boardId자원을 삭제해 줘.
 * 
 * /board/:boardId/comments GET 
 *    게시글 자원 중 boardId에 해당하는 게시글의 댓글 리스트를 가져와 줘.
 * 
 */

/**
 * / GET 요청: 게시글 리스트 조회
 */
router.get('/', (req, res, next)=>{
    // Board.find(function(err, data){
    //     // callback 형식 사용 X
    // })
    Board.find().then(data=>{
        // Promise방식으로 사용 O
        res.json(data);
    }).catch(err=>{
        next(err)
    }) 
});


router.get('/:id', (req,res,next) => {
    // console.log(req.params.id);
    Board.findById(req.params.id)
        .then(board => {
            // id로 방문할 때마다 방문한 board title을 세션에 배열로 저장 
            if (!req.session.boardPath){
                req.session.boardPath = [];
            }
            req.session.boardPath.push(board.title);
            
            res.json(board);
            // console.log(board);
            console.log("상세 페이지 Title ::" ,req.session.boardPath);
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