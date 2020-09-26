var scrollY = 0;
var distance = 100;
var speed = 24;

function autoScrollTo(el) {
	var currentY = window.pageYOffset; // determines the current position of the page
	var targetY = document.getElementById(el).offsetTop; // determines the location of the traget ID tag
	var bodyHeight = document.body.offsetHeight; // determines the height of the whole page
	var yPos = currentY + window.innerHeight; //determines where the target Y position is on the page
	var animator = setTimeout('autoScrollTo (\''+el+'\')',24); //calls the function autoScrollTo target element referencing the speed and setTimeout 
	
	if(yPos > bodyHeight) { //if target position is greater than height of page
		clearTimeout(animator); //stop animating
		
	} else { //otherwise
		if(currentY < targetY-distance) { //if current position is less than the target scroll position minus the distance (40)
			scrollY = currentY+distance; // scroll Y equals current position + 40 pixels
			window.scroll(0, scrollY); // window. scroll
		} else {
			clearTimeout (animator);
		}	
	}
}

function resetScroller(el){
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop;
	var animator = setTimeout('resetScroller(\''+el+'\')',speed);
	
	if(currentY > targetY){
		scrollY = currentY-distance;
		window.scroll(0, scrollY);
	} else {
		clearTimeout(animator);
	}
}
