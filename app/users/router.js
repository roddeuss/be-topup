var express = require('express');
var router = express.Router();
const {viewSigin} = require('./controller') 

/* GET home page. */
router.get('/', viewSigin);

module.exports = router; 