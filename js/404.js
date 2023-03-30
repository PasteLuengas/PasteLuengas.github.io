function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let NumForLang = getRandomInt(4);

if (NumForLang == 0) {
    document.getElementById("subtitle").innerHTML = "John Lennon in 1981:";
}
if (NumForLang == 1) {
    document.getElementById("subtitle").innerHTML = "Jimi Hendrix in 1971:";
}
if (NumForLang == 2) {
    document.getElementById("subtitle").innerHTML = "Kurt Cobain in 1995:";
}
if (NumForLang == 3) { 
    document.getElementById("subtitle").innerHTML = "Marciano Cantero in 2023:";
}
if (NumForLang == 4) {
    document.getElementById("subtitle").innerHTML = "Joey Ramone in 2002:";
}