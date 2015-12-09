var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/piaspottery', function (err) {
  if (err && err.message == 'connect ECONNREFUSED') {
    console.log('Error connecting to mongodb database: %s.\n', err.message);
    process.exit(0);
  } else if (err) {
    throw err;
  } else {
    console.log('DB successfully connected!');
  }
});

var db = mongoose.connection;

var pictureSchema = new mongoose.Schema({
  image: {data: Buffer, contentType: String}
});

var tagSchema = new mongoose.Schema({
  tag: String,
  ids: [String]
});

var Picture = mongoose.model('Picture', pictureSchema);
var Tag = mongoose.model('Tag', tagSchema);

module.exports = {
  Picture: Picture,
  Tag: Tag,
  mongoose: mongoose,
  db: db.collection('Picture')
}
