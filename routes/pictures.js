var express = require('express');
var router = express.Router();
var picturesDb = require('../db/picture');

router.get('/upload', function (req, res, next) {
  res.render('addPicture');
  router.post('/upload', function (req, res, next) {
    if (req.body) {
      console.log(req.body.filepath);
      picturesDb.addPicture(req.body.filepath, function (err) {
        if (err) {
          next(err);
        } else {
          res.send('Upload successful!');
        }
      });
    } else {
      next(new Error('Please provide a valid filepath.'));
    }
  });
});

module.exports = router;
