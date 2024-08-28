
const boxes = document.getElementsByClassName("box_btn")
const options = document.getElementsByClassName("options")
let click = [false, false, false, false]

function alerta (e) {
    let target = e.target
    let lineaVertical = target.querySelector(".linea_vertical")
    let parent = target.parentElement.parentElement
    let options = parent.querySelector(".options")
    options.style.height = '200px'
    parent.style.backgroundColor = 'red'
    target.style.backgroundColor = 'red'
    lineaVertical.style.transform = 'rotate(-90deg)'
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", alerta)
        // function (e) {
        // const lineas = document.getElementsByClassName("vertical_line")
        // if (click[i] == false) {
        //     lineas[i].style.transform = 'rotate(-90deg)'
        //     options[i].style.height = '150px'
        //     // let child = options[i].children
        //     // for (element in child) {
        //     //     element.style.opacity = '0'
        //     // }
        //     click[i] = true
        // } else {
        //     lineas[i].style.transform = 'rotate(0deg)'
        //     options[i].style.height = '0px'
        //     // for (element in child) {
        //     //     element.style.opacity = '1'
        //     // }
        //     click[i] = false
        // }
//    })
}
