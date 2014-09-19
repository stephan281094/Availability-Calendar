$(document).ready(function () {
    var isOpen = false;

    $('.ac-body .ac-week .ac-day').click(function () {
        var number = $(this).children('.number').text();
        $('.ac-body .ac-info').text(number);

        if (isOpen === false) {
            open($(this));
        } else {
            if ($(this).hasClass('active')) {
                close();
            } else {
                $('.ac-body .ac-week .ac-day').removeClass('active');
                $(this).addClass('active');
//                $('').$(this).attr('data-day');
            }
        }
    });

    function open(selector) {
        $('.ac-body .ac-week').not($(selector).parent('.ac-week')).slideUp(400);
        $('.ac-body .ac-info').slideDown(400);
        $(selector).addClass('active');
        isOpen = true;
    }

    function close() {
        $('.ac-body .ac-week').slideDown(400);
        $('.ac-body .ac-info').slideUp(400);
        $('.ac-body .ac-week .ac-day').removeClass('active');
        isOpen = false;
    }

    $('.ac-head').click(function () {
        close();
    });
});