const http = require('http');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const project = express();

router.use('/week01', require('./week01'));
router.use('/week02', require('./week02'));


module.exports = router;