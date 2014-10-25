$(document).ready(function () {
    $.ajax({
        url: 'data.json',
        dataType: 'json',
        success: function(data){
            var template = $('#calendar-template').html();
            var calendarData = Mustache.to_html(template, data);
            $('#calendar').html(calendarData);
            availabilityCalendar();
        },
        data: {},
        async: false
    });
});

function availabilityCalendar(){
    var isOpen = false;

    $('.ac-body .ac-week .ac-day').click(function () {

        if (isOpen === false) {
            open($(this));
        } else {
            if ($(this).hasClass('active')) {
                close();
            } else {
                $('.ac-body .ac-week .ac-day').removeClass('active');
                $(this).addClass('active');
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

    $('.ac-head .ac-date').click(function () {
        close();
    });
}
