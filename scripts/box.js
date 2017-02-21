$('.hide-content').hide();

$('.show-content').each(function() {
    $(this).show(0).on('click', function(e) {
        e.preventDefault();

        $(this).next('.hide-content').slideToggle('fast');
    });
});
