import { header } from '../../components/Header.js'
import { checkAuth } from '../../libs/auth.js'
import { render } from '../../libs/utils.js'
import { Transactions } from '../../components/Transactions.js'
import { transactions } from '../../database/db.js'

header()
checkAuth()

let currentUser = JSON.parse(localStorage.getItem("current"))
let emails = document.querySelectorAll(".emaili")
if (currentUser) {
    emails.forEach(item => {
        item.textContent = currentUser.email
    })
}

let tbody = document.querySelector(".tbody")
if (tbody) {
    render(transactions, tbody, Transactions)
}
