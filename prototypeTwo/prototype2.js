var itiernaryList=[];

/**
Temp, events of itinerary one
**/
var events =[];

var currentIti;

function jumpToIti(){
	

		var itinerary = document.getElementById("itineraryWindow");
		var selectItinerary= document.getElementById('selectIti');
		var text = selectItinerary.innerHTML;
		if(text=="Itinerary Show"){
			selectItinerary.innerHTML="Itinerary Hide";
			itinerary.style.display = "block";
		}
		else{
			selectItinerary.innerHTML="Itinerary Show";
			itinerary.style.display = "none";
		}
		
		console.log(itiernaryList.length);
		if(itiernaryList.length==0){
		var createNew = document.getElementById("createItiWindow");
		createNew.style.display = "block";
		console.log(createNew.style.display);
	    }
		else{
			showItineraries();
		}
	

	
}

/**
Temp, add a event to the first itinerary
**/
function addEventToItineraryOne(){
	var infoWindow = document.getElementById('infoWindow');
	console.log("info window "+infoWindow.innerHTML);
	events[events.length]=infoWindow.innerHTML;
    showEvents();
    this.parentNode.style.display="none";	
}

function showEvents(){
	var currIti = document.getElementById('itinerary1');
	var items=currIti.getElementsByClassName('itiItems')[0];
	var itemPrototype = document.getElementById('itemPrototype');
	for(var i =0; i <events.length; i++){
		console.log("event "+i+" is "+events[i]);
		var newItem = itemPrototype.cloneNode(true);
		newItem.innerHTML = events[i];
		newItem.style.display="block";
		newItem.style.top=i*100+"px";
		items.appendChild(newItem);
	}
}
//-----------------------------------------
function jumpToSearch(){
	var searchPage = document.getElementById('searchResultPage');
	searchPage.style.display="block";
}

function jumpToDetails(){
	var searchPage = document.getElementById('searchResultPage');
	searchPage.style.display="none";
	var infoWindow = document.getElementById('infoWindow');
	infoWindow.innerHTML =  this.innerHTML;
}

function openWindow(){
	var first = document.getElementById('window1');
	first.style.display = "block";
	
}

function openCreateWindow(){
	var createNew = document.getElementById("createItiWindow");
	createNew.style.display = "block";
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

function addItinerary(){
	var newItiName = document.getElementById('inputItiName');
	console.log(newItiName);
	itiernaryList[itiernaryList.length] = newItiName.value;
	newItiName.value ="";
	this.parentNode.style.display="none";
	showItineraries();
	
}

function switchIti(){
	var allIti = document.getElementsByClassName("itineraryItem");
	for(var i = 0;i<allIti.length;i++){
		allIti[i].style.zIndex=4;
		//allIti[i].getElementsByClassName('itiItems')[0].style.display="none"
	}
	this.parentNode.style.zIndex=6;
	//test
	this.parentNode.getElementsByClassName('itiItems')[0].style.display="block";
	console.log("switch to "+this.parentNode.id);
	showEvents();
}

function showItineraries(){
	console.log(itiernaryList);
	var itiPrototype = document.getElementById('itineraryPrototype');
	var itiWindow = document.getElementById('itineraryWindow');
	for(var i =0; i<itiernaryList.length;i++){
		var newiti = itiPrototype.cloneNode(true);
		newiti.id = "itinerary"+(i+1);
		console.log(newiti.id);
		newiti.style.display="block";
		var itiNameDiv=newiti.getElementsByClassName('itiName')[0];
		itiNameDiv.style.left=50*(i);
		itiNameDiv.innerHTML = itiernaryList[i];
		itiNameDiv.addEventListener('click',switchIti);
		newiti.getElementsByClassName('plusButton')[0].addEventListener('click',openCreateWindow);
		itiWindow.appendChild(newiti);
	}
	showEvents();
}

function init(){
	var selectItinerary= document.getElementById('selectIti');
	var addItiButton = document.getElementById('addItiButton');
	var confirmButtons = document.getElementsByClassName('confirmButton');
	var cancelButtons = document.getElementsByClassName('cancelButton');
    var searchButton = document.getElementById('search');
	var addItiConfirm = document.getElementById('addItiConfirm');
	var seatchItems = document.getElementsByClassName('searchItem');
	var addEventConfirm = document.getElementById('addToIti');
	/**
	for(var i =0; i <confirmButtons.length;i++ ){
		confirmButtons[i].addEventListener('click', jumpToNext);
	}
	**/
	for(var i =0; i <cancelButtons.length;i++ ){
		cancelButtons[i].addEventListener('click', cancelWindow);
	}
	
	for(var i =0; i <seatchItems.length;i++ ){
		seatchItems[i].addEventListener('click', jumpToDetails);
	}
	//temp
	addEventConfirm.addEventListener('click', addEventToItineraryOne);
	//---
	searchButton.addEventListener('click', jumpToSearch);
    addItiConfirm.addEventListener('click', addItinerary);
	selectItinerary.addEventListener('click', jumpToIti);
	addItiButton.addEventListener('click', openWindow);
	console.log("init complete");
}