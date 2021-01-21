const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");


router.get('/',(req,res,next) => {
    fetch('https://byui-cse.github.io/cse341-course/lesson03/items.json')
    .then((response) => response.json())
    .then((jsObject) => {
        console.log("consoled info:", jsObject);
        res.render('pages/ta03', {
            items: jsObject,
            title: 'Store Products',
            path: '/ta03'
        });
    });
});

router.post('/searchedProducts',(req,res,next) => {
    fetch('https://byui-cse.github.io/cse341-course/lesson03/items.json')
    .then((response) => response.json())
    .then((jsObject) => {
        var empty = [];
        jsObject.forEach(object => {
            if(object.name.toLowerCase().includes(req.body.search.toLowerCase()) ) {
                empty.push(object);
            }
        });
        res.render('pages/ta03', {
            
            items: empty,
            title: 'Store Products',
            path: '/ta03'
        });
    });
});

module.exports = router;