export function checkAuth() {
    const user = localStorage.getItem("current")

    if (!user) {
        window.location.href = '/src/pages/signin/'
    }
}

export function logOut() {
    localStorage.removeItem("current")
    window.location.href = '/src/pages/signin/'
}