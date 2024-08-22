
function alerta () {
    const linea = document.getElementById("vertical_line");
    linea.style.transform = rotate(90)
}

const box = document.getElementById("box_btn");

box.addEventListener("click", alerta);
