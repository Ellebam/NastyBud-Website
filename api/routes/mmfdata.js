var data = require('../public/images/MMF/data.json');
var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.json(data);
});

module.exports = router;
