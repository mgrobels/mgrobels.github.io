function sprawdz()
{
	let imie = document.getElementById("imie").value;
	imie = imie.toUpperCase()
	let nazwisko = document.getElementById("nazwisko").value;
	nazwisko = nazwisko.toUpperCase()
	let wiek = document.getElementById("wiek").value;
	
	let imiePoprawne = true;
	let nazwiskoPoprawne = true;
	let wiekPoprawny = true;

	for(var i=0; i<imie.length; i++)
	{
		if(((imie.charCodeAt(i)<63)||(imie.charCodeAt(i)>90))&&(imie[i]!="Ó")&&(imie[i]!="Ą")&&(imie[i]!="Ś")&&(imie[i]!="Ł")&&(imie[i]!="Ż")&&(imie[i]!="Ź")&&(imie[i]!="Ć")&&(imie[i]!="Ń")) imiePoprawne = false;
	}
	
	for(var i=0; i<nazwisko.length; i++)
	{
		if(((nazwisko.charCodeAt(i)<63)||(nazwisko.charCodeAt(i)>90))&&(nazwisko[i]!="Ó")&&(nazwisko[i]!="Ą")&&(nazwisko[i]!="Ś")&&(nazwisko[i]!="Ł")&&(nazwisko[i]!="Ż")&&(nazwisko[i]!="Ź")&&(nazwisko[i]!="Ć")&&(nazwisko[i]!="Ń")) nazwiskoPoprawne = false;
	}
	
	if(isNaN(wiek)) wiekPoprawny = false;
	
	if(!imiePoprawne) alert("Imię zawiera błąd");
	if(!nazwiskoPoprawne) alert("Nazwisko zawiera błąd");
	if(!wiekPoprawny) alert("Wiek zawiera błąd");
	
}
