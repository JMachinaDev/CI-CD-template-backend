let express = require('express');
let testAPIroute = express.Router();

testAPIroute.get('/', function (req, res, next) {
  res.send("API is working properly");
});

module.exports = testAPIroute;