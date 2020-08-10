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
    if(duzyBonii==false)
    {
        document.getElementById("Bonii").classList.add("duzyBonii");
        duzyBonii=!duzyBonii;
    }
    else 
    {
        document.getElementById("Bonii").classList.remove("duzyBonii");
        duzyBonii=!duzyBonii;
    }
});
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const inc = target / speed;
    
            if (count < target) {

                counter.innerText = Math.ceil(count + inc);
                
                setTimeout(updateCount, 50);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });