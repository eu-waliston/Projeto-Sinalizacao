const map = L.map('map').setView([-29.72268,-53.71121], 20);



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
    return `images/CE-Cards/CE-CARD-${name}.png`
}

let toggle = true;
function CardFlipper(){
        
    let predio16 = CardImage("16");

    let predio16ENG = CardImage("16-ENG")

    let predio16B = CardImage("16B")
    let predio16BENG = CardImage("16B-ENG")

    toggle = !toggle;
    if(toggle) {
        toggleCard("16").src = predio16;
        toggleCard("16B").src = predio16B;

    } else {
        toggleCard("16").src = predio16ENG;
        toggleCard("16B").src = predio16BENG;
    }
}

function CardEffect(){
    CardFlipper() 
}

for(let i = 0; i < count; i++) {
    card[i].addEventListener("click", CardEffect)
}