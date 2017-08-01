const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

module.exports = function (io) {
  // ...
  // route definitions, etc.
  // ...
    router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm: true } );
    });

    router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find( {name: name} );
    res.render( 'index', { tweets: list, showForm: true, username: name} );
    });

    router.get('/tweets/:id', function(req, res) {
    var id = +req.params.id;
    var list = tweetBank.find( {id: id} );
    res.render( 'index', { tweets: list } );
    });

    router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    const tweetobj = tweetBank.find({name, content: text})
    io.sockets.emit('newTweet', tweetobj[0]);
    res.redirect('/');
    });
// module.exports = router;
  return router;
};