const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    content : {type : String, required : true},
    board : {type : mongoose.Types.ObjectId, required : true, ref : "Board"},
    author : {type : mongoose.Types.ObjectId, required:true, ref:"User"},
}, {
    timestamps: true
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;