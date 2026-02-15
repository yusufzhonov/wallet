let form = document.forms.signUp
let API_URL = "https://698c5d9121a248a273614fa0.mockapi.io/api/v1/users"


form.onsubmit = async (e) => {
    e.preventDefault();

    let fn = new FormData(form)

    const existingUser = await checkUserByEmail(fn.get("email"))
    
    if (existingUser) {
        console.log("Пользователь с таким email уже существует", existingUser);
        return
    }
    
    const res = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
            name: {
                firstname: fn.get("firstName"),
                lastname: fn.get("lastName")
            },
            email: fn.get("email"),
            password: fn.get("password"),
            createdAt: new Date(),
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })

    const newUser = await res.json()

    const currentUser = {
        fullname: `${newUser.name.firstName} ${newUser.name.lastName}`,
        email: newUser.email
    }

    localStorage.setItem("current", JSON.stringify(currentUser))
    window.location.href = '/'

    console.log("Пользователь создан", newUser);
}

async function checkUserByEmail(email) {
    const res = await fetch(`${API_URL}?email=${email}`)

    if (res.status === 404) {
        return null
    }

    const users = await res.json()

    return users[0] || null
}