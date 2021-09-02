document.getElementById("encrypt").addEventListener("click",function(){
// --------------------------------------------------------------------

	let normalPwd = document.getElementById("pwd").value;
	var pwdArray = [];
	var randRev, finalRev = 0;
	let randNum = Math.floor(Math.random() * (999-100) + 100);
	let randDigit = Math.round(Math.random());

	console.log(randNum);

	var encyNum = function(){
		while (randNum > 0){
			randRev = randNum%10;
			finalRev = finalRev * 10 + randRev;
			randNum = parseInt(randNum/10);
		}
		return finalRev;
	}();

	pwdArray.push(encyNum);


	for(var a = 0; a < normalPwd.length; a++){
		pwdArray.push(charCodeAt(0)normalPwd[a]);
	}
	
	pwdArray.push(randDigit);

	var pwdString = pwdArray.join("_");

	console.log(encyNum);
	console.log(pwdString);







// ---------------------------------------------------------------------
});