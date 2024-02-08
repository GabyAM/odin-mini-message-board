const express = require('express');
const router = express.Router();

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date()
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date()
    }
];

router
    .route('/new')
    .get(function (req, res, next) {
        res.render('form');
    })
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Mini Messageboard', messages });
});

module.exports = router;
