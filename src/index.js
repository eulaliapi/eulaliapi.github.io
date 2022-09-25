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

    //toggles active state while scrolling page
    $(window).scroll(function () {
        if (this.scrollY < 460) {
            $('.homeRef').addClass('active-name');
            $('.navRef').removeClass('active-bar');
        } else if (this.scrollY > 460 && this.scrollY < 950) {

            $('.homeRef').removeClass('active-name');
            if ($('.navRef').eq(0).text() === 'Skills') {
                $('.navRef').eq(0).addClass('active-bar');
                $('.navRef').eq(1).removeClass('active-bar');
                $('.navRef').eq(2).removeClass('active-bar');
            }

        } else if (this.scrollY > 950 && this.scrollY < 1300) {

            $('.homeRef').removeClass('active-name');
            if ($('.navRef').eq(1).text() === 'Projects') {
                $('.navRef').eq(0).removeClass('active-bar');
                $('.navRef').eq(1).addClass('active-bar');
                $('.navRef').eq(2).removeClass('active-bar');
            }

        } else if (this.scrollY > 1300) {

            $('.homeRef').removeClass('active-name');
            if ($('.navRef').eq(2).text() === 'Contact me') {
                $('.navRef').eq(0).removeClass('active-bar');
                $('.navRef').eq(1).removeClass('active-bar');
                $('.navRef').eq(2).addClass('active-bar');
            }
        }

    });

});