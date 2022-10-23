/*****************************************************************
* Project Name: Live Background - v1.0.0
* Git URL: https://github.com/aglsoftgithub/livebackground
* Author: Adrien Guy Lagrange
* Site URL: https://bit.ly/3jzb5VN
* License: MIT
******************************************************************/

// ids for background to show and hide
var show = 1;
var hide = 2;
var current_bg = 1;
var current_img = 1;

// max images to display
var DEFAULT_MAX_IMG = 7;

// animations default time (ms)
var DEFAULT_ANIMATION_TIME = 7000;
var DEFAULT_TRANSITION_TIME = 1200;

// Default Pictures Folder
var DEFAULT_IMG_FOLDER = "assets/img";

// Default Pictures Brightness (value between 0 and 1)
var DEFAULT_BRIGHTNESS = 0.3;

// Variable used to control the animation process (start, stop)
var TIMER = -1;

// program variables
var lb_img_folder;
var lb_max_img;
var lb_animation_time;
var lb_transition_time;
var lb_brightness;

/**
 * used to configure the live background animation
 * 
 * @param {String} img_folder 			The folder of pictures to load
 * @param {Integer} max_img 			The max number of pictures to load
 * @param {Integer} animation_time 		The time (ms) used to switch between two pictures
 * @param {Integer} transition_time 	The time (ms) used for the switch animation 
 * @param {Float} brightness 			The opacity of pictures to display (value between 0 and 1)
 */
function config(img_folder=null, max_img=null, animation_time=null, transition_time=null, brightness=null){
	(img_folder == null) 		? lb_img_folder = DEFAULT_IMG_FOLDER : lb_img_folder = img_folder;
	(max_img == null) 			? lb_max_img = DEFAULT_MAX_IMG : lb_max_img = max_img;
	(animation_time == null) 	? lb_animation_time = DEFAULT_ANIMATION_TIME : lb_animation_time = animation_time;
	(transition_time == null) 	? lb_transition_time = DEFAULT_TRANSITION_TIME : lb_transition_time = transition_time;
	(brightness == null) 		? lb_brightness = DEFAULT_BRIGHTNESS : lb_brightness = brightness;
}

/**
 * launches the live background animation
 */
function livebackground(){
	// set mirror opacity
	$("#mirror").css("opacity", (1-parseFloat(lb_brightness)));

	// hide active background dive
	$("#background"+hide).fadeOut(lb_transition_time);

	// change background image on the next background div
	$("#background"+show).css("background", "url('"+lb_img_folder+"/bg-0"+current_img+".jpg') no-repeat center center fixed");
	$("#background"+show).css("-webkit-background-size", "cover");
	$("#background"+show).css("-moz-background-size", "cover");
	$("#background"+show).css("-o-background-size", "cover");
	$("#background"+show).css("background-size", "cover");

	// and then display it
	$("#background"+show).fadeIn(lb_transition_time);

	// change image id for the next background 
	if(current_img < lb_max_img)
		current_img++;
	else
		current_img = 1;
	
	// switch background div according to which must
	// be set active or not
	if(current_bg == 1){
		show = 2;
		hide = 1;
		current_bg = 2;
	}else{
		show = 1;
		hide = 2;
		current_bg = 1;
	}

	// repeat the animation through time
	TIMER = setTimeout(livebackground, lb_animation_time);
}

/**
 * stops the live background animation
 * 
 * You can use it for apps with settings 
 */
function stop_livebackground(){
	clearTimeout(TIMER);
}
