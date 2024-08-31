
const barDisplayer = document.querySelector('.bar_displayer')

barDisplayer.addEventListener("click", function () {
    let sideBar = document.querySelector('.sidebar')
    let sideBarStyle = window.getComputedStyle(sideBar)
    let sideBarDisplay = sideBarStyle.getAttribute("display")
    sideBar.style.display = 'flex'
})

// function showSidebar(){
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display ='flex'
// }
// function hideSidebbar(){
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display ='none'
// }