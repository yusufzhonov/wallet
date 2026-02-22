import axios from "axios";

let form = document.forms.signUp
let API_URL = import.meta.env.VITE_API_URL

form.onsubmit = async (e) => {
    e.preventDefault();

    let fn = new FormData(form)

    const existingUser = await checkUserByEmail(fn.get("email"))

    if (existingUser) {
        alert("Пользователь с таким email уже существует");
        return
    }

    const res = await axios.post(API_URL, {
        name: {
            firstname: fn.get("firstName"),
            lastname: fn.get("lastName")
        },
        email: fn.get("email"),
        password: fn.get("password"),
        createdAt: new Date(),
    })

    const newUser = res.data

    const currentUser = {
        fullname: `${newUser.name.firstname} ${newUser.name.lastname}`,
        email: newUser.email
    }

    localStorage.setItem("current", JSON.stringify(currentUser))
    window.location.href = '/'

    console.log("Пользователь создан", newUser);
}

async function checkUserByEmail(email) {
    try {
        const res = await axios.get(`${API_URL}?email=${email}`)

        return res.data[0] || null;
    } catch (err) {
        console.error(err);
        return null;
    }
}
