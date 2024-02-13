const mongoose = require('mongoose');

const BoardSchema2 = new mongoose.Schema({
    title : {type : String, required : true},
    author : {type : mongoose.Types.ObjectId, required:true, ref:"User"},
    content : {type : String, required : true},
},{
    timestamps : true
});

const BoardSchema = new mongoose.Schema({
    title : {type : String, required : true},
    author : {type : mongoose.Types.ObjectId, required:true, ref:"User"},
    content : {type : String, required : true}
  }, {
    timestamps: true
  });
  

const Board = mongoose.model("Board", BoardSchema);
module.exports = Board;