let waga;
let wzrost;
const  BMI =
{  
    wartosc: 0,
    kolor: '',
    kategoria: '',
    wagaCiala: '',
    ryzykoChoroby: '',
};

let oStronieClick = false;


document.getElementById('oblicz').addEventListener('click', function(){obliczBmi();});

document.getElementById('zmien-imie').addEventListener('click', function(){zmienImie();});

document.getElementById("o-stronie-click").addEventListener('click', function(){oStronie();});

function obliczBmi()
{	
    waga = parseFloat(document.getElementById('waga').value);
    wzrost = parseFloat(document.getElementById('wzrost').value)/100;

    if(waga>-1/0 && waga<1/0 && wzrost>-1/0 && wzrost<1/0)
    {
        BMI.wartosc = Math.round(waga/(wzrost*wzrost)*100)/100;

        if(BMI.wartosc<16) 
            {
                BMI.kolor = "#082E79";
                BMI.kategoria = "wygłodzenie";
                BMI.wagaCiala = "niedowaga";
                BMI.ryzykoChoroby = "minimalne, ale zwiększony poziom wystąpienia innych problemów zdrowotnych";
            }
        else if(BMI.wartosc<16.99)
            {
               BMI.kolor = "#4169E1";
               BMI.kategoria = "wychudzenie";
               BMI.wagaCiala = "niedowaga";
               BMI.ryzykoChoroby = "minimalne, ale zwiększony poziom wystąpienia innych problemów zdrowotnych";
            }
        else if(BMI.wartosc<18.49) 
            {
                BMI.kolor = "#ace1af";
                BMI.kategoria = "niedowaga";
                BMI.wagaCiala = "niedowaga";
                BMI.ryzykoChoroby = "minimalne, ale zwiększony poziom wystąpienia innych problemów zdrowotnych";
            }
        else if(BMI.wartosc<24.99) 
            {
                BMI.kolor = "#3ca141";
                BMI.kategoria = "pożądana masa ciała";
                BMI.wagaCiala = "optimum";
                BMI.ryzykoChoroby = "minimalne";
            }
        else if(BMI.wartosc<29.99) 
            { 
                BMI.kolor = "#ffff99";
                BMI.kategoria = "nadwaga";
                BMI.wagaCiala = "nadwaga";
                BMI.ryzykoChoroby = "średnie";
            }
        else if(BMI.wartosc<34.99) 
            {
                BMI.kolor = "#fde456";
                BMI.kategoria = "otyłość I stopnia";
                BMI.wagaCiala = "otyłość";
                BMI.wartosc.ryzykoChoroby = "wysokie";
            }
        else if(BMI.wartosc<39.99) 
            {
                BMI.kolor = "#cf2929";
                BMI.kategoria = "otyłość II stopnia (duża)";
                BMI.wagaCiala = "otyłość";
                BMI.ryzykoChoroby = "bardzo wysokie";
            }
        else 
            {
                BMI.kolor = "#801818";
                BMI.kategoria = "otyłość III stopnia (chorobliwa)";
                BMI.wagaCiala = "otyłość";
                BMI.ryzykoChoroby = "ekstremalny poziom ryzyka";
            }

        document.getElementById('BMI').style.opacity = '1';
        document.getElementById('BMI-tytul').innerHTML = "<h2>TWOJE BMI WYNOSI</h2>"
        document.getElementById('BMI-wartosc').innerHTML = BMI.wartosc;
        document.getElementById('BMI-kategoria').innerHTML = BMI.kategoria;
        document.getElementById('BMI-wagaCiala').innerHTML = BMI.wagaCiala;
        document.getElementById('BMI-ryzykoChoroby').innerHTML = "<h3>RYZYKO CHOROBY: </h3>" + BMI.ryzykoChoroby;
        document.getElementById('BMI-wartosc').style.backgroundColor = BMI.kolor;
    }
}

function zmienImie()
{
    let noweImie = prompt("PODAJ NOWE IMIE");

    document.getElementById('imie').innerHTML = "Witaj " + noweImie +"!";
}

function oStronie()
{   
    if(oStronieClick == false)
    {
        document.getElementById('o-stronie').classList.add('fade-in');
        document.getElementById("o-stronie").style.opacity = '1';
        document.getElementById("o-stronie").innerHTML = "<h1>O stronie</h1><p>Strona służy do obliczania BMI z&nbsp;danych podanych przez użytkownika. Oferuje możliwość zmiany nazwy użytkownika, poprzez kliknięcie ikony osoby z&nbsp;zębatką&nbsp;<i class=\"fas fa-user-cog\"></i>.Dane do kalkulatora zostały zaczerpane z&nbsp;<a href=\"https://pl.wikipedia.org/wiki/Wska%C5%BAnik_masy_cia%C5%82a\" target=\"_blank\">pl.wikipedia.org</a>. Strona została wykonana w&nbsp;ramach ćwiczeń przez Michała Grobelskiego w dniu 23.03.2020.</p>";
        oStronieClick = true;
    }
    else
    {
        document.getElementById('o-stronie').classList.remove('fade-in');
        document.getElementById("o-stronie").style.opacity = '0';
        document.getElementById("o-stronie").innerHTML = "";
        oStronieClick = false;    
    }
}