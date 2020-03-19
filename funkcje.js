var ile_kcal = 0;

function ilosc_posilkow(opcja)
{
	var ilosc_posilkow = document.getElementById("ilosc_posilkow").innerHTML;
	if(opcja==1 && ilosc_posilkow<8) ilosc_posilkow++;
	else if(opcja==2 && ilosc_posilkow>2) ilosc_posilkow--;
	
	$('#ilosc_posilkow').html(ilosc_posilkow);
	
	var posilki = "";
	
	for(var i=1; i<=ilosc_posilkow;i++) posilki=posilki+
	"<div class=\"posilki "+i+"\"><h2>Posiłek nr"+i+"</h2>"+
	
	"<p class=\"przerwa\">Jabłko:</p><p id=\"j"+i+"\">0</p><p><a onclick=\"jablko("+i+",1)\"><i class=\"fas fa-chevron-circle-left\"></i></a><a onclick=\"jablko("+i+",2)\"><i class=\"fas fa-chevron-circle-right\"></i></a></p>"+
	
	"<p class=\"przerwa\">Bułka z serem: </p><p id=\"b"+i+"\">0</p><p><a onclick=\"bulka_z_serem("+i+",1)\"><i class=\"fas fa-chevron-circle-left\"></i></a><a onclick=\"bulka_z_serem("+i+",2)\"><i class=\"fas fa-chevron-circle-right\"></i></a></p>"+
	
	"<p class=\"przerwa\">Płatki z mlekiem: </p><p id=\"pzm"+i+"\">0</p><p><a onclick=\"platki_z_mlekiem("+i+",1)\"><i class=\"fas fa-chevron-circle-left\"></i></a><a onclick=\"platki_z_mlekiem("+i+",2)\"><i class=\"fas fa-chevron-circle-right\"></i></a></p>"+
	
	"<p class=\"przerwa\">Pierś z kurczaka: </p><p id=\"pzk"+i+"\">0</p><p><a onclick=\"piers_z_kurczaka("+i+",1)\"><i class=\"fas fa-chevron-circle-left\"></i></a><a onclick=\"piers_z_kurczaka("+i+",2)\"><i class=\"fas fa-chevron-circle-right\"></i></a></p>"+
	
	"</div>"
	
	$('#posilki_kontener').html(posilki);
	
	var wysokosc_pojemnika = 250;
	if(ilosc_posilkow>3) 
	{
		wysokosc_pojemnika=wysokosc_pojemnika+parseFloat($('.posilki').css('height'))+50+parseFloat($('.posilki').css('height'))+50+"px";
		$('#panel').css('height', wysokosc_pojemnika);
		$('#stopka').removeClass("footer");
		$('#stopka').addClass('footerA');
	}
	if(ilosc_posilkow<4) 
	{	
		wysokosc_pojemnika=wysokosc_pojemnika+parseFloat($('.posilki').css('height'))+50+"px";
		$('#panel').css('height', wysokosc_pojemnika);
		$('#stopka').removeClass("footerA");
		$('#stopka').addClass('footer');
	}
	
	if(ilosc_posilkow==2 || ilosc_posilkow==4) $('.posilki').css('width','48%');
	if(ilosc_posilkow==3 || ilosc_posilkow==6) $('.posilki').css('width','31.33%');
	
	if(ilosc_posilkow==5)
	{
		$('.posilki.1').css('width','31.33%');
		$('.posilki.2').css('width','31.33%');
		$('.posilki.3').css('width','31.33%');
		$('.posilki.4').css('width','48%');
		$('.posilki.5').css('width','48%');
	}
	
	if(ilosc_posilkow==7)
	{
		$('.posilki.5').css('width','31.33%');
		$('.posilki.6').css('width','31.33%');
		$('.posilki.7').css('width','31.33%');
	}
}

function ilosc_kalorii(opcja)
{

	var ilosc_kalorii = document.getElementById("ilosc_kalorii").innerHTML;
	ilosc_kalorii = parseFloat(ilosc_kalorii);
	if(opcja==1) ilosc_kalorii+=100;
	else if(opcja==2 && ilosc_kalorii>1000) ilosc_kalorii-=100;
	
	$('#ilosc_kalorii').html(ilosc_kalorii);
	$("#pasek_kalorii").attr("max", ilosc_kalorii);
	$("#pasek_kalorii").attr("value", ile_kcal);
}

function jablko(nr, opcja)
{
	var kcal_jablko=52;
	
	var ilosc_jablek = document.getElementById("j"+nr).innerHTML;
	
	if(opcja==2)
	{
		ilosc_jablek++;
		ile_kcal = ile_kcal + 52;
		
	}
	else if(opcja==1 && ilosc_jablek>0)
	{
		ilosc_jablek--;
		ile_kcal = ile_kcal - 52;
	}
	
	$('#j'+nr).html(ilosc_jablek);
	$("#pasek_kalorii").attr("value", ile_kcal);
	$("#ile_kcal_z_obecnej_diety").html(ile_kcal+"kcal");
}

function bulka_z_serem(nr, opcja)
{
	var ilosc_bulek_z_serem = document.getElementById("b"+nr).innerHTML;
	
	if(opcja==2)
	{
		ilosc_bulek_z_serem++;
		ile_kcal = ile_kcal + 292;
	}
	else if(opcja==1 && ilosc_bulek_z_serem>0) 
	{	
		ilosc_bulek_z_serem--;
		ile_kcal = ile_kcal - 292;
	}
	
	$('#b'+nr).html(ilosc_bulek_z_serem);
	$("#pasek_kalorii").attr("value", ile_kcal);
	$("#ile_kcal_z_obecnej_diety").html(ile_kcal+"kcal");
}

function platki_z_mlekiem(nr, opcja)
{
	var ilosc_platkow_z_mlekiem = document.getElementById("pzm"+nr).innerHTML;
	if(opcja==2)
	{
		ilosc_platkow_z_mlekiem++;
		ile_kcal = ile_kcal + 246;
	}
	else if(opcja==1 && ilosc_platkow_z_mlekiem>0)
	{
		ilosc_platkow_z_mlekiem--;
		ile_kcal = ile_kcal - 246;
	}
	
	$('#pzm'+nr).html(ilosc_platkow_z_mlekiem);
	$("#pasek_kalorii").attr("value", ile_kcal);
	$("#ile_kcal_z_obecnej_diety").html(ile_kcal+"kcal");
}

function piers_z_kurczaka(nr, opcja)
{
	var ilosc_piersi_z_kurczaka = document.getElementById("pzk"+nr).innerHTML;
	if(opcja==2)
	{
		ilosc_piersi_z_kurczaka++;
		ile_kcal = ile_kcal + 165;
	}
	else if(opcja==1 && ilosc_piersi_z_kurczaka>0)
	{
		ilosc_piersi_z_kurczaka--;
		ile_kcal = ile_kcal - 165;
	}
	
	$('#pzk'+nr).html(ilosc_piersi_z_kurczaka);
	$("#pasek_kalorii").attr("value", ile_kcal);
	$("#ile_kcal_z_obecnej_diety").html(ile_kcal+"kcal");
}
