const express = require('express');
const router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello, World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.post('/new', function(req, res, next) {
  const formContent = req.body;

  messages.push({text: formContent.messageText, user: formContent.userName, added: new Date})
  res.redirect("/");

});

module.exports = router;
