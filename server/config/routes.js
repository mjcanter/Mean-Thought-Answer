var thoughts = require('./../controllers/thoughts.js');
const path = require('path')

module.exports = function(app) {
  app.get('/thoughts', function(req, res){
    thoughts.index(req, res);
  }),

  app.post('/new', function(req,res){
    return thoughts.create(req,res)
  }),

  app.get('/show/:id', function(req, res) {
    thoughts.show(req,res)
  }),
  app.post('/updatethought/:id', function(req,res){
    return thoughts.update(req,res);
  }),
  app.get('/destroy/:id', function(req, res) {
    return thoughts.destroy(req,res)
  }),
  app.get('/answer/:id1/destroy/:id2', function(req, res) {
    return thoughts.answerdestroy(req,res)
  }),
  app.post('/newanswer/:id', function(req,res){
    return thoughts.answercreate(req,res)
  }),
  app.get('/likeanswer/:id', function(req,res){
    console.log('ROUTES')
    return thoughts.addlike(req,res)
  }),
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/dist/index.html'));
  })
}
