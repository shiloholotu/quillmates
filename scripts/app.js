
const profile = document.getElementById("profile");
function swipe(){
    profile.className = "swipedLeft";
    setTimeout(function(){
        profile.style["transition"] = ".25s";
        profile.style["opacity"] = "0";
        profile.className = "";
        setTimeout(function(){
            poetInd = (poetInd + 1) % poets.length;
            displayPoet();
            profile.style["opacity"] = "";
            profile.style["transition"] = "";
        },250);
    },500);
    
}

const poets = [
    ["shakespeare", "Shakespeare", 52, ["love","drama","fate","passion"]]
];

let poetInd = 0;


function displayPoet(){
    document.getElementById("headshot").setAttribute("src","assets/" + poets[poetInd][0] + ".png");
    document.getElementById("name").innerHTML = poets[poetInd][1];
    document.getElementById("age").innerHTML = poets[poetInd][2];

    document.getElementById("tag1").innerHTML = poets[poetInd][3][0];
    document.getElementById("tag2").innerHTML = poets[poetInd][3][1];
    document.getElementById("tag3").innerHTML = poets[poetInd][3][2];
    document.getElementById("tag4").innerHTML = poets[poetInd][3][3];
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
    <span>About me</span><br>
    To love or not to love, that is the question. Let us speak, and I shall share with thee sonnets that rival the stars, if thou dost care to listen.
    <br><br><span>Audience Appeal</span><br>
    That guy who basically invented modern English and wrote plays about love, betrayal, and epic drama. Think of him like the OG soap opera creator.
    <br><br><span>Literary Movement</span><br>
    Renaissance/Elizabethan Drama

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

displayPoet();