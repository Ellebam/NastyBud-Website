var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.json(['tony', 'lisa', 'michael', 'ginger', 'oida']);
});

module.exports = router;
