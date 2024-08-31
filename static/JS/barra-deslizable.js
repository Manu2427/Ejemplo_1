
let thumb = document.getElementById("thumb")

function moveThumb (e) {
    thumb.style.backgroundColor = 'red'
    function moveAt(x) {
        thumb.style.left = x
    }

    moveAt(e.pageX)
}

thumb.addEventListener("click", moveThumb)