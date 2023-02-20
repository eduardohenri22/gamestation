import { profileDashboard } from "./dashboard.js";
import { allGames } from "./request.js";

allGames()

const input = document.querySelector('input');
const btn = document.querySelector("#btnInit");
const header = document.querySelector('header');

function redirectPage () {
    btn.addEventListener('click',  (e) => {
        e.preventDefault()
    
    if(input.value) {
        localStorage.setItem('userName', JSON.stringify(input.value));
        window.location.replace('/src/pages/dashboard.html');
        const getUserName = JSON.parse(localStorage.getItem('userName'));
        const h3UserName = document.createElement('h3');
        h3UserName.innerText = `Olá,${getUserName}`
        header.append(h3UserName);
    }
        console.log(input.value)
        
    })
}
redirectPage()
