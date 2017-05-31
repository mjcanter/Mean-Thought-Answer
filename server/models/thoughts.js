var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ThoughtSchema = new mongoose.Schema({
  question: {type: String, required:true, minlength: 10},
  description: {type: String},
  answers: [{type: Schema.Types.ObjectId, ref:'Answer'}]
},{timestamps: true})

var AnswerSchema = new mongoose.Schema({
  text: {type: String, required:true, minlength: 10},
  support: {type: String},
  like: {type: Number},
  _thought :{type:Schema.Types.ObjectId, ref:'Thought'}
},{timestamps: true})

mongoose.model("Thought", ThoughtSchema);
mongoose.model("Answer", AnswerSchema);
