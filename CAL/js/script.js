const map = L.map('map').setView([-29.7184784, -53.7157229], 20);

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
    return `images/Cal-Cards/CAL-CARD-${name}.png`
}

let toggle = true;
function CardFlipper(){
        
    let predio40 = CardImage("40")
    let predio40ENG = CardImage("40-ENG")

    let predio40A = CardImage("40A")
    let predio40AENG = CardImage("40A-ENG")

    let predio40B = CardImage("40B")
    let predio40BENG = CardImage("40B-ENG")

    let predio40C = CardImage("40C")
    let predio40CENG = CardImage("40C-ENG")

    let predio41 = CardImage("41")
    let predio41ENG = CardImage("41-ENG")

    let predio16 = CardImage("40A")
    let predio16ENG = CardImage("40A-ENG")

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
