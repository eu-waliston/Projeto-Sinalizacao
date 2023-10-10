const map = L.map('map').setView([-29.7177121, -53.7145132], 20);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.locate({ setView: true, maxZoom: 20 });

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
    return `images/CEFD-CARDS/CEFD-CARD-${name}.png`
}

let toggle = true;
function CardFlipper(){
        
    let predio51 = CardImage("51")
    let predio51ENG = CardImage("51-ENG")

    let predio51B = CardImage("51B")
    let predio51BENG = CardImage("51B-ENG")

    let predio54 = CardImage("54")
    let predio54ENG = CardImage("54-ENG")

    let predio57 = CardImage("57")
    let predio57ENG = CardImage("57-ENG")

    let predio56 = CardImage("56")
    let predio56ENG = CardImage("56-ENG")

    let predio55A = CardImage("55A")
    let predio55AENG = CardImage("55A-ENG")

    
    let predio55B = CardImage("55B")
    let predio55BENG = CardImage("55B-ENG")

    toggle = !toggle;
    if(toggle) {
        toggleCard("40").src = predio40;
        toggleCard("40A").src = predio40A;
        toggleCard("40B").src = predio40B;
        toggleCard("40C").src = predio40C;
        toggleCard("41").src = predio41;
        toggleCard("16").src = predio16;

    } else {
        toggleCard("40").src = predio40ENG;
        toggleCard("40A").src = predio40AENG;
        toggleCard("40B").src = predio40BENG;
        toggleCard("40C").src = predio40CENG;
        toggleCard("41").src = predio41ENG;
        toggleCard("16").src = predio16ENG;
    }
}

function CardEffect(){
    CardFlipper() 
}

for(let i = 0; i < count; i++) {
    card[i].addEventListener("click", CardEffect)
}
