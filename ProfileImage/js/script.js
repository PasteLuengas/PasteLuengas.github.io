function procesar(){
    var urlimagen = document.getElementById("url-imagen");
    var imgMejorada = urlimagen.value.substring(0, urlimagen.value.length - 6);
    if (document.getElementById("checkbox-size").checked && document.getElementById("numer-size").value && document.getElementById("numer-size").value>0 && document.getElementById("numer-size").value<10001){
        var size = document.getElementById("numer-size").value;
        imgMejorada = imgMejorada+"=s"+size+"-c"
        document.getElementById("imagen").style="max-width: none;";
        document.getElementById("imagen").style.width= size + "px";
    }
    document.getElementById("imagen").src = imgMejorada;
    document.getElementById("imagen").style.display="block";
}

function sizeShow(){
    if (document.getElementById("checkbox-size").checked){
        document.getElementById("size-options").style.display="block";
    } else {
        document.getElementById("size-options").style.display="none";
    }
}