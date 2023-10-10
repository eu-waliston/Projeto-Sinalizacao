const map = L.map('map').setView([-29.7205684, -53.7147335], 20);

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


//Card Effect Script

let count = document.querySelectorAll(".card").length;
let card = document.querySelectorAll(".card");

//TODO - Criar função para pegar todas as imagens
const imgCard1 = document.getElementById('img-card-1');
const imgCard2 = document.getElementById('img-card-2');
const imgCard3 = document.getElementById('img-card-3');
const imgCard4 = document.getElementById('img-card-4');
const imgCard5 = document.getElementById('img-card-5');

function CardImage(name){
    return `images/Reitoria-CARDS/${name}.png`
}

let toggle = true;

function CardFlipper(){
        
    let img1 = CardImage("card-1")
    let img2 = CardImage("card-1-eng")

    let img3 = CardImage("card-2")
    let img4 = CardImage("card-2-eng")

    let img5 = CardImage("card-3")
    let img6 = CardImage("card-3-eng")

    let img7 = CardImage("card-4")
    let img8 = CardImage("card-4-eng")

    let img9 = CardImage("card-5")
    let img10 = CardImage("card-5-eng")


    toggle = !toggle;
    if(toggle) {
        imgCard1.src = img1
        imgCard2.src = img3
        imgCard3.src = img5
        imgCard4.src = img7
        imgCard5.src = img9
    } else {
        imgCard1.src = img2
        imgCard2.src = img4
        imgCard3.src = img6
        imgCard4.src = img8
        imgCard5.src = img10
    }
}

function CardEffect(){
    CardFlipper() 
}

for(let i = 0; i < count; i++) {
    card[i].addEventListener("click", CardEffect)
}