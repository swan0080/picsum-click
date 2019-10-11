let body = document.getElementById("body");
body.addEventListener("click", addImage);
let img = document.createElement('img');

function addImage(){

image.src = "https://picsum.photos/id/237/200/300";

img.addEventListener('load', loading);
img.addEventListener('error', error);

body.appendChild(img);




let random = Math.floor(Math.random() * (500 - 100) + 100);
let id = "https://picsum.photos/id/";
let properties = "/200/300";
img.src = id + random + properties;
}

function loading(){
    let loaded = document.getElementById("main");
    loaded.appendChild(img);
}

function error(){
    alert('Cannot be loaded!');
}