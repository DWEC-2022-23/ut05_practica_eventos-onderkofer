window.addEventListener("keydown", (e) => {
    caja.innerText = `Caracter='${e.key}'\nCodigo='${e.code}'`
    caja.style.backgroundColor = "#CCE6FF"
});


let caja = document.getElementById("info")
document.addEventListener('mousemove', position);
document.addEventListener('click', clicky);

function position(e) {
    caja.innerText = `Navegador ${e.screenX},${e.screenY}\n
        Página ${e.clientX},${e.clientY}`;
    caja.style.backgroundColor = ""
}
function clicky(e) {
    caja.style.backgroundColor = "#FFFFCC"
}
