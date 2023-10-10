const map = L.map('map').setView([-29.71400, -53.71592], 20);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.locate({ setView: true, maxZoom: 19 });

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("sua lozalização").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

let count = document.querySelectorAll(".card").length;
let card = document.querySelectorAll(".card");

//TODO - Criar função para pegar todas as imagens
const imgCard1 = document.getElementById('img-card-1');
const imgCard2 = document.getElementById('img-card-2');
const imgCard3 = document.getElementById('img-card-3');
const imgCard4 = document.getElementById('img-card-4');
const imgCard5 = document.getElementById('img-card-5');
const imgCard6 = document.getElementById('img-card-6');

function CardImage(name){
    return `images/Husm-CARDS/${name}.png`
}

let toggle = true;

function CardFlipper(){
        
    let img1 = CardImage("HUSM-CARD-22")
    let img2 = CardImage("HUSM-CARD-22-ENG")

    let img3 = CardImage("HUSM-CARD-22A")
    let img4 = CardImage("HUSM-CARD-22A-ENG")

    let img5 = CardImage("HUSM-CARD-22B")
    let img6 = CardImage("HUSM-CARD-22B-ENG")

    let img7 = CardImage("HUSM-CARD-23")
    let img8 = CardImage("HUSM-CARD-23-ENG")

    let img9 = CardImage("HUSM-CARD-24")
    let img10 = CardImage("HUSM-CARD-24-ENG")

    let img11 = CardImage("HUSM-CARD-25")
    let img12 = CardImage("HUSM-CARD-25-ENG")


    toggle = !toggle;
    if(toggle) {
        imgCard1.src = img1
        imgCard2.src = img3
        imgCard3.src = img5
        imgCard4.src = img7
        imgCard5.src = img9
        imgCard6.src = img11
    } else {
        imgCard1.src = img2
        imgCard2.src = img4
        imgCard3.src = img6
        imgCard4.src = img8
        imgCard5.src = img10
        imgCard6.src = img12
    }
}

function CardEffect(){
    CardFlipper() 
}

for(let i = 0; i < count; i++) {
    card[i].addEventListener("click", CardEffect)
}