// JavaScript source code


function elementoChequeado() {

    var c = document.getElementById("cuadradito");
    var p = document.getElementById("plumita");

    if (c.checked) {
        p.style.visibility = "visible"
        alert("Aceptaste las condiciones")
    } else {
        p.style.visibility = "hidden"
        alert("Deberas aceptar las condiciones")
    }

}

function validarFormulario() {
    
    var c = document.getElementById("cuadradito");
    var apellido = document.getElementById('apellido').value;
    var nombre = document.getElementById('nombre').value;

    if (nombre.length == 0) {
        alert('No has escrito nada en el nombre');
        return false;

    }
    if (apellido.length == 0) {
        alert('No has escrito nada en el apellido');
        return false;
    }


    if (isFinite(nombre) || isFinite(apellido)) {
        alert('No se permiten numeros');
        return false;

    }
    if (!c.checked) {
        alert("Debes aceptar las condiciones");
        return false;
    }

    const valores = {
        a: apellido,
        n: nombre
    };
    this.submit(window.open("reserva.html", "Tu reserva", "width = 800, height = 400, left = 200, top = 200 "));
}



function pasardatos(valores) {

    document.getElementById("datos") = valores

   

}

