
$(document).ready(function(){
	/*$(document).keyup(function(){
		var s=document.getElementById('right');
		var content=$('textarea[id=left]').val();
		s.contentWindow.document.body.innerHTML=content;
	});*/
	$('a').click(function(){
		var s=document.getElementById('right');
		s.contentWindow.document.body.innerHTML="";
		
		var content=$('textarea[id=left]').val();
		$('#right').contents().find('body').append(content);
	});
});