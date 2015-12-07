
// Default number of pictures per row
var DEFAULT_ROW = 5;

// Store current state here
var grid;

var PictureGrid = function ($container) {
  grid = this;
  this.$elem = $container;
  this.row = DEFAULT_ROW;
};

// Toggle whether a photo is selected or not
var toggleSelected = function (e) {
  var $this = $(this);
  if ($this.hasClass('selected')) {
    $this.removeClass('selected');
  } else {
    $this.addClass('selected');
  }
}
 
// Gets the stored pictures from MongoDb and preps them to be rendered
var appendPic = function (src, id, tag) {
  var $pic = $('<img>');
  $pic.addClass('pot');
  $pic.attr('id', id);
  $pic.attr('src', src);
  $pic.attr('height', 100);
  $pic.attr('width', 100);
  $pic.attr('display', 'block');
  $pic.addClass(tag);
  // $pic.data('tag', tag);
  $pic.click(toggleSelected);
  grid.$elem.append($pic);
}

PictureGrid.prototype.populateGrid = function () {
  appendPic('pot1.jpg', 1, 'flower');
  appendPic('pot2.jpg', 2, 'cup');
}

// populate with images from mongodb

// add picture
PictureGrid.prototype.addPicture = function () {

}

// remove picture
PictureGrid.prototype.removePicture = function () {

}

// add tag
PictureGrid.prototype.addTag = function () {

}

// remove tag
PictureGrid.prototype.removeTag = function () {

}

PictureGrid.prototype.filterTag = function (tag) {
  if (tag === "") {
    console.log("Please enter a tag to filter by!");
  } else {
    // var dataTag = '[data-tag=' + tag + ']';
    // $withTag = $('.pot').filter(dataTag);
    // $noTag = $('.pot').not(dataTag);
    $withTag = $('.pot').filter('.' + tag);
    $noTag = $('.pot:not(.' + tag + ')');
    if ($withTag === undefined) {
      console.log("No pots with the tag " + tag);
      return;
    }
    if ($withTag.length > 0) {
      $withTag.show();
    }
    if ($noTag !== undefined && $noTag.length > 0) {
      $noTag.hide();
    }
  }
}

PictureGrid.prototype.removeFilters = function () {
  $('.pot').show();
}
// change number of pictures per row

