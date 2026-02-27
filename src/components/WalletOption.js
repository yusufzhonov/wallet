export function WalletOption(item) {
    let option = document.createElement('option')

    option.textContent = `${item.name} — ${item.balance} ${item.currency || ''}`
    option.value = item.name

    return option
}
