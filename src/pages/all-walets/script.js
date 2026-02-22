import { header } from '../../components/Header.js'
import { checkAuth } from '../../libs/auth.js'
import { render } from '../../libs/utils.js'
import { Card } from '../../components/Card.js'
import { wallets } from '../../database/db.js'

header()
checkAuth()

let currentUser = JSON.parse(localStorage.getItem("current"))
let emails = document.querySelectorAll(".emaili")
if (currentUser) {
    emails.forEach(item => {
        item.textContent = currentUser.email
    })
}

let cardBox = document.querySelector(".card-box")
if (cardBox) {
    render(wallets, cardBox, Card)
}
