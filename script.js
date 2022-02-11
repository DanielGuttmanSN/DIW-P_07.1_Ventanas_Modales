function mostrar() {
    let modalbox = document.getElementById("box");
        modalbox.style.visibility = "visible";
        document.getElementById("fondo").style.visibility = "visible";
}
function cerrar() {
    let modalbox = document.getElementById("box");
        modalbox.style.visibility = "hidden";
        document.getElementById("fondo").style.visibility = "hidden";
    if(!document.getElementById("cerradomensaje")){
    let cerrado = document.createElement("h3");
    cerrado.setAttribute("id","cerradomensaje");
        cerrado.innerText = "Has cerrado la ventana";
    document.getElementById("cerrado").append(cerrado);
    }
}
function enviar() {
    let modalbox = document.getElementById("box");
        modalbox.style.visibility = "hidden";
        document.getElementById("fondo").style.visibility = "hidden";
    if(document.getElementById("cerradomensaje")){
        document.getElementById("cerrado").style.visibility = "hidden";
    }
    if(!document.getElementById("usuario")) {
        let botonpulsado = document.createElement("h3");
            botonpulsado.innerText = "Los datos han sido enviados";
        document.getElementById("datos").append(botonpulsado);
        let datos = document.createElement("p");
        datos.setAttribute("id","usuario")
            datos.innerText = "Usuario: "+ document.getElementById("12").value;
        document.getElementById("datos").append(datos);
        let psswrd1 = document.getElementById("22").value;
        let psswrd2 = document.getElementById("32").value;
        if(psswrd1 != psswrd2){
            let contrasenha = document.createElement("p");
            contrasenha.setAttribute("id", "psswrd");
            contrasenha.innerText = "Las contraseñas no coinciden";
        document.getElementById("datos").append(contrasenha);
        } else {
            let contrasenha = document.createElement("p");
                contrasenha.setAttribute("id", "psswrd");
                contrasenha.innerText = "Las contraseñas coinciden";
            document.getElementById("datos").append(contrasenha);
        }
    } else {
        document.getElementById("usuario").innerText = "Usuario: "+ document.getElementById("12").value;
        if(document.getElementById("22").value != document.getElementById("32").value){
            document.getElementById("psswrd").innerText = "Las contraseñas no coinciden";
        } else {
            document.getElementById("psswrd").innerText = "Las contraseñas coinciden";
    }}}