$(document).ready(function(){
    //sliding divs enter animation
    $('#enter').on('click', function(){
        $('.left, .right').addClass('enter');
        $('.portfolio-name').addClass('enter-name');
        $('.portfolio-pic').addClass('enter-pic');
        $('#audio').trigger('play');
        setTimeout(function(){
            $('.space3d, .cube-nav-display').removeClass('hidden');
        },500);
    });
    //toggle enter and exit buttons
    $(".enter-button").on("click", function(){
        $('.enter-button').toggle();
    });
    //sliding divs exit animation
    $('#exit').on('click', function(){
        $('.left, .right').removeClass('enter');
        $('.portfolio-name').removeClass('enter-name');
        $('.portfolio-pic').removeClass('enter-pic');
        $('.space3d, .cube-nav-display').addClass('hidden');
        $('#audio').trigger('play');
    });
});
