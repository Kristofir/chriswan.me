// Hide all the elements in the DOM that have a class of "box"
$('.box').hide();

// Make sure all the elements with a class of "clickme" are visible and bound
// with a click event to toggle the "box" state
$('.clickme').each(function() {
  $(this).show(0).on('click', function() {
    $(this).next('.box').slideToggle('fast', function() {
        $(this).prev().html($(this).is(':visible') ? 'Hide' : 'Show');
    });
  });
});
