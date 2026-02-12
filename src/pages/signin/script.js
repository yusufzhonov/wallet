let form = document.forms.signIn
let API_URL = "https://698c5d9121a248a273614fa0.mockapi.io/api/v1/users"

form.onsubmit = async (e) => {
    e.preventDefault()

    let fn = new FormData(form)

    let email = fn.get("email")
    let password = fn.get("password")

    if (!email || !password) {
        console.log("Пожалуйста заполните поля");
        return
    }

    try {
        const user = await findUserByEmail(email)

        if (!user) {
            console.log("Пользователь с таким email не найден");
            return
        }

        if (user.password !== password) {
            console.log("Неверный пароль");
            return
        }

        console.log("Вы успешно вошли", user);

    } catch (error) {
        console.error("Произошло ошибка при входе:", error);
    }
}

async function findUserByEmail(email) {
    const res = await fetch(`${API_URL}?email=${email}`)

    if (res.status === 404) {
        return null
    }

    const users = await res.json()
    return users[0] || null
}