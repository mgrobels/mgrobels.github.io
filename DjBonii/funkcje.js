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

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
