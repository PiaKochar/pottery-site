var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var pictureGrid = require('../public/js/picture-grid');
var tagsDb = require('../db/tag');

router.get('/add', function (req, res, next) {
  res.render('index');
  router.post('/add', function (req, res, next) {
    if (req.body.tagName) {
      tagsDb.addTag(req.body.tagName, req.body.ids, function (err) {
        if (err) {
          next(err);
        } else {
          res.send('Tags added!');
          console.log('Tag ' + req.body.tagName + ' was added to ' + req.body.ids);
        }
      });
    } else {
      next(new Error('Please provide a tag.'));
    }
  });
});

router.get('/filtered', function (req, res, next) {
  res.render('index');
  router.post('/filtered', function (req, res, next) {
    if (req.body.filter) {
      tagsDb.findTag(req.body.filter, function (tag, err) {
        if (err) {
          next(err);
        } else {
          res.send({ids: tag[0].toObject().ids});
          console.log("Tags recieved from mongoose: " + tag[0].toObject().ids);
        }
      });
    } else {
      next(new Error('Please provide a tag.'));
    }
  });
});

module.exports = router;