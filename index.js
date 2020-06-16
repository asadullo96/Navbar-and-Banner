
var bannerStatus = 1;
var bannerTimer = 4000;

window.onload = function()
{
    bannerLoop();
}

var startBannerLoop = setInterval(function()
{
    bannerLoop()
}, bannerTimer);

document.getElementById("mainBanner").onmouseenter = function ()
{
    clearInterval(startBannerLoop);
}

document.getElementById("mainBanner").onmouseleave = function ()
{
    startBannerLoop = setInterval(function(){
        bannerLoop();
    }, bannerTimer)
}

document.getElementById("imgBanBtn-prev").onclick = function()
{
    if ( bannerStatus === 1)
    {
        bannerStatus = 2;
    }
    else if ( bannerStatus === 2)
    {
        bannerStatus = 3;
    }
    else if ( bannerStatus === 3)
    {
        bannerStatus = 1;
    }

    bannerLoop();
}

document.getElementById("imgBanBtn-next").onclick = function()
{
    bannerLoop();
}

function bannerLoop()
{
    if(bannerStatus === 1)
    {
        document.getElementById("imgBan2").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("imgBan1").style.right = "0px";
            document.getElementById("imgBan1").style.zIndex = "10";
            document.getElementById("imgBan2").style.right = "-100%";
            document.getElementById("imgBan2").style.zIndex = "15";
            document.getElementById("imgBan3").style.right = "100%";
            document.getElementById("imgBan3").style.zIndex = "5";
        }, 500);
        setTimeout(function()
            {
                document.getElementById("imgBan2").style.opacity = "1";   
            }, 1000);
        bannerStatus = 2;
    }

    else if(bannerStatus === 2)
    {
        document.getElementById("imgBan3").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("imgBan2").style.right = "0px";
            document.getElementById("imgBan2").style.zIndex = "10";
            document.getElementById("imgBan3").style.right = "-100%";
            document.getElementById("imgBan3").style.zIndex = "15";
            document.getElementById("imgBan1").style.right = "100%";
            document.getElementById("imgBan1").style.zIndex = "5";
        }, 500);
        setTimeout(function()
            {
                document.getElementById("imgBan3").style.opacity = "1";   
            }, 1000);
        bannerStatus = 3;
    }

    else if(bannerStatus === 3)
    {
        document.getElementById("imgBan1").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("imgBan3").style.right = "0px";
            document.getElementById("imgBan3").style.zIndex = "10";
            document.getElementById("imgBan1").style.right = "-100%";
            document.getElementById("imgBan1").style.zIndex = "15";
            document.getElementById("imgBan2").style.right = "100%";
            document.getElementById("imgBan2").style.zIndex = "5";
        }, 500);
        setTimeout(function()
            {
                document.getElementById("imgBan1").style.opacity = "1";   
            }, 1000);
        bannerStatus = 1;
    }
    

}

