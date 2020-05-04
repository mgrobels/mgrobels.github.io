function start()
{
	document.getElementById("zaczynamy").innerHTML = "<h2>Wybierz wielkość przedziału:</h2><button class=\"przedzial\" onclick=\"przedzialA();\">PRZEDZIAŁ 0-10</button><button class=\"przedzial\" onclick=\"przedzialB();\">PRZEDZIAŁ 0-100</button><button class=\"przedzial\" onclick=\"przedzialC();\">PRZEDZIAŁ 0-1000</button>";
	document.getElementById("start").remove();
}

function wybrnoPrzedzial()
{
	document.getElementById("zaczynamy").remove();
	document.getElementById("wprowadzLiczbe").innerHTML = "<h2>Podaj liczbę</h2><input type=\"text\" id=\"liczba\"><button id=\"sprawdz\" onclick=\"sprawdz();\">SPRAWDŹ</button>";
}

let wylosowanaLiczba = 0;
let liczbaProb = 0;
let granicaPrzedzialu = 0;
let przedzialSlownie = "";

function przedzialA()
{
	wybrnoPrzedzial();
	wylosowanaLiczba = Math.floor(Math.random()*10+1);
	granicaPrzedzialu = 10;
	przedzialSlownie = "0-10";
}

function przedzialB()
{
	wybrnoPrzedzial();
	wylosowanaLiczba = Math.floor(Math.random()*100+1);
	granicaPrzedzialu = 100;
	przedzialSlownie = "0-100";
}

function przedzialC()
{
	wybrnoPrzedzial();
	wylosowanaLiczba = Math.floor(Math.random()*1000+1);
	granicaPrzedzialu = 1000;
	przedzialSlownie = "0-1000";
}

function sprawdz()
{
	const pobranaLiczba = document.getElementById("liczba").value;
	
	if(pobranaLiczba==wylosowanaLiczba)
	{
		alert("Bingo!!!");
		document.body.style.backgroundImage = "url('win.png')";
		bingo();
	}
	else if(pobranaLiczba>wylosowanaLiczba)
	{
		if(pobranaLiczba>granicaPrzedzialu)
		{
			alert("Podana liczba nie mieści się w przedziale "+przedzialSlownie+". Spróbuj mniejszej liczby ;)");
		}
		else alert("Spróbuj mniejszej liczby ;)");
		document.body.style.backgroundImage = "url('down.png')";
	}
	else if(pobranaLiczba<wylosowanaLiczba)
	{
		if(pobranaLiczba<0)
		{
			alert("Podana liczba nie mieści się w przedziale "+przedzialSlownie+". Spróbuj większej liczby ;)");
		}
		else alert("Spróbuj większej liczby ;)");
		document.body.style.backgroundImage = "url('up.png')";
	}
	else
	{
		alert("Prawdopodobnie nie podałeś cyfry :/");
		document.body.style.backgroundImage = "url('idk.png')";
	}
	
	podsumowanie();
}

function podsumowanie()
{
	liczbaProb++;
	document.getElementById("podsumowanie").innerHTML = "<p id=\"podsumowanieProb\">LICZBA PRÓB: "+liczbaProb+"<button onclick=\"poddaj();\" id=\"poddaj\">PODDAJ SIĘ</button>";
}

function poddaj()
{
	let liczbaProbWyraz = "";
	if (liczbaProb>1) liczbaProbWyraz = "próbach";
	else liczbaProbWyraz = "próbie";
	
	document.body.style.backgroundImage = "url('lose.png')";
	document.getElementById("wprowadzLiczbe").remove();
	document.getElementById("podsumowanie").remove();
	document.getElementById("wynik").innerHTML = "<p id=\"wynik\">Wylosowaną liczbą była liczba: <b>"+wylosowanaLiczba+"</b></p><p id=\"iloscProb\">Poddano się po <b>"+liczbaProb+"</b> "+liczbaProbWyraz+"</p><button id=\"odswiez\">SPRÓBUJ PONOWNIE</button>";
	
	document.getElementById("odswiez").addEventListener("click", function(){window.location.reload();});
}

function bingo()
{
	if(liczbaProb==0)liczbaProb=1;
	document.getElementById("wprowadzLiczbe").remove();
	document.getElementById("podsumowanie").remove();
	document.getElementById("wynik").innerHTML = "<p id=\"wynik\">Wylosowaną liczbą była liczba: <b>"+wylosowanaLiczba+"</b></p><p id=\"iloscProb\">Udało Ci się ją zgadnąć za<b> "+liczbaProb+"</b> razem</p><button id=\"odswiez\">SPRÓBUJ PONOWNIE</button>";
	
	document.getElementById("odswiez").addEventListener("click", function(){window.location.reload();});
}