function jumpToMain(){
	console.log("clicked main");
	var mainPage = document.getElementById('mainPage');
	var itineraryPage = document.getElementById('itineraryPage');
	mainPage.style.display = "block";
	itineraryPage.style.display = "none";
}

function jumpToIti(){
	console.log("clicked itinerary");
	var mainPage = document.getElementById('mainPage');
	var itineraryPage = document.getElementById('itineraryPage');
	mainPage.style.display = "none";
	itineraryPage.style.display = "block";
	
}

function openWindow(){
	var first = document.getElementById('window1');
	first.style.display = "block";
	
}

function cancelWindow(){
	this.parentNode.style.display="none";
}

function jumpToNext(){
	this.parentNode.style.display="none";
	var next = this.parentNode.nextSibling;
	console.log(next.nextSibling);
	if(next){
	next.nextSibling.style.display = "block";
	}
}


function init(){
	var selectMain = document.getElementById('selectMain');
	var selectItinerary= document.getElementById('selectIti');
	var addItiButton = document.getElementById('addItiButton');
	var confirmButtons = document.getElementsByClassName('confirmButton');
	var cancelButtons = document.getElementsByClassName('cancelButton');

	
	for(var i =0; i <confirmButtons.length;i++ ){
		confirmButtons[i].addEventListener('click', jumpToNext);
	}
	for(var i =0; i <cancelButtons.length;i++ ){
		cancelButtons[i].addEventListener('click', cancelWindow);
	}

	selectMain.addEventListener('click', jumpToMain);
	selectItinerary.addEventListener('click', jumpToIti);
	addItiButton.addEventListener('click', openWindow);
	console.log("init complete");
}