$(document).ready(function(){
    //sliding divs enter animation
    $('#enter').on('click', function(){
        $('.left').addClass('enter-left');
        $('.right').addClass('enter-right');
        $('.enter-button').addClass('button-enter');
        $('.portfolio-name').addClass('enter-name');
        $('.portfolio-pic').addClass('enter-pic');
        $('#audio').trigger('play');
        setTimeout(function(){
            $('.space3d, .cube-nav-display').removeClass('hidden');
            //$('input').removeClass('hidden');
        },1000);
    });
    //adding noise to radio button click
    $('.woosh').on('click', function(){
        $('#woosh-sound').trigger('play');
        console.log('woosh');
    });
    //toggle enter and exit buttons
    $(".enter-button").on("click", function(){
        $('.enter-button').toggle();
    });
    //sliding divs exit animation
    $('#exit').on('click', function(){
        $('.left').removeClass('enter-left');
        $('.right').removeClass('enter-right');
        $('.enter-button').removeClass('button-enter');
        $('.portfolio-name').removeClass('enter-name');
        $('.portfolio-pic').removeClass('enter-pic');
        $('.space3d, .cube-nav-display').addClass('hidden');
        //$('input').addClass('hidden');
        $('#audio').trigger('play');
    });
});
