const profile = document.getElementById("profile");
function swipe(dir){
    profile.className = "swipedRight";
    if(dir == 0){
        profile.className = "swipedLeft";
    }
    setTimeout(function(){
        profile.style["transition"] = ".25s";
        profile.style["opacity"] = "0";
        profile.className = "";
        setTimeout(function(){
            profile.style["opacity"] = "";
            profile.style["transition"] = "";
        },250);
    },500);
    
}

const popup = document.getElementById("popup");
const backdrop = document.getElementById("backdrop");

const popups = {
    "info":`
    This is a presentation of different dead poets - in the form of a dating app! Click through differnt poets to find your match...
    <br><br>
    <span style="text-align: center;display: block;">Press <img src="assets/heart.svg" style="vertical-align: middle;"> to read more info on the poet
    <br>Press <img src="assets/x.svg" style="vertical-align: middle;"> to see the next poet</span>
    `,
    0:`
    <span>Dead Guy</span><br>This is a longer description. Blah blah blah Blah blah blah  Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah
    `
}

function openPopup(id){
    popup.style["display"] = "";
    backdrop.style["display"] = "";


    document.getElementById("popupText").innerHTML = popups[id];
    
    setTimeout(function(){
        popup.style["opacity"] = "";
        backdrop.style["backdrop-filter"] = "blur(10px)";
        backdrop.style["-webkit-backdrop-filter"] = "blur(10px)";
    },10);
}

function closePopup(){
    popup.style["opacity"] = "0";
    backdrop.style["backdrop-filter"] = "blur(0px)";
    backdrop.style["-webkit-backdrop-filter"] = "blur(0px)";
    setTimeout(function(){
        popup.style["display"] = "none";
        backdrop.style["display"] = "none";
    },500)
}