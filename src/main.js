import axios from "axios"
import { checkAuth } from './libs/auth.js'
import { header } from './components/Header.js'
import { render } from './libs/utils.js'
import { Card } from './components/Card.js'
import { Transactions } from './components/Transactions.js'
import { transactions } from './database/db.js'

header()
checkAuth()

let currentUser = JSON.parse(localStorage.getItem("current"))
let tbody = document.querySelector("tbody")
let cardBox = document.querySelector(".card-box")
let API_URL = import.meta.env.VITE_API_URL + "wallets"
let emails = document.querySelectorAll(".emaili")
let exit = document.querySelector(".header_img")
let email = JSON.parse(localStorage.getItem("email"))
let titleElement = document.querySelector(".title")

if (currentUser) {
    emails.forEach(item => {
        item.textContent = currentUser.email
    })
    if (titleElement && currentUser.fullname) {
        titleElement.textContent = `Добро пожаловать, ${currentUser.fullname}`
    }
}

axios.get(API_URL)
    .then(res => {
        console.log(res)
        console.log(res.data)
        render(res.data.slice(0, 4), cardBox, Card)
    })
    .catch(err => {
        console.error("Ошибка загрузки кошельков:", err)
    })

render(transactions, tbody, Transactions)