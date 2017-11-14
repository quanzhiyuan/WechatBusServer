const express = require('express');
const router = express.Router();
let User = require('../models/User')
const code = require('../controllers/code')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', function (req, res, next) {
 next()
})
router.post('/signup', function (req, res, next) {
  // if (req.body.name) {
 let user = {
   name : req.body.name
 }
 User.create(user).then(() => {
    res.send(code.success)
  }).catch(next)
})
module.exports = router;
