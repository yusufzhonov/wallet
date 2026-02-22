import { logOut } from "../libs/auth.js"

export function header() {
	let header = document.querySelector("header")
	header.innerHTML = `<div class="container header_container">
            <div class="left">
                <a href="/">Главная</a>
				<a href="/src/pages/all-wallets/">Мои кошельки</a>
				<a href="/src/pages/transacts/">Мои транзакции</a>
            </div>
            <div class="right">
                <a href="#" class="emaili">alexadams@google.com</a>
                <img src="/log-out (1) 1.png" alt="" class="header_img" />
            </div>
        </div>`

	let exit = document.querySelector(".header_img")

	exit.onclick = () => {
		logOut()
	}
}