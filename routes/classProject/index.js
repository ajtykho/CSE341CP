const http = require('http');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const project = express();

router.use('admin', require('./admin'));
router.use('shop', require('./shop'));


module.exports = router;