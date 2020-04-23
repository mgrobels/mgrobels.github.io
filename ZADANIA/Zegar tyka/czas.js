function aktualnyCzas()
{
	var data = new Date();
	var rok = data.getFullYear();
	
	var miesiac = data.getMonth();
	miesiac++;
	if(miesiac<10) miesiac="0"+miesiac;
	
	var dzien = data.getDate();
	if(dzien<10) dzien="0"+dzien;
	
	var godzina = data.getHours();
	if(godzina<10) godzina="0"+godzina;
	
	var minuta = data.getMinutes();
	if(minuta<10) minuta="0"+minuta;
	
	var sekunda = data.getSeconds();
	if(sekunda<10) sekunda="0"+sekunda;
	
	document.getElementById("goraB").innerHTML = godzina+":"+minuta+"<span>"+sekunda+"</span><br />"+dzien+"/"+miesiac+"/"+rok;
	setTimeout(aktualnyCzas,100);
	
	var wakacje = new Date('2020','06','27');
	var czasDoWakacji = wakacje-data;
	var czasDoWakacjiDni = Math.floor(czasDoWakacji/(1000*60*60*24));
	var czasDoWakacjiGodziny = Math.floor(czasDoWakacji/(1000*60*60));
	var czasDoWakacjiMinuty = Math.floor(czasDoWakacji/(1000*60));
	var czasDoWakacjiSekundy = Math.floor(czasDoWakacji/1000);
	document.getElementById("dolA").innerHTML = czasDoWakacjiDni+"<span>dni</span><br />"+czasDoWakacjiGodziny+"<span>godzin</span><br />"+czasDoWakacjiMinuty+"<span>minut </span><br />"+czasDoWakacjiSekundy+"<span>sekund";
	
	var egzamin = new Date('2020','06','22');
	var czasDoEgzaminu = egzamin-data;
	var czasDoEgzaminuDni = Math.floor(czasDoEgzaminu/(1000*60*60*24));
	var czasDoEgzaminuGodziny = Math.floor(czasDoEgzaminu/(1000*60*60));
	var czasDoEgzaminuMinuty = Math.floor(czasDoEgzaminu/(1000*60));
	var czasDoEgzaminuSekundy = Math.floor(czasDoEgzaminu/1000);
	document.getElementById("dolB").innerHTML = czasDoEgzaminuDni+"<span>dni</span><br />"+czasDoEgzaminuGodziny+"<span>godzin</span><br />"+czasDoEgzaminuMinuty+"<span>minut </span><br />"+czasDoEgzaminuSekundy+"<span>sekund";
	
	var rokSzkolny = new Date('2020','09','01');
	var czasDoRokuSzkolnego = rokSzkolny-data;
	var czasDoRokuSzkolnegoDni = Math.floor(czasDoRokuSzkolnego/(1000*60*60*24));
	var czasDoRokuSzkolnegoGodziny = Math.floor(czasDoRokuSzkolnego/(1000*60*60));
	var czasDoRokuSzkolnegoMinuty = Math.floor(czasDoRokuSzkolnego/(1000*60));
	var czasDoRokuSzkolnegoSekundy = Math.floor(czasDoRokuSzkolnego/1000);
	document.getElementById("dolC").innerHTML = czasDoRokuSzkolnegoDni+"<span>dni</span><br />"+czasDoRokuSzkolnegoGodziny+"<span>godzin</span><br />"+czasDoRokuSzkolnegoMinuty+"<span>minut </span><br />"+czasDoRokuSzkolnegoSekundy+"<span>sekund";
}
