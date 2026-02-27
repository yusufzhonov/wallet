import axios from 'axios'
import { currencyOption } from './components/CurrencyOption.js'
import { render } from '../../libs/utils.js'

let form = document.querySelector('.form')
let select = document.querySelector('.type')
let API_user = import.meta.env.VITE_API_URL + "users"
let id = JSON.parse(localStorage.getItem('current'))
let API_wallets = import.meta.env.VITE_API_URL + "wallets"
let inps = document.querySelector('.inp')

let regex = {
    name: /^(VISA|MasterCard|Humo|AgroBank)$/,
    amount: /^\d+$/
}

form.onsubmit = (e) => {
    e.preventDefault()

    let fn = new FormData(form)
    let check = true

    if (!check) return

    axios.post(`${API_wallets}?userId=${id.id}`, {
        name: fn.get('name'),
        balance: fn.get('amount'),
        currency: select.value,
        userId: id.id
    })

    .then(() => window.location.href = "/src/pages/all-wallets/")
}

axios.get("https://api.apilayer.com/currency_data/list?base=USD&symbols=EUR,GBP", {
      headers: {
        apikey: "2suEkN721euv1iSC53sBq5g81LaDDgpv"
    }
})

.then(res => render(res.data.currencies, select, currencyOption))