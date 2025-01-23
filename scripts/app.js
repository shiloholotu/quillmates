
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
    ["shakespeare", "Shakespeare", 52, ["love","drama","fate","passion"]],
    ["emily", "Emily Dickinson", 55, ["death", "solitude", "nature", "mystery"]],
    ["walt", "Walt Whitman", 72, ["freedom", "identity", "nature", "equality"]],
    ["langston", "Langston Hughes", 66, ["dream", "justice", "heritage", "resilience"]],
    ["frost", "Robert Frost", 88, ["nature", "choices", "reflection", "isolation"]],
    ["keats", "John Keats", 25, ["beauty","transience", "love", "sensuality"]],
    ["percy", "Percy Shelley", 29, ["rebellion", "nature", "freedom", "idealism"]],
    ["wordsworth", "William Wordsworth", 80, ["nature", "reflection", "memory", "simplicity"]],
    ["coleridge", "Samuel Taylor Coleridge", 61, ["imagination", "nature", "supernatural", "adventure"]],
    ["elliot", "T.S. Elliot", 76, ["alienation", "modernity", "disillusionment", "fragmentation"]],
    ["plath", "Sylvia Plath", 30, ["intensity", "self-discovery", "mental health", "feminism"]],
    ["angelou", "Maya Angelou", 86, ["strength", "empowerment", "equality", "freedom"]]
];

let poetInd = 0;


function displayPoet(){
    document.getElementById("index").value = poetInd + 1;
    document.getElementById("headshot").setAttribute("src","assets/" + poets[poetInd][0] + ".png");
    document.getElementById("name").innerHTML = poets[poetInd][1];
    document.getElementById("age").innerHTML = poets[poetInd][2];

    document.getElementById("tag1").innerHTML = "#" + poets[poetInd][3][0];
    document.getElementById("tag2").innerHTML = "#" + poets[poetInd][3][1];
    document.getElementById("tag3").innerHTML = "#" + poets[poetInd][3][2];
    document.getElementById("tag4").innerHTML = "#" + poets[poetInd][3][3];
}

const indexInp = document.getElementById("index")
indexInp.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        for(let i of indexInp.value){
            if("0123456789".includes(i) == false){
                indexInp.value = poetInd+1;
                return;
            }
        }
        poetInd = parseInt(indexInp.value)-1;
        poetInd = Math.max(0,poetInd);
        poetInd = Math.min(poets.length-1,poetInd);
        displayPoet();
    }
});

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
    `,

    1:`
    <span>About me</span><br>
    I’m not one for small talk—let’s talk about life, death, and the quiet moments in between. Also, I may or may not have a pet raven.
    <br><br><span>Audience Appeal</span><br>
    She’s like your artsy, reclusive friend who always has profound thoughts on nature and existence.
    <br><br><span>Literary Movement</span><br>
    Romanticism
    `,

    2:`
    <span>About me</span><br>
    I celebrate myself and invite you to do the same, let’s walk through nature, sing with America, and make some memories that’ll last a lifetime.
    <br><br><span>Audience Appeal</span><br>
    The ultimate hype man for individuality and nature, he’ll have you loving yourself and everything around you. 
    <br><br><span>Literary Movement</span><br>
    Transcendentalism, Romanticism
    `,

    3:`
    <span>About me</span><br>
    I dream big, fight for equality, and know how to write a powerful story. Let’s make history together.
    <br><br><span>Audience Appeal</span><br>
    Langston’s poetry mixes powerful cultural history with dreams of a better future. He speaks up for what matters.
    <br><br><span>Literary Movement</span><br>
    Harlem Renaissance
    `,

    4:`
    <span>About me</span><br>
    I love the quiet beauty of nature, and I’ll walk with you down the road less traveled—just don’t expect any easy answers.
    <br><br><span>Audience Appeal</span><br>
    Frost is like your outdoorsy, philosophical friend who’s always deep in thought. His poetry is calming but full of life’s big questions.
    <br><br><span>Literary Movement</span><br>
    Modernism
    `,

    5:`
    <span>About me</span><br>
    I’ll make you feel eternal beauty in every fleeting moment. Let’s experience the world through art, and savor what’s fleeting—like youth and beauty.
    <br><br><span>Audience Appeal</span><br>
    Keats is all about beauty, love, and the fact that time is ticking. He’s into deep feels and capturing the magic of life.
    <br><br><span>Literary Movement</span><br>
    Romanticism
    `,

    6:`
    <span>About me</span><br>
    I question authority, love freedom, and believe in the power of rebellion. Let’s go out and change the world together—no limits.
    <br><br><span>Audience Appeal</span><br>
    Shelley is the perfect poet for anyone who’s all about challenging the system and standing up for what’s right. 
    <br><br><span>Literary Movement</span><br>
    Romanticism
    `,

    7:`
    <span>About me</span><br>
    Nature is my muse, and I’ll take you on long walks to find the beauty in every leaf and cloud—let’s find peace together.
    <br><br><span>Audience Appeal</span><br>
     If you want to vibe with someone who’s all about calm, peaceful energy, he’s your match.
    <br><br><span>Literary Movement</span><br>
    Romanticism
    `,

    8:`
    <span>About me</span><br>
    I wander in dreams, chase visions, and believe every experience has a deeper meaning—join me on a strange adventure.
    <br><br><span>Audience Appeal</span><br>
    Coleridge is for the people who love a little mystery and surrealism. His poems are like entering a dream state where everything is weird and fascinating.
    <br><br><span>Literary Movement</span><br>
    Romanticism
    `,

    9:`
    <span>About me</span><br>
    I ponder the modern world, love paradoxes, and live between the lines—let’s explore the emptiness and find meaning together.
    <br><br><span>Audience Appeal</span><br>
    He’s the master of making you feel like you’re part of something bigger while questioning everything around you.
    <br><br><span>Literary Movement</span><br>
    Modernism
    `,

    10:`
    <span>About me</span><br>
    I’m fiery, fierce, and maybe a little bit too intense, but I promise you I’ll make you feel alive and raw in ways you never thought possible.
    <br><br><span>Audience Appeal</span><br>
    She’s perfect for anyone who wants to get real with their emotions and doesn’t shy away from the tough stuff—like trauma and healing.
    <br><br><span>Literary Movement</span><br>
    Confessional
    `,

    11:`
    <span>About me</span><br>
    I rise above all challenges, empower others to do the same, and celebrate what makes us all unique—let’s soar together.
    <br><br><span>Audience Appeal</span><br>
    Her work is all about overcoming obstacles and celebrating your worth in a world that’s constantly testing you.
    <br><br><span>Literary Movement</span><br>
    Harlem Renaissance
    `,
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