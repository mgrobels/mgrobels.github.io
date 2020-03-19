function zegar()
	{
		var dzisiaj = new Date();
	
		var dzien = dzisiaj.getDate();
		var miesiac = dzisiaj.getMonth()+1;
		var rok = dzisiaj.getYear()+1900;
		
		var godzina = dzisiaj.getHours();
		var minuta = dzisiaj.getMinutes();
		
		if (dzien<10) dzien = "0" + dzien;
		if (miesiac<10) miesiac = "0" + miesiac;
		if (godzina<10) godzina = "0" + godzina;
		if (minuta<10) minuta = "0" + minuta;
		
		document.getElementById("zegar").innerHTML = godzina + ":" + minuta + "<br />" + dzien + "." + miesiac + "." + 	rok;
		
		setTimeout("zegar()", 1000);
	}		