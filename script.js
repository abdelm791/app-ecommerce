$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'views/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
}) ;

// prints "hi" in the browser's dev tools console
console.log("hi");
