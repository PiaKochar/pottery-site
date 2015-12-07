$(document).ready(function () {
  var $pictureGrid = $('#picture-grid');
  var grid = new PictureGrid($pictureGrid);
  grid.populateGrid();
  $('#filter').click(function () {
  	grid.filterTag($('#tag').val());
  });
  $('#unfilter').click(function () {
  	grid.removeFilters();
  })
  var $addPic = $('#add-pic');
  $addPic.on('click', function () {
  	console.log('Picture added!');
  });
});