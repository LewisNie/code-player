var globalx=document.getElementById('left').value;
function update(){
	var x=document.getElementById('left').value;
	var s=document.getElementById('right');
	s.contentWindow.document.body.innerHTML=x;
	return true;
}

