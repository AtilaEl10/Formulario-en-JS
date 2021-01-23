
const boton = document.getElementById("submit");

boton.addEventListener("click", function() {
    let nombre = document.getElementById("name"); 
    let apellido = document.getElementById("apellido"); 
    let fono = document.getElementById("fono"); 
    let mail = document.getElementById("mail"); 
    let user = document.getElementById("user");
    let pass = document.getElementById("pass"); 

    if (nombre.value == "") {
        alert("Debes ingresar un Nombre");
    } else if (nombre.value.length >30) {
        alert("El nombre no debe contener mas de 30 carácteres");
    }
    if (apellido.value == "") {
        alert("Debes ingresar al menos un Apellido");
    } else if (apellido.value.length >80) {
        alert("Los apellidos no deben superar los 80 carácteres");
    }
    if (fono.value == "") {
        alert("Debes ingresar un Número de Teléfono");
    } else if (fono.value.length >30) {
        alert("El numero de teléfono no debe contener mas de 15 carácteres");
    }
    if (mail.value == "") {
        alert("Debes ingresar un Correo");
    } else if (mail.value.length >100) {
        alert("El correo no debe contener mas de 100 carácteres");
    }
    if (user.value == "") {
        alert("Debes ingresar un Usuario válido");
    } else if (user.value.length >20) {
        alert("El usuario no debe contener mas de 20 carácteres");
    }
    if ((nombre.value != "") && (apellido.value != "") && (fono.value != "") && (mail.value != "") && (user.value != "") && (pass.value != "")) {
        alert("Bienvenido " + nombre.value + " " + apellido.value + " gracias por registrarte, tu usuario es " + user.value + " y tu contraseña es " + pass.value);
    }
});
