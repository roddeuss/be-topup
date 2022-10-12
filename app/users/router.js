var express = require('express');
var router = express.Router();
const {viewSigin, actionSignin, actionLogout} = require('./controller') 

/* GET home page. */
router.get('/', viewSigin);
router.post('/', actionSignin);
router.get('/logout', actionLogout)

module.exports = router; 