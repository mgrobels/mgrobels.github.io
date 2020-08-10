var dj=document.getElementById("djBonii");

var gra=false;
var duzyBonii=false;
document.getElementById("volume").addEventListener("click", function()
{
dj.muted= !dj.muted;
if(gra)
{
    document.getElementById("volume").src="volumeOFF.png";
    document.getElementById("tytul").classList.remove("tytulAnimacja");
}
else
{
    document.getElementById("volume").src="volumeON.png";
    document.getElementById("tytul").classList.add("tytulAnimacja");
}
gra=!gra;
});

document.getElementById("Bonii").addEventListener("click", function()
{
    if((duzyBonii==false)&&(window.innerWidth>1000))
    {
        document.getElementById("Bonii").classList.add("duzyBonii");
        document.getElementById("licznikFlex").style.display="none";
        duzyBonii=!duzyBonii;
    }
    else 
    {
        document.getElementById("Bonii").classList.remove("duzyBonii");
        document.getElementById("licznikFlex").style.display="flex";
        duzyBonii=!duzyBonii;
    }
});