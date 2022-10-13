$(document).ready(function () {
    //toggles dark/light mode
    $('#moon').click(function () {
        $(this).toggleClass('active-btn');
        $('html').toggleClass('dark');
        $('.name').toggleClass('dark');
        $('.navRef').toggleClass('dark');
    });
});