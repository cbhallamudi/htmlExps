console.log('JS Loaded');

var restartInterval = function() {
    intervalFunction();
    intervalID = setInterval(intervalFunction, 6000 );
};

var intervalFunction = function(){
	// console.log(document.getElementById("text-container-p").innerText);
	var _content = document.getElementById("text-container-p").innerText;
	document.getElementById("text-container-p").innerHTML = "";
	for(i = 0; i < _content.length; i++){
		document.getElementById("text-container-p").innerHTML += "<span class='ind-letter'>"+_content[i]+"</span>";
	}
	var _getSpans = document.getElementsByClassName('ind-letter');
	var _randomIndex = Math.floor(Math.random()*(_getSpans.length-1));
	if(_getSpans[_randomIndex] == " "){
		clearInterval(intervalID);
		restartInterval();
	}else{

		if(_getSpans[_randomIndex].classList.contains("span-animation-class")){
			_getSpans[_randomIndex].classList.remove("span-animation-class");
			_getSpans[_randomIndex].classList.add("span-animation-class");
			console.log("class replaced");
		}else{
			_getSpans[_randomIndex].classList.add("span-animation-class");
			console.log("class added");
		}	
	}
}

var intervalID = window.setInterval(intervalFunction, 6000);
