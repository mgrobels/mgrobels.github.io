let i=1;
let czas=4500;
let zmianaSlajduCzas;
let zabezpieczenie=true;

function zmiana()
{
zabezpieczenie=false;
document.getElementById('slajder').style.backgroundImage = 'url(slajd'+i+'.jpg)';
setTimeout(zabezpieczenieOFF,1500);
document.getElementById('s1').style.color = 'white';
document.getElementById('s2').style.color = 'white';
document.getElementById('s3').style.color = 'white';
document.getElementById('s4').style.color = 'white';
document.getElementById('s5').style.color = 'white';

document.getElementById('s'+i).style.color = 'rgb(27, 130, 115)';


if(i==5) i=1;
else i++;
zmianaSlajduCzas=setTimeout(zmiana, czas);
}

function zmianaNaZadanie(numer)
{
    i=numer;
    clearTimeout(zmianaSlajduCzas);
    zmianaSlajduCzas=0;
    zmiana();
}

document.getElementById('s1').addEventListener("click",function(){if(zabezpieczenie){zmianaNaZadanie(1); zabezpieczenie=false;setTimeout(zabezpieczenieOFF,1500);}});
document.getElementById('s2').addEventListener("click",function(){if(zabezpieczenie){zmianaNaZadanie(2); zabezpieczenie=false;setTimeout(zabezpieczenieOFF,1500);}});
document.getElementById('s3').addEventListener("click",function(){if(zabezpieczenie){zmianaNaZadanie(3); zabezpieczenie=false;setTimeout(zabezpieczenieOFF,1500);}});
document.getElementById('s4').addEventListener("click",function(){if(zabezpieczenie){zmianaNaZadanie(4); zabezpieczenie=false;setTimeout(zabezpieczenieOFF,1500);}});
document.getElementById('s5').addEventListener("click",function(){if(zabezpieczenie){zmianaNaZadanie(5); zabezpieczenie=false;setTimeout(zabezpieczenieOFF,1500);}});

function zabezpieczenieOFF()
{
    zabezpieczenie=true;
}

document.getElementById('gear').addEventListener("click",function(){
    if(document.getElementById('ok').style.display == 'block') 
    {
        document.getElementById('czasZmiany').style.display = 'none';
    document.getElementById('ok').style.display = 'none'
    }
    else
    {   
        document.getElementById('czasZmiany').style.display = 'block';
        document.getElementById('ok').style.display = 'block';
    }
});

document.getElementById('ok').addEventListener("click", function(){
    if(document.getElementById("czasZmiany").value>1500)
    {
        czas=document.getElementById("czasZmiany").value;
        zmianaNaZadanie(i-1);
    }
    else alert("WPROWADŹ WARTOŚĆ WIĘKSZĄ OD 1500ms!");
});

document.getElementById('home').addEventListener("click",function(){window.location.href="https://mgrobels.github.io/";});
