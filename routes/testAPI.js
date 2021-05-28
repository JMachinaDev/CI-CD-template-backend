let express = require('express');
let testAPIroute = express.Router();

testAPIroute.get('/', function (req, res, next) {
  res.send("API is working properly");
});

console.log('hello world');

module.exports = testAPIroute;