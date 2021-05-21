function comentar(){
    document.forms["form-comment"].submit();
    Swal.fire(
        'El comentario se ha enviado con éxito',
        'Recuerda que esta página es estatica, tienes que esperar a que Paste insterte manualmente el comentario',
        'success'
      )
    document.getElementsByClassName("user").value="";
    document.getElementsByClassName("comment").value="";
}