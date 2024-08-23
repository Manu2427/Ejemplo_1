
const boxes = document.getElementsByClassName("box_btn")
const options = document.getElementsByClassName("options")
let click = [false, false, false, false]

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        const lineas = document.getElementsByClassName("vertical_line")
        if (click[i] == false) {
            lineas[i].style.transform = 'rotate(-90deg)'
            options[i].style.height = '150px'
            click[i] = true
        } else {
            lineas[i].style.transform = 'rotate(0deg)'
            options[i].style.height = '0px'
            click[i] = false
        }
    })
}
