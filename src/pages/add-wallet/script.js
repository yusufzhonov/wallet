import axios from 'axios'
import { currencyOption } from '../../components/CurrencyOption.js'
import { render } from '../../libs/utils.js'

let form = document.querySelector('.form')
let select = document.querySelector('.type')
let API_wallets = import.meta.env.VITE_API_URL + "wallets"
let id = JSON.parse(localStorage.getItem('current'))

axios.get("https://api.apilayer.com/currency_data/list", {
    headers: {
        apikey: "2suEkN721euv1iSC53sBq5g81LaDDgpv"
    }
})
.then(res => {
    let currencies = res.data.currencies
    render(Object.keys(currencies), select, currencyOption)
})
.catch(() => {
    let fallback = ['USD', 'EUR', 'UZS', 'RUB', 'GBP', 'JPY', 'CNY', 'KZT', 'TRY']
    render(fallback, select, currencyOption)
})

form.onsubmit = (e) => {
    e.preventDefault()

    let fn = new FormData(form)

    axios.post(API_wallets, {
        name: fn.get('name'),
        balance: fn.get('amount'),
        currency: select.value,
        userId: id ? id.id : null
    })
    .then(() => {
        window.location.href = "/src/pages/all-walets/all_walets.html"
    })
    .catch(err => console.error(err))
}