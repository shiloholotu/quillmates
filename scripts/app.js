
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
    ["angelou", "Maya Angelou", 86, ["strength", "empowerment", "equality", "freedom"]],
    ["ginsberg", "Allen Ginsberg", 70, ["rebellion", "counterculture", "freedom", "visionary"]],
    ["poe", "Edgar Allan Poe", 40, ["death", "madness", "mystery", "obsession"]],
    ["lorde", "Audre Lorde", 58,["feminism", "liberation", "justice", "identity"]],
    ["rilke", "Rainer Maria Rilke", 51, ["solitude", "growth", "beauty", "existentialism"]],
    ["browning","Elizabeth Barrett Browning", 55, ["love", "justice", "passion", "advocacy"]],
    ["rossetti", "Christina Rossetti", 64, ["desire", "innocence", "temptation", "sacrifice"]],
    ["blake", "William Blake", 69, ["innocence", "experience", "duality", "visionary"]],
    ["yeats", "William Butler Yeats", 73, ["fate", "spirituality", "vision", "love"]],
    ["thomas", "Dylan Thomas", 39, ["passion", "mortality", "nature", "emotion"]],
    ["heaney", "Seamus Heaney", 74, ["heritage", "nature", "identity", "memory"]],
    ["lowell", "Robert Lowell", 60, ["honesty", "chaos", "vulnerability", "self-reflection"]],
    ["rich", "Adrienne Rich", 82, ["feminism", "identity", "resistance", "justice"]],
    ["bishop", "Elizabeth Bishop", 68,["precision", "observation", "travel", "restraint"]],
    ["sexton", "Anne Sexton", 45, ["vulnerability", "taboo", "darkness", "honesty"]],
    ["brooks", "Gwendolyn Brooks", 83, ["realism", "community", "resilience", "empowerment"]],
    ["cummings", "e.e cummings", 67, ["playful", "experimental", "romantic", "innovative"]],
    ["neruda", "Pablo Neruda", 69, ["passionate", "romantic", "lyrical", "sensual"]],
    ["rumi", "Rumi", 66, ["spiritual", "romantic", "timeless", "mystical"]],
    ["sandburg", "Carl Sandburg", 89, ["gritty", "realistic", "urban", "honest"]],
    ["hughes", "Ted Hughes", 68, ["brutal", "primal", "wild", "dark"]],
    ["gluck", "Louise Gluck", 80, ["minimalism", "nature", "introspection", "morality"]],
    ["walcott", "Derek Walcott", 87, ["identity", "history", "landscape", "myth"]],
    ["larkin", "Philip Larkin", 63, ["cynicism", "mortality", "mundanity", "nostalgia"]],
    ["auden", "W.H. Auden", 66, ["intellect", "love", "society", "irony"]],
    ["das", "Kamala Das", 75, ["feminist", "bold", "sensual", "honest"]],
    ["donne", "John Donne", 59, ["intellectual", "passionate", "spiritual", "complex"]],
    ["ali", "Agha Shahid Ali", 52, ["nostalgic", "lyrical", "melancholic", "cultural"]],
    ["hardy", "Thomas Hardy", 87, ["melancholic", "romantic", "nature", "fate"]],
    ["pound", "Ezra Pound", 87, ["experimental", "precise", "intellectual", "innovative"]],
    ["lorca", "Federico Garcia Lorca", 38,["lyrical", "mysterious", "romantic", "tragic"]],
    ["rankine", "Claudia Rankine", 61, ["bold", "political", "honest", "reflective"]],
    ["tagore", "Rabindranath Tagor", 80, ["spiritual", "romantic", "universal", "lyrical"]],
    ["harjo", "Joy Harjo", 73, ["spiritual", "resilient", "cultural", "lyrical"]],
    ["bukowski", "Charles Bukowski", 73, ["gritty", "cynical", "raw", "dark"]],
    ["vuong", "Ocean Vuong", 36, ["intimate", "emotional", "modern", "vulnerable"]],
    ["giovanni", "Nikki Giovanni", 81, ["joyful", "bold", "empowering", "honest"]],
    ["doolittle", "Hilda Doolittle (H.D.)",75, ["precise", "mythological", "symbolic", "feminine"]],
    ["sappho", "Sappho", 40, ["passionate", "intimate", "yearning", "timeless"]],
    ["carson", "Anne Carson", 74, ["experimental", "intellectual", "mythic", "haunting"]],
    ["millay", "Edna St. Vincent Millay", 58, ["passionate", "rebellious", "romantic", "independent"]],
    ["dove", "Rita Dove", 72,["historical", "reflective", "lyrical", "elegant"]],
    ["oliver", "Mary Oliver", 83, ["nature", "joyful", "mindful", "simple"]],
    ["macewen", "Gwendolyn MacEwen", 46, ["mythic", "mystical", "introspective","lyrical"]],
    ["clifton", "Lucille Clifton", 73, ["joyful", "honest", "resilient", "celebratory"]]
    
    
];

