import axios from 'axios'
import { render } from '../../libs/utils.js'
import { WalletOption } from '../../components/WalletOption.js'

let form = document.querySelector('.form')
let walletSelect = document.querySelector('.wallet-select')
let typeSelect = document.querySelector('.type')
let id = JSON.parse(localStorage.getItem('current'))
let API_wallets = import.meta.env.VITE_API_URL + "wallets"

axios.get(API_wallets)
    .then(res => {
        render(res.data, walletSelect, WalletOption)
    })
    .catch(err => console.error(err))

form.onsubmit = (e) => {
    e.preventDefault()

    let fn = new FormData(form)
    let transactions = JSON.parse(localStorage.getItem("transactions")) || []

    let newTransaction = {
        id: transactions.length + 1,
        name: fn.get('from'),
        type: typeSelect.value,
        sum: Number(fn.get('amount')),
        date: new Date().toISOString().slice(0, 10),
        userId: id ? id.id : null
    }

    transactions.push(newTransaction)
    localStorage.setItem("transactions", JSON.stringify(transactions))

    window.location.href = '/src/pages/transacts/'
}