var mongo = require('./mongo');

module.exports = {
  addPicture: function (filePath, callback) {
    var picture = new mongo.Picture(filepath);
    picture.save(function (error) {
      callback(error);
    });
  },

  getPicture: function (_id, callback) {
    mongo.Picture.findById(_id, function (error, picture) {
      callback(error, picture);
    });
  },

  removePicture: function(_id, callback) {
    mongo.Picture.findByIdAndRemove(_id, function (error) {
      callback(error);
    });
  }
}
