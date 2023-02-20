
import { allGames } from "./request.js";

allGames()

const input = document.querySelector('input');
const btn = document.querySelector('#btnInit');

function redirectPage () {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        if(input.value) {

            localStorage.setItem('userName', JSON.stringify(input.value))
            window.location.replace('/src/pages/dashboard.html')
        }else {
            alert('Preencha os campos!')
        }
        
    })
}
redirectPage()
