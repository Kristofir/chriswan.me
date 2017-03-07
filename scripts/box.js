// Hide all the elements in the DOM that have a class of "box"
$('.collapsible').hide();

// Make sure all the elements with a class of "clickme" are visible and bound
// with a click event to toggle the "box" state
$('.expand').each(function() {
  $(this).show(0).on('click', function() {
    $(this).parent().next('.collapsible').slideToggle('fast', function() {
        $(this).prev().children('.expand').html($(this).is(':visible') ? 'Hide section' : 'Read more...');
    });
  });
});
