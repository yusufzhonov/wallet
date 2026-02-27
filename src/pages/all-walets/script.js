import axios from "axios"
import { header } from '../../components/Header.js'
import { checkAuth } from '../../libs/auth.js'
import { render } from '../../libs/utils.js'
import { Card } from '../../components/Card.js'

header()
checkAuth()

let API_URL = import.meta.env.VITE_API_URL + "wallets"
const cardBox = document.querySelector('.card-box');
let emails = document.querySelectorAll(".emaili")
let exit = document.querySelector(".header_img")
let email = JSON.parse(localStorage.getItem("email"))

let currentUser = JSON.parse(localStorage.getItem("current"))
if (currentUser) {
    emails.forEach(item => {
        item.textContent = currentUser.email
    })
}

axios.get(API_URL)
    .then(res =>{
        console.log(res);
        console.log(res.data);
        render(res.data, cardBox, Card)
    })
    .catch(err => console.error(err))