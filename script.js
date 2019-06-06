$(function() {

    var anim_id;

    //saving dom objects to variables
    var container = $('#container');
    var car = $('#car');
    var car_1 = $('#car_1');
    var car_2 = $('#car_2');
    var car_3 = $('#car_3');
    var line_1 = $('#line_1');
    var line_2 = $('#line_2');
    var line_3 = $('#line_3');
    var restart_div = $('#restart_div');
    var restart_btn = $('#restart');
    var score = $('#score');

    //saving some initial setup
    var container_left = parseInt(container.css('left'));
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var car_width = parseInt(car.width());
    var car_height = parseInt(car.height());

    // Variables declarations

    var game_over = false;

    var score_counter = 1;

    var speed = 2;
    var line_speed = 5;

    var move_right = false;
    var move_left = false;
    var move_up = false;
    var move_down = false;

    /* Game code starts here */

    jQuery(document).on('keydown', function(e) {
        if(game_over === false) {
            var key = e.keyCode;
            if(key === 37 && move_left === false){
                move_left = requestAnimationFrame(left);
            }
        }
    });

    jQuery(document).on('keyup', function(e){
        if(game_over === false){
            var key = e.keyCode;
            if(key === 37){
                cancelAnimationFrame(move_left);
                move_left = false;
            }
        }
    });

    function left(){
        if(game_over === false){
            car.css('left', parseInt(car.css('left')) - 5);
            move_left = requestAnimationFrame(left);
        }
    };



    /* Game code ends here */

});