var dj=document.getElementById("djBonii");
var gra=false;
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
