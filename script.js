const menu = document.querySelector('#menu')
const closeBtn = document.querySelector('#close')
const menuM = document.querySelector('.menu_m')
const body = document.querySelector('#body')

if (menu) {
    menu.addEventListener('click', () =>{
        menu.style.display = 'none'
        closeBtn.style.display = 'block'
        menuM.style.display = 'block'
        body.style.backgroundColor = "hsl(0, 0%, 64%)"
    })
}
closeBtn.addEventListener('click', () =>{
    menu.style.display = 'block'
    closeBtn.style.display = 'none'
    menuM.style.display = 'none'
    body.style.backgroundColor = "#fff"
})