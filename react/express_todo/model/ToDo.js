const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
    user : {
        type : mongoose.Types.ObjectId, 
        required : true,
        ref : "User"
    },
    content : {type:String, required : true},
    category : {type:String, default : ""},
    complete : {type:Boolean, default : false},
    createAt : {type:Date, default:Date.now},
});

const ToDo = mongoose.model("ToDo", ToDoSchema);
module.exports = ToDo;