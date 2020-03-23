var projektyClick = false;

document.getElementById("projekty-button").addEventListener('click', function(){
	if(projektyClick == false)
	{
		document.getElementById("projekty-link").setAttribute("href", "#projekty");
		console.log(projektyClick);
		$('#projekty').addClass('aktywne');
		$('.small-container').css('margin-bottom', '10vw');
		document.getElementById('projekty').classList.add('fade-in');
		$('#projekty').html('<div id="projekty-naglowek"></div>'
		+
		'<a href="../WWW 03.2020 DIETA/index.html" target="_blank"><div class="small-projekt g"><p>KALKULATOR DIETETYCZNY</p></div></a>'
		+
		'<a href="../WWW 03.2020 KALKULATOR BMI/index.html" target="_blank"><div class="small-projekt b"><p>KALKULATOR<br />BMI</p></div></a>'
		+
		'<div class="small-projekt"></div>')
		
		$('#projekty-naglowek').addClass('projekty-naglowek');
		$('#projekty-naglowek').html('<h2>PROJEKTY</h2>');
		projektyClick = true;
		
	}	
	else
	{
			document.getElementById('projekty').classList.remove('fade-in');
			document.getElementById("projekty-link").removeAttribute('href');
			document.getElementById("projekty-link").setAttribute("href", "#top");
			$('#projekty').html('');
			$('#projekty').removeClass('aktywne');
			projektyClick = false;
	}
});

if(parseFloat($('html').css('width'))<1200)
{
	$('#title').html("<h1>Michał Grobelski<br />Projekty GitHub</h1>");
}