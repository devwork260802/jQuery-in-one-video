// jQuery ony works ween Document / Web Page is Ready
$(document).ready(function () {
    console.log($);

    // $('selector').action() // Method
    // $('p').click(function() {
    //     console.log("P Tag");
    //     $('p').hide();
    // });
    // $('p').click(function () {
    //     $(this).hide();
    // });

    // Selector in jQuery
    // Element Selector {p, html, ....}
    // Id Selector {#}
    // Class Selector {.}
    // Other Selector
    // $('p:first').click(function () {
    //     console.log('first');
    // });

    // Events in jQuery
    // Mouse - click, mouseenter, mouseleave
    // $('p:first').click(function () {
    //     console.log('first');
    // });
    // $('p').mouseleave(function () {
    //     console.log('leave', this);
    // });
    // $('p').mouseenter(function () {
    //     console.log('enter', this);
    // });

    // Keyboard - keypress, keydown, keyup
    // Form - submit, change, focus, blur
    // documnet / Window - load, resize, scroll, upload

    // on Method
    // $('p').on('click',function () {
    //     console.log('click', this);
    // });
    $('p').on(
        {
            click: function () {
                console.log('click', this);
            },
            mouseleave: function () {
                console.log('leave', this);
            }
        });

    // $('div').hide(2000,function () {
    //     console.log('done');
    // })
    // $('div').show(2000,function () {
    //     console.log('done');
    // })

    // $('button').click(function () {
    //     $('div').hide(2000,function () {
    //         console.log('done');
    //     })
    // })

    // $('button').click(function () {
    //     $('div').fadeOut(2000,function () {
    //         console.log('done');
    //     })
    // })
    // fadeIn fadeToggle fadeTo

    // $('p').slideToggle(2000,function () {
    //     console.log('done');
    // })
    // slideUp, slideDown

    // $('p').animate({
    //     opacity: 0.3,
    // }, 2000) // slow and fast

    // $('p').stop()

    // $('p').text("hello")
    // console.log($('body').html());
    // console.log($('p').val());
    // console.log($('p').empty());
    // console.log($('p').addClass('dev'));
    // console.log($('p').removeClass('dev'));
    // console.log($('p').css('background-color'));
    // console.log($('p').css('background-color','red'));

    // AJAX using jQuery
    // console.log($.get("https://code.jquery.com/jquery-3.7.1.min.js"));
    // console.log($.get("https://code.jquery.com/jquery-3.7.1.min.js",function (data, status) {
    //     // alert(data)
    //     alert(status)
    // }));
    // console.log($.post("https://code.jquery.com/jquery-3.7.1.min.js",{name: "Dev"},function (data, status) {
    //     alert(status);
    // }));
});


