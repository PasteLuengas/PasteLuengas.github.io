function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let NumForLang = getRandomInt(4);

if (NumForLang == 0) {
    document.getElementById("title").innerHTML = "Hola :D";
    document.getElementById("subtitle").innerHTML = "Me gusta programar, la musica, y la animacion";
}
if (NumForLang == 1) {
    document.getElementById("title").innerHTML = "Hello!";
    document.getElementById("subtitle").innerHTML = "I love programming, music and animation";
}
if (NumForLang == 2) {
    document.getElementById("title").innerHTML = "こんにちは！";
    document.getElementById("subtitle").innerHTML = "pastepastepastepastepastepaste";
}
if (NumForLang == 3) { 
    document.getElementById("title").innerHTML = "Bonjour!";
    document.getElementById("subtitle").innerHTML = "J'aime la programmation, la musique et l'animation";
}
if (NumForLang == 4) {
    document.getElementById("title").innerHTML = "Guten Morgen!";
    document.getElementById("subtitle").innerHTML = "Ich liebe Programmierung, Musik und Animation";
}