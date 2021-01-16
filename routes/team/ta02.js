//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

const users = [];

router.get('/',(req, res, next) => {
    res.render('pages/ta02', {
        title: 'Team Activity 02', 
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        users: users
    });
});

router.post('/addUser',(req,res,next) => {
    users.push( req.body.name );
    res.redirect('/team/ta02');
})

router.post('/removeUser',(req,res,next) => {
    for (var i = 0; i < users.length; i++) {
        if(users[i] == req.body.removeName)
        users.splice(i, 1);
    }
    res.redirect('/team/ta02');
});

module.exports = router;