var mongo = require('./mongo');

module.exports = {
  findTag: function (tagName, callback) {
    mongo.Tag.find({tag: tagName}, function (error, tag) {
      callback(tag, error);
    });
  },
}