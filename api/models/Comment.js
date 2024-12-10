import mongoose from "mongoose";
const schema =  new mongoose.Schema({
    author:{type:String,required:true},
    title:{type:String},
    postedAt:{type:Date,required:true},
    body:{type:String,required:true},
    parentId: {type:mongoose.ObjectId,required:false},
    rootId: {type:mongoose.ObjectId,required:false},
    community:{type:String,required:true},
});
const Comment = mongoose.model('Comment', schema);

export default Comment;