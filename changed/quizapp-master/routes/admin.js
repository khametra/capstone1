
var express = require('express');
var router = express.Router();
const quiz = require('../models/quiz');


router.get('/quiz/:id', function(req, res, next) {
  quiz.find({id:req.params.id},{_id:0},function(err, quizdetail){

      console.log("control in get id  method ");
      if(err){
          res.send(err);
      }
     // res.send(quizdetail);
     console.log(quizdetail);
      res.json(quizdetail);
  });
})


// get All quiz detail
router.get('/quiz', function(req, res, next) {
  quiz.find({},{_id:0},function(err, quizdetail){

      console.log("control in get method ");
      if(err){
          res.send(err);
      }
     console.log(quizdetail);
      res.json(quizdetail);
  });
})

router.post('/addquiz', function(req,res,next){
 
 var newquestions=[{}];

  newquestions =req.body.questions.map((e)=>{
      
      var newoptions=[];
      newoptions=e.options.map((op)=>{

    let option={
          id:op.id,
          questionId:op.questionId,
          name:op.name,
          isAnswer:op.isAnswer,
          }
      return option;
      });

   let qs={
       id:e.id,
       name:e.name,
       questionTypeId:e.questionTypeId,
       options:newoptions,
       questiontype:e.questiontype
      }
    
     return qs; 
    });

    
 quiz.count({}, function(err, n){
      if(err)
      console.log("error in saving "+ err);
      else{
         var newquiz= new quiz({
         id:n+1,
         name:req.body.name,
         author:req.body.author,
         questions:newquestions
     });

 newquiz.save(function(err, quiz){
                 if(err){
                   res.send(err);
                   }
                  res.json(newquiz);
                 });
           }
  });


    //  var newquiz= new quiz({
    //      id:req.body.id,
    //      name:req.body.name,
    //      author:req.body.author,
    //      questions:newquestions
    //  });
     
    //  newquiz.save(function(err, quiz){
    //              if(err){
    //                res.send(err);
    //                }
    //               res.json(newquiz);
    //              });
});


router.delete('/deletequiz/:id', function(req, res,next){
    quiz.remove({id:req.params.id}, function(err,task){
   if(err){
        res.send(err);
    }
    console.log("quiz data deleted");
    res.json(task);
    });
});


module.exports=router;
