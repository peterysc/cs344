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

function jumpToCreateItinerary(){
	this.parentNode.style.display="none";
	var window4 = document.getElementById('window4');
	window4.style.display = "block";

}

function jumpToAddedSuccessfully(){
	this.parentNode.style.display="none";
	var addedSuccessFully = document.getElementById('window3');
	window3.style.display = "block";
}

function init(){
	var selectMain = document.getElementById('selectMain');
	var selectItinerary= document.getElementById('selectIti');
	var addItiButton = document.getElementById('addItiButton');
	var confirmButtons = document.getElementsByClassName('confirmButton');
	var confirmButtons2 = document.getElementsByClassName('confirmButton2');
	var cancelButtons = document.getElementsByClassName('cancelButton');
	var okayButtons = document.getElementsByClassName('okayButton');
	var addToExistingButtons = document.getElementsByClassName('addToExisting');
	var createNewItineraryButtons = document.getElementsByClassName('createNewItinerary');

	for(var i =0; i <addToExistingButtons.length;i++ ){
		addToExistingButtons[i].addEventListener('click', jumpToNext);
	}
	for(var i =0; i <createNewItineraryButtons.length;i++ ){
		createNewItineraryButtons[i].addEventListener('click', jumpToCreateItinerary);
	}
	for(var i =0; i <confirmButtons.length;i++ ){
		confirmButtons[i].addEventListener('click', jumpToNext);
	}
	for(var i =0; i <confirmButtons2.length;i++ ){
		confirmButtons2[i].addEventListener('click', jumpToAddedSuccessfully);
	}
	for(var i =0; i <cancelButtons.length;i++ ){
		cancelButtons[i].addEventListener('click', cancelWindow);
	}
	for(var i =0; i <okayButtons.length;i++ ){
		okayButtons[i].addEventListener('click', cancelWindow);
	}

	selectMain.addEventListener('click', jumpToMain);
	selectItinerary.addEventListener('click', jumpToIti);
	addItiButton.addEventListener('click', openWindow);
	console.log("init complete");
}