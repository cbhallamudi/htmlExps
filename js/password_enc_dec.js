document.getElementById("encrypt").addEventListener("click",function(){
// --------------------------------------------------------------------

	let normalPwd = document.getElementById("pwd").value;
	var pwdArray = [];
	let randNum = Math.floor(Math.random() * (999-100) + 100);

	let encyNum = function(){
		
	}

	for(var a = 0; a < normalPwd.length; a++){
		pwdArray.push(normalPwd[a]);
	}

	var pwdString = pwdArray.join("_");

	console.log(randNum);
	console.log(pwdString);







// ---------------------------------------------------------------------
});