var mongo = require('./mongo');

module.exports = {
  findTag: function (tagName, callback) {
    mongo.Tag.find({tag: tagName}, function (error, tag) {
      callback(tag, error);
    });
  },

  addTag: function (tagName, ids, callback) {
    var idsArray = ids.split(" ");
    mongo.Tag.find({tag: tagName}, function (error, tags) {
      if (tags.length === 0) {
        var tag = new mongo.Tag({tag: tagName, ids: idsArray});
        tag.save(function (error) {
          callback(error);
        });
      } else {
        var tag = tags[0];
        var oldIds = tag.ids;
        idsArray.forEach(function (id) {
          console.log("in loop " + id);
          if (oldIds.indexOf(id) == -1) {
            oldIds.push(id);
          }
        });
        tag.update({id: oldIds}, function (err, raw) {
          callback(err);
        });
      }
    });
  }
}