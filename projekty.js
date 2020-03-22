function projekty()
{
	$('#projekty').addClass('aktywne');
	$('.small-container').css('margin-bottom', '10vw');
	
	$('#projekty').html('<div id="projekty-naglowek"></div>'
	+
	'<a href="../WWW 03.2020 DIETA/index.html" target="_blank"><div class="small-projekt"><p>KALKULATOR DIETETYCZNY</p></div></a>'
	+
	'<div class="small-projekt"></div>'
	+
	'<div class="small-projekt"></div>')
	
	$('#projekty-naglowek').addClass('projekty-naglowek');
	$('#projekty-naglowek').html('<h2>PROJEKTY</h2>');
}