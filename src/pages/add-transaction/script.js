let transactions = JSON.parse(localStorage.getItem("transactions")) || []

let form = document.querySelector('.form')
let select = document.querySelector('.type')
let id = JSON.parse(localStorage.getItem('current'))
let inps = document.querySelector('.inp')

let regex = {
    name: /^(VISA|MasterCard|Humo|AgroBank)$/,
    amount: /^\d+$/
}

form.onsubmit = (e) => {
    e.preventDefault()

    let fn = new FormData(form)
    let check = true

    inps.forEach(item => {
        if(!regex[item.name].test(fn.get(item.name))) {
            check = false
            item.style.border = "2px solid red"
        } else {
            item.style.border = "1px solid #aaa"
        }
    })

    if(!check) return

    let newId = transactions.length + 1

    let transact = {
        id: newId,
        name: fn.get('from'),
        type: select.value,
        sum: fn.get("amount"),
        date: newDate().toISOString().slice(0, 10),
        userId: id.id
    }

    transactions.push(transact)

    localStorage.setItem("transactions", JSON.stringify(transactions))
    window.location.href = '/src/pages/transacts/'
}