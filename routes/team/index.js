const http = require('http');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const project = express();

router.use('/ta01', require('./ta01'))
.use('/ta02', require('./ta02'))
.use('/ta03', require('./ta03'))
.use('/ta04', require('./ta04'));


module.exports = router;