$(function () {

    $('span.responNavClick').click(function () {
        $('article.navFixTopRespon').slideToggle();
        console.log('navRespon clicked');
    })

    $(window).scroll(function () {
        // $('nav.navChangeBg').css('background-color', 'yellow');
        if ($(window).scrollTop() >= 50) {
            // $('nav.navChangeBg').css('background-color', '#baaeff');
            $('nav.navChangeBg').css({'background-color': '#974ae9'});
            $('.changeColor').css({'color': '#fff'});
        }
        else {
            $('nav.navChangeBg').css({'background-color': 'transparent'});
            $('.changeColor').css({'color': 'rgb(105, 105, 105)'});
        }
    })

    // var isRotated = false;

    // $('h4.competClickDown').click(function () {
    //     $('.fa-chevron-down').slideToggle(800, function () {
    //         // Code to execute after animation completes
    //         if (isRotated) {
    //             $('.fa-chevron-down').css('transform', 'rotate(0deg)');
    //             isRotated = false;
    //         } else {
    //             $('.fa-chevron-down').css('transform', 'rotate(180deg)');
    //             isRotated = true;
    //         }
    //     });
    // });

    $('h4.competClickDown').click(function () {
        // $('.fa-chevron-down').slideToggle().css({
        //     'transform': 'rotate(180deg)',
        //     'color': 'red',
        //     'display': 'inline-block'
        // }).show();
        // $('.fa-chevron-down').css({
        //     'transform': 'rotate(180deg)',
        //     'color': 'red',
        //     // 'display': 'block'
        // })
        if ($('.fa-chevron-down').slideDown()) {
            $('.fa-chevron-down').css({
                'transform': 'rotate(180deg)',
                'display': 'inline-block',
            });
        }
        // else {
        //     $('.fa-chevron-down').css({
        //         'transform': 'rotate(0deg)',
        //         'color': 'blue',
        //     });
        // }
    });

    $('h4.boxOneClick').click(function () {
        $('div.boxOne').slideToggle(800);
        $('div.boxOne').css({
            'margin-top': '40px',
            'margin': 'auto',
            'width': '80%',
            'display': 'flex',
            'flex-wrap': 'wrap',
            'justify-content': 'center',
            'gap': '30px'
        });
    })

    $('h4.boxTwoClick').click(function () {
        $('div.boxTwo').slideToggle(800);
        $('div.boxTwo').css({
            'margin-top': '40px',
            'margin': 'auto',
            'width': '80%',
            'display': 'flex',
            'flex-wrap': 'wrap',
            'justify-content': 'center',
            'gap': '30px'
        });
    })

    $('h4#expeBoxOneClick').click(function () {
        $('#expeBoxOne').slideToggle().css({
            'display' : 'flex',
            'flex-direction': 'column',
            'gap': '10px',
        });
        $('img#imgExpeOne').slideToggle().css({
            'display' : 'flex',
        });
    })

    $('h4#expeBoxTwoClick').click(function () {
        $('#expeBoxTwo').slideToggle().css({
            'display' : 'flex',
            'flex-direction': 'column',
            'gap': '10px',
        });
        $('img#imgExpeTwo').slideToggle().css({
            'display' : 'block',
            'margin-bottom': '200px',
        });
    })

    $('h4#expeBoxThreeClick').click(function () {
        $('#expeBoxThree').slideToggle().css({
            'display' : 'flex',
            'flex-direction': 'column',
            'gap': '10px',
        });
        $('img#imgExpeThree').slideToggle().css({
            'display' : 'block',
        });
    })

    $('article#contactBoxOne').hover(function () {
        $('#contactHoverOne').slideToggle().css({
            'display' : 'block',
        })
        $('.fa-arrow-right-from-bracket').css({
            'color': '#fff',
            'padding': '20px',
            'border-radius': '100%',
            'background-color': '#974ae9',
        })
    })

    $('article#contactBoxTwo').hover(function () {
        $('#contactHoverTwo').slideToggle().css({
            'display' : 'block',
        })
    })

    $('article#contactBoxThree').hover(function () {
        $('#contactHoverThree').slideToggle().css({
            'display' : 'block',
        })
    })

    $('article#contactBoxFour').hover(function () {
        $('#contactHoverFour').slideToggle().css({
            'display' : 'block',
        })
    })

})