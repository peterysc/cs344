var itiernaryList=[];

var friends = ['Robyn','Peter','Leon','Samson'];

var groups = ['Date Night',"Robyn's B-Day","Adios Chenyang","Samson is back!"];
/**
Temp, events of itinerary one
**/
var events =[];


var currentIti="";

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

function jumpToCreateIti(){
	openCreateWindow();
	document.getElementById("window1").style.display="none";
}

/**
Temp, add a event to the first itinerary
**/
function addEventToItinerary(){
	var infoWindow = document.getElementById('infoWindow');
	var itiSelection = document.getElementById('itiSelection');
	var selectedIti = itiSelection.options[itiSelection.selectedIndex].text;
    //console.log("curIti is "+currentIti);
	if(itiSelection.selectedIndex!=0){
	for(var i =0; i< itiernaryList.length;i++){
		if(itiernaryList[i].name == selectedIti){
			console.log("add success!");
			itiernaryList[i].events.push(infoWindow.innerHTML);
		}
	}
	}
	else{
		alert("Please select an itinerary!");
	}
    showEvents();
    this.parentNode.style.display="none";	
}
//-----------------------------------------

function linkGroup(){
	var groupSelection = document.getElementById('selectGroup');
	if(groupSelection.selectedIndex!=0){
	for(var i =0; i< itiernaryList.length;i++){
		if(itiernaryList[i].name == currentIti){
			itiernaryList[i].group = groupSelection.options[groupSelection.selectedIndex].text;
			console.log("group selected is: "+itiernaryList[i].group);
		}
	}
	}
	else{
		alert("Please select a group!");
	}
	this.parentNode.style.display="none";
	showItineraries();
	
}

function showEvents(){
	var currItiId = 'itinerary1';
	var currEvents = [];
	for(var i =0; i< itiernaryList.length;i++){
		if(itiernaryList[i].name == currentIti){
			currItiId = 'itinerary'+(i+1);
			currEvents = itiernaryList[i].events;
		}
	}
	
	var currIti = document.getElementById(currItiId);
	var items=currIti.getElementsByClassName('itiItems')[0];
	var itemPrototype = document.getElementById('itemPrototype');
	console.log("events are "+currEvents);
	for(var i =0; i <currEvents.length; i++){
		console.log("event "+i+" is "+currEvents[i]);
		var newItem = itemPrototype.cloneNode(true);
		newItem.innerHTML = currEvents[i];
		newItem.style.display="block";
		newItem.style.top=i*100+"px";
		items.appendChild(newItem);
	}
}
//-----------------------------------------
function jumpToSearch(){
	var groupPage = document.getElementById('memberPage');
	var searchPage = document.getElementById('searchResultPage');
	var mainPage = document.getElementById('mainPage');
	var homePage = document.getElementById('homePage');
	
	homePage.style.display="none";
	searchPage.style.display="block";
	//mainPage.style.display="none";
	groupPage.style.display="none";
}

function jumpToDetails(){
	var groupPage = document.getElementById('memberPage');
	var searchPage = document.getElementById('searchResultPage');
	var mainPage = document.getElementById('mainPage');
	var homePage = document.getElementById('homePage');
	
	homePage.style.display="none";
	searchPage.style.display="none";
	//mainPage.style.display="block";
	groupPage.style.display="none";
	var infoWindow = document.getElementById('infoWindow');
	infoWindow.innerHTML =  this.innerHTML;
}

function jumpToGroupPage(){
	var groupPage = document.getElementById('memberPage');
	var searchPage = document.getElementById('searchResultPage');
	var mainPage = document.getElementById('mainPage');
	var homePage = document.getElementById('homePage');
	
	homePage.style.display="none";
	searchPage.style.display="none";
	//mainPage.style.display="none";
	groupPage.style.display="block";
}

function openWindow(){
	var first = document.getElementById('window1');
	first.style.display = "block";
	loadItiSelection();
}

function loadItiSelection(){
	var itiSelection = document.getElementById('itiSelection');
	while(itiSelection.length>1){
		itiSelection.remove(itiSelection.length-1);
	}
	for(var i =0; i< itiernaryList.length;i++){
			var itiOption = document.createElement("option");
			itiOption.innerHTML=itiernaryList[i].name;
			itiSelection.appendChild(itiOption);
	}
}

function openCreateWindow(){	
    var itinerary = document.getElementById("itineraryWindow");
	var createNew = document.getElementById("createItiWindow");
	itinerary.style.display = "block";
	createNew.style.display = "block";
	}

function openlinkGroupWindow(){
	var openNew = document.getElementById("linkGroupWindow");
	openNew.style.display = "block";
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
	var newItinerary = {name:newItiName.value,events:[],group:""};
	itiernaryList[itiernaryList.length] = newItinerary;
	currentIti = newItiName.value;
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
	var testNum = this.parentNode.id.substring(9, 10)-1;
	currentIti = itiernaryList[testNum].name;
	console.log(testNum+" and "+ itiernaryList[testNum].name);
	showEvents();
}

function showItineraries(){
	console.log(itiernaryList);
	var itiPrototype = document.getElementById('itineraryPrototype');
	var itiWindow = document.getElementById('itineraryWindow');
	console.log("num of nodes is "+itiWindow.childNodes.length);
	while (itiWindow.childNodes.length>7) {
    itiWindow.removeChild(itiWindow.lastChild);
    }
	for(var i =0; i<itiernaryList.length;i++){
		var newiti = itiPrototype.cloneNode(true);
		newiti.id = "itinerary"+(i+1);
		console.log(newiti.id);
		newiti.style.display="block";
		var itiNameDiv=newiti.getElementsByClassName('itiName')[0];
		var itiLinkDiv=newiti.getElementsByClassName('itiLinkInfo')[0];
		itiLinkDiv.innerHTML = "Linked with:" + itiernaryList[i].group;
		itiNameDiv.style.left=50*(i);
		itiNameDiv.innerHTML = itiernaryList[i].name;
		itiNameDiv.addEventListener('click',switchIti);
		newiti.getElementsByClassName('plusButton')[0].addEventListener('click',openCreateWindow);
		newiti.getElementsByClassName('linkGroup')[0].addEventListener('click',openlinkGroupWindow);
		itiWindow.appendChild(newiti);
	}
	showEvents();
}

function showProfileWindow(){
	var proWindow = document.getElementById('profileWindow');
	if(proWindow.style.display=="none"){
		proWindow.style.display="block";
	}
	else{
		proWindow.style.display="none";
	}
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
	var linkGroupButton = document.getElementById('addGroupConfirm');
	var showProfileButton = document.getElementById('showProfile');
	
	//temp
	var openGroupButton = document.getElementById('profilePic');
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
	addEventConfirm.addEventListener('click', addEventToItinerary);
	//---
	showProfileButton.addEventListener('click', showProfileWindow);
	linkGroupButton.addEventListener('click', linkGroup);
	searchButton.addEventListener('click', jumpToSearch);
    addItiConfirm.addEventListener('click', addItinerary);
	selectItinerary.addEventListener('click', jumpToIti);
	addItiButton.addEventListener('click', openWindow);
	console.log("init complete");
}