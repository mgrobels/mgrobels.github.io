function zegar()
{
	const aktualnaData = new Date();
	const rok = aktualnaData.getFullYear();
	let godzina = aktualnaData.getHours(); if(godzina<10) godzina="0"+godzina;
	let minuta = aktualnaData.getMinutes(); if(minuta<10) minuta="0"+minuta;
	
	document.getElementById("zegar").innerHTML = godzina+":"+minuta;
	document.getElementById("aktualnyRok").innerHTML = rok;
	document.getElementById("mojWiek").innerHTML = rok-2001;
	setTimeout(zegar, 1000);
}

let x=0;
let y=0;
let z=0;
let t=0.0;

let r=255;
let g=255;
let b=255;
let ciemniej=true;

let kolorCzas = 100;

function kolor()
{
		x = Math.round(Math.sin(t * 2 * Math.PI) * 128 + 128);
		y = Math.round(Math.sin((t + 0.33) * 2 * Math.PI) * 128 + 128);
		z = Math.round(Math.sin((t + 0.66) * 2 * Math.PI) * 128 + 128);
		t+=0.005;
		
		if(ciemniej)
		{
			r--;
			g--;
			b--;
			if(r<10) ciemniej=false;
		}
		else
		{
			r++;
			g++;
			b++;
			if(r>250) ciemniej=true;
		}
		
		
		document.getElementById("zmianaKoloru").style.color = "rgb("+x+","+y+","+z+")";
		document.body.style.background = "radial-gradient(circle, rgba("+r+","+g+","+b+",1) 0%, rgba("+x+","+y+","+z+",1) 100%)";
		
		document.getElementsByClassName("tytulSekcji")[0].style.backgroundColor= "rgba("+x+","+y+","+z+",0.5)";
		document.getElementsByClassName("tytulSekcji")[1].style.backgroundColor= "rgba("+x+","+y+","+z+",0.5)";
		document.getElementsByClassName("tytulSekcji")[2].style.backgroundColor= "rgba("+x+","+y+","+z+",0.5)";
		document.getElementsByClassName("tytulSekcji")[3].style.backgroundColor= "rgba("+x+","+y+","+z+",0.5)";
		
		var czas;
		
		document.getElementById("oMnieButton").addEventListener("mouseover",function buttonKolor(){document.getElementById("oMnieButton").style.background = "rgb("+x+","+y+","+z+")";czas=setTimeout(buttonKolor, kolorCzas);});
		document.getElementById("projektyButton").addEventListener("mouseover",function buttonKolor(){document.getElementById("projektyButton").style.background = "rgb("+x+","+y+","+z+")";czas=setTimeout(buttonKolor, kolorCzas);});
		document.getElementById("zadaniaButton").addEventListener("mouseover",function buttonKolor(){document.getElementById("zadaniaButton").style.background = "rgb("+x+","+y+","+z+")";czas=setTimeout(buttonKolor, kolorCzas);});
		document.getElementById("kontaktButton").addEventListener("mouseover",function buttonKolor(){document.getElementById("kontaktButton").style.background = "rgb("+x+","+y+","+z+")";czas=setTimeout(buttonKolor, kolorCzas);});
		
		document.getElementById("oMnieButton").addEventListener("mouseout",function buttonKolor(){document.getElementById("oMnieButton").style.background = "white";clearTimeout(czas);});
		document.getElementById("projektyButton").addEventListener("mouseout",function buttonKolor(){document.getElementById("projektyButton").style.background = "white";clearTimeout(czas);});
		document.getElementById("zadaniaButton").addEventListener("mouseout",function buttonKolor(){document.getElementById("zadaniaButton").style.background = "white";clearTimeout(czas);});
		document.getElementById("kontaktButton").addEventListener("mouseout",function buttonKolor(){document.getElementById("kontaktButton").style.background = "white";clearTimeout(czas);});
		
		setTimeout(kolor, kolorCzas);
}

