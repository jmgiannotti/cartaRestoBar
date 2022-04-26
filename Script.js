// JavaScript source code
function elementoChequeado() {
    if (document.getElementById("cuadradito").checked) {
        document.getElementById("plumita").style.visibility = "visible"
        alert("Aceptaste las condiciones")
    } else {
        document.getElementById("plumita").style.visibility = "hidden"
        alert("Deberas aceptar las condiciones")
    }
}

function openWin() {
    window.open("reserva.html", "Tu reserva", "width = 800, height = 400, left = 200, top = 200 ")

}