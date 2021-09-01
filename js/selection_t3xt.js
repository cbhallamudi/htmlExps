const string_letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];

for (var i = 0; i <= Math.random()*10; i++) {
	Things[i]
}


document.getElementById('clk_btn').addEventListener('click',function(){
	console.log(window.getSelection().toString());
});

document.onselectionchange = function() {
  console.log('New selection made');
  let selection = document.getSelection();
  // console.log(selection);
  document.onmouseup = function(){
  	console.log(selection.focusNode.data);
  }
};