document.getElementById("oMnieButton").addEventListener("click",function(){oMnie();});
document.getElementById("oMnieMenu").addEventListener("click",function(){oMnie();});

document.getElementById("zadaniaButton").addEventListener("click",function(){zadania();});
document.getElementById("zadaniaMenu").addEventListener("click",function(){zadania();});

document.getElementById("projektyButton").addEventListener("click",function(){projekty();});
document.getElementById("projektyMenu").addEventListener("click",function(){projekty();});

document.getElementById("kontaktMenu").addEventListener("click",function(){kontakt();});
document.getElementById("kontaktButton").addEventListener("click",function(){kontakt();});

document.getElementById("stronaGlowna").addEventListener("click",function(){stronaGlowna();});

document.getElementById("opcjeIkona").addEventListener("click",function(){if(document.getElementById("opcjeTlo").style.display == "block")document.getElementById("opcjeTlo").style.display = "none";else document.getElementById("opcjeTlo").style.display = "block";});

document.getElementById("tempoDown").addEventListener("click",function(){if(kolorCzas==100){kolorCzas=5000;document.getElementById("poziomTempa").innerHTML = "STOP";}else if(kolorCzas==50){kolorCzas=100;document.getElementById("poziomTempa").innerHTML = "TEMPO x1";}else if(kolorCzas==1){kolorCzas=50;document.getElementById("poziomTempa").innerHTML = "TEMPO x2";}});

document.getElementById("tempoUp").addEventListener("click",function(){if(kolorCzas==5000){kolorCzas=100;document.getElementById("poziomTempa").innerHTML = "TEMPO x1";}else if(kolorCzas==100){kolorCzas=50;document.getElementById("poziomTempa").innerHTML = "TEMPO x2";}else if(kolorCzas==50){kolorCzas=1;document.getElementById("poziomTempa").innerHTML = "TEMPO x100";}});


function oMnie()
{
document.getElementById("oMnieSekcja").style.display = "block";
document.getElementById("startSekcja").style.display = "none";
document.getElementById("kontaktSekcja").style.display = "none";
document.getElementById("projektySekcja").style.display = "none";
document.getElementById("zadaniaSekcja").style.display = "none";
}

function zadania()
{
document.getElementById("oMnieSekcja").style.display = "none";
document.getElementById("startSekcja").style.display = "none";
document.getElementById("kontaktSekcja").style.display = "none";
document.getElementById("projektySekcja").style.display = "none";
document.getElementById("zadaniaSekcja").style.display = "block";
}

function projekty()
{
document.getElementById("oMnieSekcja").style.display = "none";
document.getElementById("startSekcja").style.display = "none";
document.getElementById("kontaktSekcja").style.display = "none";
document.getElementById("projektySekcja").style.display = "block";
document.getElementById("zadaniaSekcja").style.display = "none";
}

function kontakt()
{
document.getElementById("oMnieSekcja").style.display = "none";
document.getElementById("startSekcja").style.display = "none";
document.getElementById("kontaktSekcja").style.display = "block";
document.getElementById("projektySekcja").style.display = "none";
document.getElementById("zadaniaSekcja").style.display = "none";
}

function stronaGlowna()
{
document.getElementById("oMnieSekcja").style.display = "none";
document.getElementById("startSekcja").style.display = "block";
document.getElementById("kontaktSekcja").style.display = "none";
document.getElementById("projektySekcja").style.display = "none";
document.getElementById("zadaniaSekcja").style.display = "none";
document.getElementById("opcjeTlo").style.display = "none";
}

document.getElementById("zadania").lastElementChild.innerHTML = "<p><b>NEW </b>"+document.getElementById("zadania").lastElementChild.innerHTML+"</p>";document.getElementById("projekt").lastElementChild.innerHTML = "<p><b>NEW </b>"+document.getElementById("projekt").lastElementChild.innerHTML+"</p>";