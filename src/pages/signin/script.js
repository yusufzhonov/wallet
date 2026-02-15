let form = document.forms.signIn
let API_URL = "https://698c5d9121a248a273614fa0.mockapi.io/api/v1/users"

form.onsubmit = async (e) => {
    e.preventDefault()

    let fn = new FormData(form)

    let email = fn.get("email")
    let password = fn.get("password")

    let res = await fetch(`${API_URL}?email=${email}`)

    if (res.status == 200) {
        let users = await res.json()
        
        if (users.length > 0 && users[0].password == password) {
            const currentUser = {
                fullname: `${users[0].name.firstname} ${users[0].name.lastname}`,  // ← ИЗМЕНЕНО
                email: users[0].email
            }

            localStorage.setItem("current", JSON.stringify(currentUser))
            window.location.href = '/'
        } else {
            alert("Неверный email или пароль")
        }
    } else {
        alert("Пользователь не найден")
    }
}