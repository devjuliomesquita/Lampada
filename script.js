const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lamp = document.getElementById('lamp');

function teste(){
    return lamp.src.indexOf('quebrada') >-1;
}

function turnon(){
    if(!teste()){
        lamp.src = "./IMAGE/ligada.jpg";
    };
}
function turnoff(){
    if(!teste()){
        lamp.src = "./IMAGE/desligada.jpg";
    };
}
function lampbroken(){
    lamp.src = "./IMAGE/quebrada.jpg";
}

ligar.addEventListener('click', turnon);
desligar.addEventListener('click', turnoff);
lamp.addEventListener('dblclick', lampbroken);
lamp.addEventListener('mouseover',turnon);
lamp.addEventListener('mouseleave', turnoff);