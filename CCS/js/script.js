const map = L.map('map').setView([-29.7136355, -53.7139057], 19);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.locate({ setView: true, maxZoom: 19});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("sua lozalização").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);


//Flip Cards Function 

let count = document.querySelectorAll(".card").length;
let card = document.querySelectorAll(".card");


function toggleCard(part){
    let card = document.getElementById(`predio-${part}`);
    return card;
}


function CardImage(name){
    return `images/CT-Cards/CT-CARD-${name}.png`
}

let toggle = true;
function CardFlipper(){
        
    let predio07 = CardImage("07")
    let predio07ENG = CardImage("07-ENG")

    let predio09 = CardImage("09")
    let predio09ENG = CardImage("09-ENG")

    let predio09A = CardImage("09A")
    let predio09AENG = CardImage("09A-ENG")

    let predio09C = CardImage("09C")
    let predio09CENG = CardImage("09C-ENG")

    let predio10 = CardImage("10")
    let predio10ENG = CardImage("10-ENG")

    let predio10A = CardImage("10A")
    let predio10aENG = CardImage("10A-ENG")


    let predio11 = CardImage("11")
    let predio11ENG = CardImage("11-ENG")

    let predio09B = CardImage("09B")
    let predio09BENG = CardImage("09B-ENG")

    let predio09F = CardImage("09F")
    let predio09FENG = CardImage("09F-ENG")

    let predio09E = CardImage("09E")
    let predio09EENG = CardImage("09E-ENG")

    let predio09D = CardImage("09D")
    let predio09DENG = CardImage("09D-ENG")

    let predio09G = CardImage("09G")
    let predio09GENG = CardImage("09G-ENG")

    let predio08 = CardImage("08")
    let predio08ENG = CardImage("08-ENG")

    toggle = !toggle;
    if(toggle) {
        toggleCard("07").src = predio07;
        toggleCard("09").src = predio09;
        toggleCard("09A").src = predio09A;
        toggleCard("09C").src = predio09C;
        toggleCard("10").src = predio10;
        toggleCard("10A").src = predio10A;

        toggleCard("11").src = predio11;
        toggleCard("09B").src = predio09B;
        toggleCard("09F").src = predio09F;
        toggleCard("09E").src = predio09E;
        toggleCard("09D").src = predio09D;
        toggleCard("09G").src = predio09G;
        toggleCard("08").src = predio08;
    } else {
        toggleCard("07").src = predio07ENG;
        toggleCard("09").src = predio09ENG;
        toggleCard("09A").src = predio09AENG;
        toggleCard("09C").src = predio09CENG;
        toggleCard("10").src = predio10ENG;
        toggleCard("10A").src = predio10aENG;

        toggleCard("11").src = predio11ENG;
        toggleCard("09B").src = predio09BENG;
        toggleCard("09F").src = predio09FENG;
        toggleCard("09E").src = predio09EENG;
        toggleCard("09D").src = predio09DENG;
        toggleCard("09G").src = predio09GENG;
        toggleCard("08").src = predio08ENG;
    }
}

function CardEffect(){
    CardFlipper() 
}

for(let i = 0; i < count; i++) {
    card[i].addEventListener("click", CardEffect)
}

//Resize window 
const homeResize = document.getElementById("home");
const btnResize = document.getElementById("resize__btn");
btnResize.addEventListener('click', () => {
    homeResize.classList.toggle("home__resize");
})


let btn = document.getElementById("resize__btn");

let logoCentro = document.querySelector(".logo__centro")

btn.addEventListener('click', () => {
    logoCentro.classList.toggle("logo__centro_rc")
})