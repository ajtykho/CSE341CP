const http = require('http');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const project = express();

project.use(bodyParser.urlencoded({extended: false}));

router.get('/add-info',(req, res, next) => {
    res.render('pages/add-info', { 
        title: 'add your info', 
        path: '/week01' // For pug, EJS 
    });
});

router.post('/add-info', (req, res, next) => {
    res.render("pages/display-info", {
        title: "your info",
        path: "/week01",
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        number: req.body.number,
        address: req.body.address
    })
    console.log(req.body);
});


module.exports = router;