const express = require('express');
const router = express.Router();

const books = [];
/* const authors = []
const sums = []
const urls = [] */

router.get('/',(req, res, next) => {
    res.render('pages/prove/prove02', {
        title: 'Prove 02', 
        path: '/prove02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        books: books
    });
});

router.post('/addBook',(req,res,next) => {
    books.push( {title: req.body.title, bookSum: req.body.bookSum, author: req.body.author, imageUrl: req.body.imageUrl} );
    console.log(books);
    res.render('pages/prove/display', {
        bookList: books,
        title: 'Your Books',
        path: '/prove02',
    });
})

router.post('/removeBook',(req,res,next) => {
    for (var i = 0; i < books.length; i++) {
        console.log(books[i].title, req.body.removeBook)
        if(books[i].title == req.body.removeBook)
        books.splice(i, 1);
    }
    res.render('pages/prove/display', {
        bookList: books,
        title: 'Your Books',
        path: '/prove02',
    });
});

module.exports = router;