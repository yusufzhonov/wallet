import axios from "axios"

let form = document.forms.signIn
let API_URL = import.meta.env.VITE_API_URL + "users";

form.onsubmit = async (e) => {
    e.preventDefault()

    let fn = new FormData(form)

    let email = fn.get("email")
    let password = fn.get("password")

    try {
        let res = await axios.get(`${API_URL}?email=${email}`)

    if (res.status == 200) {
        let users = res.data[0]
        
        if (users.password == password) {
            const currentUser = {
                fullname: `${users.name.firstname} ${users.name.lastname}`,
                email: users.email
            }

            localStorage.setItem("current", JSON.stringify(currentUser))
            window.location.href = '/'
        } else {
            alert("Неверный email или пароль")
        }
    } else {
        alert("Пользователь не найден")
    }
    } catch (error) {
        console.log(error);
        throw error
    }
}