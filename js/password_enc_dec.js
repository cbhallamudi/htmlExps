// var pwdString;

document.getElementById("encrypt").addEventListener("click",function(){
// --------------------------------------------------------------------

	let normalPwd = document.getElementById("pwd").value;
	var pwdArray = [];
	var randRev, finalRev = 0;
	let randNum = Math.floor(Math.random() * (999-100) + 100);
	let randDigit = Math.round(Math.random());

	console.log(randNum);



	pwdArray.push(randDigit);


	for(var a = 0; a < normalPwd.length; a++){
		console.log(normalPwd.charCodeAt(a));

		if(randDigit == 1){
			pwdArray.push(parseInt(normalPwd.charCodeAt(a))+randNum);
		}else{
			pwdArray.push(parseInt(normalPwd.charCodeAt(a))-randNum);
		}
	
	}

	var encyNum = function(){
		while (randNum > 0){
			randRev = randNum%10;
			finalRev = finalRev * 10 + randRev;
			randNum = parseInt(randNum/10);
		}
		return finalRev;
	}();
	
	pwdArray.push(encyNum);

	window.pwdString = pwdArray.join("_");

	console.log(encyNum);
	console.log(pwdString);

// ---------------------------------------------------------------------
});

document.getElementById("dcrypt").addEventListener("click",function() {
	// Dcryption started ----------------------------------------------
	var finalNormal = 0; normalArray = [];
	// console.log(window.pwdString);
	decryptionStringSplit = window.pwdString.split("_");

	var dycNum = function(){
		while (decryptionStringSplit[decryptionStringSplit.length-1] > 0){
			randNormal = decryptionStringSplit[decryptionStringSplit.length-1]%10;
			finalNormal = finalNormal * 10 + randNormal;
			decryptionStringSplit[decryptionStringSplit.length-1] = parseInt(decryptionStringSplit[decryptionStringSplit.length-1]/10);
		}
		return finalNormal;
	}();
	console.log(finalNormal);

	for(b = 1; b < (decryptionStringSplit.length-1); b++){
		if(decryptionStringSplit[0] == 1){
			normalArray.push(Math.abs(finalNormal-parseInt(decryptionStringSplit[b])));
		}else{
			normalArray.push(Math.abs(finalNormal+parseInt(decryptionStringSplit[b])));
		}
	}

	console.log(normalArray.join("_"));

	//Dcrytption ends --------------------------------------------------
});