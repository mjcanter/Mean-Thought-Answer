var mongoose = require('mongoose');
var thought = mongoose.model('Thought');
var answer = mongoose.model('Answer');
module.exports = {
	index: function(req, res){
		var results = thought.find({}, function(badstuff, goodstuff){
			if(badstuff){
				res.json({thought: "Error", error: badstuff})
			}
			else{
				res.send(goodstuff)
			}
		})
	},
	create: function(req, res) {
		var new_thought = new thought();
	    new_thought.question = req.body.question;
	    new_thought.description = req.body.description;
	    console.log(new_thought)
	    new_thought.save(function(err){
	      if(err){
	        console.log("errors you have errors here");
	        return res.json(new_thought)
	      }
	      else{
	        return res.json(new_thought);
	      }
	    })
	},

	show: function(req,res){
		thought.findOne({_id: req.params.id}).populate('answers').exec(function(err, response){
  		 return res.json(response)     
	})
	},
	update: function(req,res){
		var this_thought = thought.update({_id:req.params.id}, {name: req.body.name, description: req.body.description}, function(err, response){
    	return res.json(response);
    })
	},

	destroy: function(req,res){
	   thought.remove({_id: req.params.id})
	   .then((data) => {
	   	return res.json(data)
    	})
		.catch((err)=>{
			res.json({thought: "error", error: err})
		})
	},
	addlike: function(req,res){
		var prev = answer.findOne({_id: req.params.id});
		answer.update({_id: req.params.id}, {like: prev.like + 1}, function(err, response){
			console.log(prev.like)
    	return res.json(response);
    })
	},
	answercreate: function(req,res){
		console.log(req.body)
	    thought.findOne({_id: req.params.id}, function(err, thought){
	    new_answer = new answer();
	    new_answer.text = req.body.text;
	    new_answer.like = 0;

	    new_answer._thought = req.params.id;
	    new_answer.save(function(err){
	      thought.answers.push(new_answer);
	      thought.save(function(err){
	      if(err){
	       console.log("errors you have errors");
	        res.json({thought: "error", error: err})
	      }
	      else{
	        return res.json(new_answer);
	      }
	      })
	    })
	  })
	}

}