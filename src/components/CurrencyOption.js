export function currencyOption (item) {
    let option = document.createElement('option')

    option.textContent = item
    option.value = item

    return option
}