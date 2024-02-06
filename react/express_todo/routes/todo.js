var express = require('express');
var router = express.Router();

const ToDo = require("../model/ToDo");
const User = require("../model/User");

// find All ToDos 
router.get('/', function(req, res, next) {
    ToDo.find().then(ToDos => {
        res.json(ToDos);
    }).catch((error) => {
        next(error);
    })
});

// find All ToDos by userId
router.get('/:userId/todolist', function(req, res, next) {
    ToDo.find({user : req.params.userId}).then(ToDos => {
        res.json(ToDos);
    }).catch((error) => {
        next(error);
    })
});

// find ToDo by ToDoId
router.get('/:todoId',(req, res, next) => {
    ToDo.findById(req.params.todoId)
        .then(ToDo => {
            res.json(ToDo);
        }).catch((error) => {
            next(error);
        });
});

// insert ToDo
router.post('/:userId', (req, res, next) => {
    User.findById(req.params.userId).then(user => {
        ToDo.create({
            user : user._id,
            content : req.body.content,
            category : req.body.category,
            complete : req.body.complete
        })
        .then(ToDo => {
            res.json(ToDo);
        }).catch((error) => {
            next(error);
        });
    })
})

// update ToDo :: content, category, complete etc ...
router.put('/:todoId',(req, res, next) => {
    ToDo.findByIdAndUpdate(req.params.todoId, {
        content : req.body.content,
        category: req.body.category,
        complete:req.body.complete
    }).then(todo => {
        res.json(todo);
    }).catch((error) => {
        next(error);
    })
})

// delete ToDo
router.delete('/:todoId', (req, res, next) => {
    ToDo.findByIdAndDelete(req.params.todoId).then(
        res.send(`${req.params.todoId}가 삭제되었습니다`)
    )
})



module.exports = router;
