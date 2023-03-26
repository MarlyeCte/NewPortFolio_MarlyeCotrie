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

    // ----------Section Competence---------- DEBUT ----------  //

    // $('h4.competClickDown').click(function () {
    //     $('.competChevronOne').slideToggle();
    // });

    $('h4.boxOneClick').click(function () {
        $('.competChevronOne').slideToggle();
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
        $('.competChevronTwo').slideToggle();
        $('div.boxTwo').slideToggle(800);
        $('div.boxTwo').css({
            'margin-top': '40px',
            'margin': 'auto',
            'display': 'flex',
            'flex-wrap': 'wrap',
            'justify-content': 'center',
            'gap': '30px'
        });
    })

    // ----------Section Competence---------- FIN ----------  //

    // ----------Section Experience---------- DEBUT ----------  //

    $('h4#btnDescExpeOneClick').click(function () {
        $('article#descExpoOneInfo').slideToggle().css({
            'display': 'block',
            'background-color' : 'rgb(33 8 59 / 81%)',
            'border-radius' : '20px',
        });
    })

    $('h4#btnDescExpeTwoClick').click(function () {
        $('article#descExpoTwoInfo').slideToggle().css({
            'display': 'block',
            'background-color' : 'rgb(33 8 59 / 81%)',
            'border-radius' : '20px',
        });
    })

    $('h4#btnDescExpeThreeClick').click(function () {
        $('article#descExpoThreeInfo').slideToggle().css({
            'display': 'block',
            'background-color' : 'rgb(33 8 59 / 81%)',
            'border-radius' : '20px',
        });
    })

    // ----------Section Experience---------- FIN ----------  //

    // ----------Section Contact---------- DEBUT ----------  //

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
        $('.fa-arrow-right-from-bracket').css({
            'color': '#fff',
            'padding': '20px',
            'border-radius': '100%',
            'background-color': '#974ae9',
        })
    })

    $('article#contactBoxThree').hover(function () {
        $('#contactHoverThree').slideToggle().css({
            'display' : 'block',
        })
        $('.fa-arrow-right-from-bracket').css({
            'color': '#fff',
            'padding': '20px',
            'border-radius': '100%',
            'background-color': '#974ae9',
        })
    })

    $('article#contactBoxFour').hover(function () {
        $('#contactHoverFour').slideToggle().css({
            'display' : 'block',
        })
        $('.fa-arrow-right-from-bracket').css({
            'color': '#fff',
            'padding': '20px',
            'border-radius': '100%',
            'background-color': '#974ae9',
        })
    })

    // ----------Section Contact---------- FIN ----------  //

})