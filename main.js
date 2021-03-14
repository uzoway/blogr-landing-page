var btn = document.getElementById("mobilemenu");
var mobilenav = document.getElementById("mobilenav");

mobilenav.style.left = "-100%";

btn.onclick = function(){
    if(mobilenav.style.left == "-100%"){
        mobilenav.style.left = "50%";
        btn.src = "images/icon-close.svg";
    }

    else{
        mobilenav.style.left = "-100%";
        btn.src = "images/icon-hamburger.svg";
    }
}