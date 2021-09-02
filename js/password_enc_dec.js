document.getElementById("encrypt").addEventListener("click",function(){
// --------------------------------------------------------------------

	let normalPwd = document.getElementById("pwd").value;
	var pwdArray = [];
	var randRev, finalRev = 0;
	let randNum = Math.floor(Math.random() * (999-100) + 100);

	console.log(randNum);

	var encyNum = function(){
		while (randNum > 0){
			randRev = randNum%10;
			if(randRev == 0){
				finalRev = finalRev * 10 + randRev.toString();
			}else{
				finalRev = finalRev * 10 + randRev;
			}
			console.log("RandRev = "+randRev+", finalRev = "+finalRev);
			
			randNum = parseInt(randNum/10);
			// console.log(randRev+"_"+randNum+"_"+finalRev);
		}
		return finalRev;
		// return "Hello";
	}();


	for(var a = 0; a < normalPwd.length; a++){
		pwdArray.push(normalPwd[a]);
	}

	var pwdString = pwdArray.join("_");

	console.log(encyNum);
	console.log(pwdString);







// ---------------------------------------------------------------------
});