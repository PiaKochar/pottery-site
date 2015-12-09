// Default number of pictures per row
var DEFAULT_ROW = 5;

// Store current state here
var grid;

var PictureGrid = function ($container, numPots) {
  grid = this;
  this.$elem = $container;
  this.row = DEFAULT_ROW;
  this.numPots = numPots;
  this.selected = [];
};

var setSelected = function () {
  var selectedIds = "";
  if (grid.selected.length > 0) {
    selectedIds = selectedIds + grid.selected[0];
    for (var i = 1; i < grid.selected.length; i++) {
      selectedIds = selectedIds + " " + grid.selected[i];
    }
  }
  $('#selectedIds').val(selectedIds);
}

// Toggle whether a photo is selected or not
var toggleSelected = function (e) {
  var $this = $(this);
  if ($this.hasClass('selected')) {
    $this.removeClass('selected');
    $this.attr('style', 'border:5px solid white');
    var index = grid.selected.indexOf($this.attr('id'));
    grid.selected.splice(index, 1);
    setSelected();
  } else {
    $this.addClass('selected');
    $this.attr('style', 'border:5px solid black');
    grid.selected.push($this.attr('id'));
    setSelected();
  }
}
 
var appendPic = function (src, id, visible) {
  var $pic = $('<img>');
  $pic.addClass('pot');
  $pic.attr('id', id);
  $pic.attr('src', src);
  $pic.attr('height', 100);
  $pic.attr('width', 100);
  $pic.attr('display', 'block');
  $pic.attr('style', 'border:5px solid white');
  // $pic.addClass(tag);
  $pic.click(toggleSelected);
  grid.$elem.append($pic);
}

PictureGrid.prototype.populateGrid = function () {
  for (var i = 1; i <= this.numPots; i++) {
    var filePath = '/img/pot' + i + '.jpg';
    appendPic(filePath, i, true);
  }
  $('#1').addClass('flower');
  $('#9').addClass('flower');
  $('#28').addClass('flower');
  $('#54').addClass('totoro');
}

PictureGrid.prototype.filterGrid = function (ids) {
  for (var i = 1; i <= this.numPots; i++) {
    var filePath = '/img/pot' + i + '.jpg';
    var visible = ids.indexOf(i) != -1;
    appendPic(filePath, i, visible);
  }
}

PictureGrid.prototype.filterTag = function (tag) {
  if (tag === "") {
    console.log("Please enter a tag to filter by!");
  } else {
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

