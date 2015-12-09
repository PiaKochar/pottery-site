$(document).ready(function () {
  var $pictureGrid = $('#picture-grid');
  var grid = new PictureGrid($pictureGrid, 64);
  grid.populateGrid();
  $('#filter').click(function () {
  	grid.filterTag($('#tag').val());
    // $.post('/filtered', $('#tag').val(), function (data) {
    //   console.log("ids posted: " + data.ids);
    // }, {ids: []});
  });
  $('#unfilter').click(function () {
  	grid.removeFilters();
  });
  var $addPic = $('#add-pic');
  $addPic.click(function () {
  	console.log('Picture added!');
  });
});