//preload images
let preloadString = "";
for(let i of poets){
    preloadString += "url('/dead-poet-tinder/assets/"+i[0]+".png'),"
}
preloadString = preloadString.slice(0,-1);
document.getElementById("preloadImages").style["background-image"] = preloadString;

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

    12:`
    <span>About me</span><br>
    I’m the guy who questions everything, loves the weirdness of life, and isn’t afraid to shout my truth from the rooftops. Let’s run wild.
    <br><br><span>Audience Appeal</span><br>
    He’s all about rebellion, pushing boundaries, and embracing life’s chaos, especially when it feels a bit raw and real.
    <br><br><span>Literary Movement</span><br>
    Beat
    `,

    13:`
    <span>About me</span><br>
    I’m obsessed with the macabre, but I promise you it’s poetic. Come get lost in my dark, mysterious world—if you dare.
    <br><br><span>Audience Appeal</span><br>
    Poe is the perfect poet if you love all things creepy and mysterious, with a dash of tragic romance.
    <br><br><span>Literary Movement</span><br>
    Gothic
    `,
    14:`
    <span>About me</span><br>
    I’m unapologetic, intersectional, and believe that every part of me is a weapon of liberation—join me in the fight for freedom and truth.
    <br><br><span>Audience Appeal</span><br>
    Fiercely authentic. Lorde’s poetry is all about embracing your identity and fighting for justice, no matter what.
    <br><br><span>Literary Movement</span><br>
    Modernism
    `,

    15:`
    <span>About me</span><br>
    I seek deeper meaning in everything, believe in the power of solitude, and know that true beauty lies in the struggles we face.
    <br><br><span>Audience Appeal</span><br>
    Deep and introspective. Rilke’s poetry encourages you to reflect on your growth and find meaning in both the beautiful and painful parts of life.
    <br><br><span>Literary Movement</span><br>
    Modernism
    `,

    16:`
    <span>About me</span><br>
    I’m all about passionate love and justice for those who can’t speak for themselves—let’s make this world a better place, together.
    <br><br><span>Audience Appeal</span><br>
    Love with a cause. Browning’s poetry celebrates passion while fighting for social justice and equality.
    <br><br><span>Literary Movement</span><br>
    Victorian
    `,

    17:`
    <span>About me</span><br>
    I’m sweet yet a little bit dark, questioning life’s desires and the consequences of giving into them—let’s find beauty in both joy and sorrow.
    <br><br><span>Audience Appeal</span><br>
    Sweet with a dark edge. Rossetti explores intense desires and the consequences of giving in to them in a way that’s both beautiful and haunting.
    <br><br><span>Literary Movement</span><br>
    Victorian
    `,

    18:`
    <span>About me</span><br>
    I see the world in contradictions—innocence and experience, heaven and hell. Let’s explore both sides of the coin, together.
    <br><br><span>Audience Appeal</span><br>
    Visionary and rebellious. Blake challenges the status quo, mixing innocence with experience to question everything about society and life.
    <br><br><span>Literary Movement</span><br>
    Romanticism
    `,

    19:`
    <span>About me</span><br>
    I’m obsessed with the eternal and the mystical. Let’s get lost in a world of dreams, fate, and ancient wisdom.
    <br><br><span>Audience Appeal</span><br>
    Mystical and philosophical. Yeats’ poetry explores fate, spirituality, and the eternal, making you think about life on a deeper level.
    <br><br><span>Literary Movement</span><br>
    Modernism
    `,

    20:`
    <span>About me</span><br>
    I rage against the dying of the light and chase beauty in every breath—join me in living fully before the end.
    <br><br><span>Audience Appeal</span><br>
    Thomas is all about vibing with the wildness of life. His poems are intense, emotional, and perfect for those who love dramatic, heart-on-the-sleeve energy.
    <br><br><span>Literary Movement</span><br>
    Modernism
    `,

    21:`
    <span>About me</span><br>
    Digging deep into roots, history, and the earth—I bring past and present together to uncover the meaning of it all.
    <br><br><span>Audience Appeal</span><br>
    Heaney’s like that friend who’s always grounded but philosophical. He makes the ordinary feel profound and connects personal experiences to history.
    <br><br><span>Literary Movement</span><br>
    Modernism
    `,

    22:`
    <span>About me</span><br>
    My life’s an open book—messy, honest, and full of struggles, but it’s all there for you to see.
    <br><br><span>Audience Appeal</span><br>
    Lowell’s like a confessional influencer spilling raw, unfiltered truths. He’s perfect if you love real talk about emotions and mental health.
    <br><br><span>Literary Movement</span><br>
    Confessional
    `,

    23:`
    <span>About me</span><br>
    I question systems, embrace change, and write to uncover truths—let’s break free and build something better.
    <br><br><span>Audience Appeal</span><br>
    Rich is all about challenging the status quo. She’s perfect for those who love activism, feminism, and questioning societal norms.
    <br><br><span>Literary Movement</span><br>
    Postmodernism
    `,

    24:`
    <span>About me</span><br>
    I find beauty in the details and travel the world searching for meaning—let’s explore together.
    <br><br><span>Audience Appeal</span><br>
    Bishop’s poetry is subtle but hits hard, like a lo-fi playlist for your soul. She’s perfect for anyone who loves careful, observational writing.
    <br><br><span>Literary Movement</span><br>
    Modernism
    `,

    25:`
    <span>About me</span><br>
    I’m dark, dramatic, and love exploring the taboos—let’s dive into the things no one talks about.
    <br><br><span>Audience Appeal</span><br>
    Sexton’s poetry is like a late-night deep talk session—raw, vulnerable, and unapologetically real. Perfect for those who crave emotional depth.
    <br><br><span>Literary Movement</span><br>
    Confessional
    `,

    26:`
    <span>About me</span><br>
    I write about real people and their struggles, joys, and triumphs—let’s keep it authentic and uplifting.
    <br><br><span>Audience Appeal</span><br>
    Brooks is for anyone who loves poetry that feels real and accessible. She captures everyday life and turns it into art that inspires.
    <br><br><span>Literary Movement</span><br>
    Harlem Renaissance, Modernism
    `,

    27:`
    <span>About me</span><br>
    i love breaking rules, playing with words, and seeing the world in new ways—join me if you’re open to surprises (and lowercase letters).
    <br><br><span>Audience Appeal</span><br>
    Like the artsy friend who’s always doodling in the margins, his playful and unique style appeals to anyone who loves creativity and thinking outside the box.
    <br><br><span>Literary Movement</span><br>
    Modernism
    `,

    28:`
    <span>About me</span><br>
    I’m a hopeless romantic, a nature lover, and a fan of all things passionate—let’s write poetry in the stars.
    <br><br><span>Audience Appeal</span><br>
    Neruda is pure heart-eyes emoji. His romantic, sensual poetry is perfect for anyone who loves to feel deeply and dream big.
    <br><br><span>Literary Movement</span><br>
    Modernism, Surrealism
    `,

    29:`
    <span>About me</span><br>
    Lose yourself in love, find yourself in the infinite—let’s dance into eternity together.
    <br><br><span>Audience Appeal</span><br>
    Rumi is the ultimate vibe for spiritual seekers and romantics. His poetry feels like a cosmic hug and a reminder to live with love and purpose.
    <br><br><span>Literary Movement</span><br>
    Sufi Mysticism
    `,

    30:`
    <span>About me</span><br>
    I’m all about the hustle, the heart of the city, and finding poetry in everyday people and places.
    <br><br><span>Audience Appeal</span><br>
    Sandburg is the blue-collar poet who sees beauty in the grind. His poems hit hard for anyone who’s all about appreciating the realness of life.
    <br><br><span>Literary Movement</span><br>
    Modernism
    `,

    31:`
    <span>About me</span><br>
    Wild, raw, and untamed—my words are as fierce as the nature that inspires them.
    <br><br><span>Audience Appeal</span><br>
    Hughes is like the dark, moody playlist for your inner wild child. His poetry taps into the primal and untamed parts of life.
    <br><br><span>Literary Movement</span><br>
    Modernism, Postmodernism
    `,

    32:`
    <span>About me</span><br>
    I’m a hopeless romantic, a nature lover, and a fan of all things passionate—let’s write poetry in the stars.
    <br><br><span>Audience Appeal</span><br>
     The poetic minimalist who turns your inner monologue into art—raw, honest, and perfect for your “healing era.”
    <br><br><span>Literary Movement</span><br>
    Postmodernism
    `,

    33:`
    <span>About me</span><br>
    Lose yourself in love, find yourself in the infinite—let’s dance into eternity together.
    <br><br><span>Audience Appeal</span><br>
    The storyteller who blends Caribbean vibes with deep thoughts on identity—ideal for fans of rich imagery and cultural pride.
    <br><br><span>Literary Movement</span><br>
    Postcolonial
    `,

    34:`
    <span>About me</span><br>
    I’m all about the hustle, the heart of the city, and finding poetry in everyday people and places.
    <br><br><span>Audience Appeal</span><br>
    The original “it’s giving nihilism” poet, serving up relatable cynicism about life, love, and existential dread.
    <br><br><span>Literary Movement</span><br>
    Modernism
    `,

    35:`
    <span>About me</span><br>
    Wild, raw, and untamed—my words are as fierce as the nature that inspires them.
    <br><br><span>Audience Appeal</span><br>
    The intellectual with a heart, balancing witty social critiques with deeply emotional truths—like a playlist that’s half indie hits and half sad bangers.
    <br><br><span>Literary Movement</span><br>
    Modernism
    `,

    36:`
    <span>About me</span><br>
    I write about love, freedom, and being unapologetically myself—let’s break the rules together.
    <br><br><span>Audience Appeal</span><br>
    Kamala Das is for anyone who loves raw, feminist energy and poetry that defies conventions and societal expectations.
    <br><br><span>Literary Movement</span><br>
    Postcolonialism, Confessional
    `,

    37:`
    <span>About me</span><br>
    I mix spirituality with seduction and find God in love—join me if you like paradoxes and passion.
    <br><br><span>Audience Appeal</span><br>
    Donne’s poetry is like a philosophical Tinder bio: sexy, spiritual, and full of contradictions that somehow work.
    <br><br><span>Literary Movement</span><br>
    Metaphysical
    `,

    38:`
    <span>About me</span><br>
    I weave nostalgia, longing, and love into ghazals that sing of home and exile—let’s find belonging together.
    <br><br><span>Audience Appeal</span><br>
    Ali’s poetry is all about yearning and cultural connection, perfect for anyone who feels caught between places or identities.
    <br><br><span>Literary Movement</span><br>
    Modernism, Postcolonialism
    `,

    39:`
    <span>About me</span><br>
    I write about love and loss with a side of existential dread—let’s walk under gloomy skies together.
    <br><br><span>Audience Appeal</span><br>
    Hardy’s poetry hits like that one heartbreak song you listen to on repeat—deep, emotional, and perfect for moody vibes.
    <br><br><span>Literary Movement</span><br>
    Victorian
    `,

    40:`
    <span>About me</span><br>
    Make it new—that’s my vibe, whether it’s words, forms, or life itself.
    <br><br><span>Audience Appeal</span><br>
    Pound’s poetry is like avant-garde art: experimental, bold, and ideal for anyone who loves breaking the mold.
    <br><br><span>Literary Movement</span><br>
    Modernism
    `,

    41:`
    <span>About me</span><br>
    I write about love, death, and the magic in the everyday—let’s get lost in the beauty of the moonlight.
    <br><br><span>Audience Appeal</span><br>
    Lorca’s poetry feels like a surreal dream with all the feels—perfect for romantics who love a touch of mystery
    <br><br><span>Literary Movement</span><br>
    Modernism, Surrealism
    `,

    42:`
    <span>About me</span><br>
    I confront racism, identity, and justice through raw, poetic truth—let’s talk about what really matters.
    <br><br><span>Audience Appeal</span><br>
    Rankine’s work is straight-up powerful and essential for anyone who cares about social issues and wants poetry with meaning.
    <br><br><span>Literary Movement</span><br>
    Contemporary
    `,

    43:`
    <span>About me</span><br>
    I mix spirituality, love, and nature into songs of the soul—let’s connect on a deeper level.
    <br><br><span>Audience Appeal</span><br>
    Tagore’s poetry is for anyone who loves soulful, poetic vibes that are as timeless as a sunset.
    <br><br><span>Literary Movement</span><br>
    Romanticism
    `,

    44:`
    <span>About me</span><br>
    I weave stories of heritage, spirituality, and resilience into poems that sing—let’s honor the journey together.
    <br><br><span>Audience Appeal</span><br>
    Harjo’s poetry is beautifully grounded and perfect for anyone who values culture, connection, and spirituality.
    <br><br><span>Literary Movement</span><br>
    Contemporary
    `,

    45:`
    <span>About me</span><br>
    Life’s messy, gritty, and a little drunk—let’s skip the small talk and get real.
    <br><br><span>Audience Appeal</span><br>
    Bukowski is like a dive bar poet—raw, cynical, and perfect for anyone who loves the unfiltered, no-BS side of life.
    <br><br><span>Literary Movement</span><br>
    Dirty Realism
    `,

    46:`
    <span>About me</span><br>
    I turn pain and beauty into poetry that whispers and shouts—let’s explore love, loss, and everything in between.
    <br><br><span>Audience Appeal</span><br>
    Vuong’s poetry is deeply emotional and modern, resonating with anyone who loves introspective, heartfelt writing.
    <br><br><span>Literary Movement</span><br>
    Contemporary, Postmodernism
    `,

    47:`
    <span>About me</span><br>
    I celebrate Black joy, love, and power through my poetry—let’s rise together.
    <br><br><span>Audience Appeal</span><br>
    Giovanni’s poetry is inspiring and uplifting, perfect for anyone who loves celebrating identity and finding strength in community.
    <br><br><span>Literary Movement</span><br>
    Black Arts Movement
    `,

    48:`
    <span>About me</span><br>
    I craft words like sharp-cut gems—my passions are myth, clarity, and the beauty of simplicity.
    <br><br><span>Audience Appeal</span><br>
    H.D.’s poetry is like an aesthetic Instagram feed: minimalist, precise, and loaded with mythological vibes. 
    <br><br><span>Literary Movement</span><br>
    Imagism
    `,

    
    49:`
    <span>About me</span><br>
    Love is a fire, and I am here to burn—join me if you dare to feel.
    <br><br><span>Audience Appeal</span><br>
    Sappho’s poetry is raw, emotional, and all about yearning. She’s the OG sad girl, perfect for romantics and heartbroken souls.
    <br><br><span>Literary Movement</span><br>
    Ancient Greek
    `,

    50:`
    <span>About me</span><br>
    I blend myth, philosophy, and heartbreak into strange and wonderful stories—come get lost in my labyrinth.
    <br><br><span>Audience Appeal</span><br>
    Carson is like an indie film director in poetry form: experimental, brainy, and deeply emotional for anyone who loves edgy and weirdly beautiful stuff.
    <br><br><span>Literary Movement</span><br>
    Contemporary, Postmodernism
    `,

    51:`
    <span>About me</span><br>
    I live for passion, poetry, and late-night adventures—let’s burn the candle at both ends.
    <br><br><span>Audience Appeal</span><br>
    Millay’s poetry is for rebels and free spirits who love the idea of living fast and feeling everything deeply.
    <br><br><span>Literary Movement</span><br>
    Modernism
    `,

    52:`
    <span>About me</span><br>
    I write about history, identity, and finding beauty in the everyday—let’s create our own legacy together.
    <br><br><span>Audience Appeal</span><br>
    Dove’s poetry feels like a thoughtful deep-dive into personal and collective history, perfect for reflective souls and storytellers.
    <br><br><span>Literary Movement</span><br>
    Contemporary
    `,

    53:`
    <span>About me</span><br>
    Nature is my muse, and joy is my goal—let’s take a walk and marvel at the world.
    <br><br><span>Audience Appeal</span><br>
    Oliver is the cottagecore poet who makes you want to escape into nature and find the beauty in small moments.
    <br><br><span>Literary Movement</span><br>
    Contemporary
    `,

    54:`
    <span>About me</span><br>
    I channel myth and mystery into poetry that bridges the real and surreal—let’s unlock hidden worlds together.
    <br><br><span>Audience Appeal</span><br>
    MacEwen’s poetry is dreamy and introspective, perfect for anyone who loves mystical vibes and thinking about the unknown.
    <br><br><span>Literary Movement</span><br>
    Modernism
    `,

    55:`
    <span>About me</span><br>
    I celebrate life, resilience, and the beauty of survival—let’s toast to the joy of simply being.
    <br><br><span>Audience Appeal</span><br>
    Clifton’s poetry is empowering, short, and powerful—perfect for anyone who needs a reminder to find strength in themselves.
    <br><br><span>Literary Movement</span><br>
    Contemporary
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