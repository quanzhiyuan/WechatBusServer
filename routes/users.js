const express = require('express');
const router = express.Router();
let User = require('../models/Users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', function (req, res, next) {
 next()
})
router.post('/signup', function (req, res, next) {
  if (req.params.name) {

  } else {

  }
  next()
})
module.exports = router;
