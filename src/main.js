import { checkAuth, logOut } from './libs/auth.js'

let exit = document.querySelector(".header_img")
let emails = document.querySelectorAll(".emaili")
let titleElement = document.querySelector(".title")

checkAuth()

let currentUser = JSON.parse(localStorage.getItem("current"))

exit.onclick = () => {
    logOut()
}

if (currentUser) {
    emails.forEach(item => {
        item.textContent = currentUser.email
    })
    
    if (titleElement && currentUser.fullname) {
        titleElement.textContent = `Добро пожаловать, ${currentUser.fullname}`
    }
}