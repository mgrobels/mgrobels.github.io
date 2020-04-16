function sprawdz()
{
	var a = document.getElementById("pole").value;
	if(a>0) document.getElementById("wynik").innerHTML = "LICZBA JEST DODATNIA";
	else if(a<0) document.getElementById("wynik").innerHTML = "LICZBA JEST UJEMNA";
	else if(a==0) document.getElementById("wynik").innerHTML = "LICZBA JEST RÓWNA 0";
	else document.getElementById("wynik").innerHTML = "TO NIE JEST LICZBA";
}