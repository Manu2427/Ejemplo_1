
const boxes = document.getElementsByClassName("box_btn")

function alerta (e) {
    let target = e.target
    let lineaVertical = target.querySelector(".linea_vertical")
    let parent = target.parentElement.parentElement
    let optionsBox = parent.querySelector(".options")
    let options = optionsBox.querySelectorAll(".option")
    let priceBar = optionsBox.querySelector(".contenedor_rango_precios")
    let optionsStyle = window.getComputedStyle(optionsBox)
    let optionsheight = optionsStyle.getPropertyValue("height")
    if (optionsheight == "0px") {
        optionsBox.style.height = '200px'
        lineaVertical.style.transform = 'rotate(-90deg)'
        for (element of options) {
            element.style.opacity = '100'
        }
        if (priceBar) {
            priceBar.style.opacity = '100'
        }
    } else {
        optionsBox.style.height = '0px'
        lineaVertical.style.transform = 'rotate(0deg)'
        for (element of options) {
            element.style.opacity = '0'
        }
        if (priceBar) {
            priceBar.style.opacity = '0'
        }
    }
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", alerta)
}
