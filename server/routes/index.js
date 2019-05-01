var express = require('express');
var router = express.Router();
const db = require('../db')

router.get('/categories', function(req, res, next) {
  'SELECT c1.id, c1.name, c1.slug, c2.name as parent_Name, c2.id as parent_Id
  FROM categories c1
  LEFT JOIN categories c2 ON c1.parent_id = c2.id'
});

module.exports = router;
