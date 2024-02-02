const mongoose = require("mongoose");




const commentSchema = new mongoose.Schema({
    board : {type: mongoose.Types.ObjectId, required:true, ref: "Board"},
    title : {type: String, required : true},
    content : {type: String, required : true},
    writer : String,
    createdAt : {type:Date, default:Date.now},
})

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment 