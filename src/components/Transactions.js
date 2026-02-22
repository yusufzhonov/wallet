export function Transactions(item) {
    let transaction = document.createElement("tr")
    
    transaction.innerHTML= `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.type}</td>
            <td>${item.sum}</td>
            <td>${getDaysAgo(item.date)+ " дней назад"}</td>
          `
    return transaction
}
function getDaysAgo(dateString) {
  const today = new Date()
  const past = new Date(dateString)

  const diff = today - past
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))

  return days
}