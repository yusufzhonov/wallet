import axios from "axios"
import { header } from '../../components/Header.js'
import { checkAuth } from '../../libs/auth.js'
import { render } from '../../libs/utils.js'
import { Card } from '../../components/Card.js'

header()
checkAuth()

let API_URL = import.meta.env.VITE_API_URL + "wallets"
const cardBox = document.querySelector('.card-box')
let emails = document.querySelectorAll(".emaili")

let currentUser = JSON.parse(localStorage.getItem("current"))
if (currentUser) {
    emails.forEach(item => {
        item.textContent = currentUser.email
    })
    let titleEl = document.querySelector(".title")
    if (titleEl && currentUser.name) {
        titleEl.textContent = "Добро пожаловать, " + currentUser.name
    }
    let emailEl = document.querySelector(".email")
    if (emailEl) {
        emailEl.textContent = currentUser.email
    }
}

if (cardBox) {
    axios.get(API_URL)
        .then(res => {
            console.log(res.data)
            render(res.data, cardBox, Card)
        })
        .catch(err => console.error(err))
}
