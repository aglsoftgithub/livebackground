// ids for background to show and hide
var show = 1;
var hide = 2;
var current_bg = 1;
var current_img = 1;

// max images to display
var DEFAULT_MAX_IMG = 7;

// animations default time
var DEFAULT_ANIMATION_TIME = 7000;
var DEFAULT_TRANSITION_DELAY = 1200;

// Default Pictures Folder
var DEFAULT_IMG_FOLDER = "assets/img";

// Variable used to control the animation process (start, stop)
var TIMER = -1;

// program variables
var lb_img_folder;
var lb_max_img;
var lb_animation_time;
var lb_transition_time;

/**
 * used to configure the live background animation
 * 
 * @param {string} folder The folder of pictures to load
 * @param {number} max_img The max number of pictures to load
 * @param {number} animation_time The time (ms) used to switch between two pictures
 * @param {number} transition_time The time (ms) used for the switch animation 
 */
function config(img_folder=null, max_img=null, animation_time=null, transition_time=null){
	(img_folder == null) ? lb_img_folder = DEFAULT_IMG_FOLDER : lb_img_folder = img_folder;

	console.log(lb_img_folder);
}

/**
 * launches the live background animation
 */
function livebackground(){
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
	TIMER = setTimeout(start_live_bg, lb_animation_time);
}

/**
 * stops the live background animation
 * 
 * You can use it for apps with settings 
 */
function stop_live_bg(){
	clearTimeout(TIMER);
}
