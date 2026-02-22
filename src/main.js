import { checkAuth } from './libs/auth.js'
import { header } from './components/Header.js'
import { render } from './libs/utils.js'
import { Card } from './components/Card.js'
import { Transactions } from './components/Transactions.js'
import { wallets, transactions } from './database/db.js'

header()
checkAuth()

let currentUser = JSON.parse(localStorage.getItem("current"))
let emails = document.querySelectorAll(".emaili")
let titleElement = document.querySelector(".title")

if (currentUser) {
    emails.forEach(item => {
        item.textContent = currentUser.email
    })
    if (titleElement && currentUser.fullname) {
        titleElement.textContent = `Добро пожаловать, ${currentUser.fullname}`
    }
}

let cardBox = document.querySelector(".card-box")
if (cardBox) {
    render(wallets, cardBox, Card)
}

let tbody = document.querySelector(".tbody")
if (tbody) {
    render(transactions.slice(0, 5), tbody, Transactions)
}
