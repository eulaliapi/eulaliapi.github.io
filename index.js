$(document).ready(function () {

    //toggles navbar w < 768px
    $('#button').click(function () {
        $('#navbar').toggleClass('hidden')
    });

    //toggles dark/light mode
    $('#moon').click(function () {
        $(this).toggleClass('active-btn');
        $('html').toggleClass('dark');
        $('.name').toggleClass('dark');
        $('.navRef').toggleClass('dark');
    });

    //toggles active state for name
    $('.homeRef').click(function () {
        $(this).addClass('active-name');
        $('.navRef').removeClass('active-bar');
    })

    //toggles active state for links
    $('.navRef').click(function () {
        $('.homeRef').removeClass('active-name');
        $(this).addClass('active-bar');
        $('.navRef').not(this).removeClass('active-bar');

    })

});