// An alternative version of the Availablity Calendar. This is still a 'test'.
$(document).ready(function () {
    var isOpen = false;

    $('.ac-body .ac-day').click(function () {
        var number = $(this).children('.number').text();
        $('.ac-body .ac-info').text(number);

        if (isOpen === false) {
            open($(this), $(this).attr("data-day"));
        } else {
            if ($(this).hasClass('active')) {
                close();
            } else {
                open($(this), $(this).attr("data-day"));
                $('.ac-body .ac-day').removeClass('active');
                $(this).addClass('active');
            }
        }
    });

    function open(selector, day) {
        day = parseInt(day);
        var days = [day - 2, day - 1, day, day + 1, day + 2, day + 3, day + 4]

        var test = "";
        for(var x in days){
            if(x != 0){test+=", "}
            test += "[data-day='" + days[x] + "']";
        }

        $('.ac-body .ac-day').hide();
        $(test).show();
        $('.ac-body .ac-info').show();
        $(selector).addClass('active');
        isOpen = true;
    }

    function close() {
        $('.ac-body .ac-day').show();
        $('.ac-body .ac-info').hide();
        $('.ac-body .ac-day').removeClass('active');
        isOpen = false;
    }

    $('.ac-head').click(function () {
        close();
    });
});
