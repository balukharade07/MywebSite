$(document).ready(function() {

    $(".fa-bars").on("click", function() {
        $("nav ul").toggleClass("showing");

    });
    $(".link-1").on("click", function() {
        $("nav ul").toggleClass("showing");

    });

    $('.text1').hover(function() {
        $(this).text("Am Web Designer");
    }, function() {
        $(this).text("I am Balu Kharade");
    });

});

$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }

});


$(window).scroll(function() {
    $(".slideanim").each(function() {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide");
        }
    });
});





$(document).on('submit', '#userData', function() {
    event.preventDefault();
    var fname = $('#fname').val();
    var lname = $('#lname').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var comment = $('#comment').val();

    alert(comment);
});