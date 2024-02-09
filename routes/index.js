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

const messageColors = ['gray', 'blue', 'cyan'];
function getMessageColors() {
    const colors = [];
    for (let i = 0; i < messages.length; i++) {
        colors.push(
            messageColors[Math.floor(Math.random() * messageColors.length)]
        );
    }
    return colors;
}

router
    .route('/new')
    .get(function (req, res, next) {
        res.render('form');
    })
    .post(function (req, res, next) {
        const messageUser = req.body.messageUser;
        const messageText = req.body.messageText;
        messages.push({
            text: messageText,
            user: messageUser,
            added: new Date()
        });
        res.redirect('/');
    });

router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Mini Messageboard',
        messages,
        colors: getMessageColors()
    });
});

module.exports = router;
