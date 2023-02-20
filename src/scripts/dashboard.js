const header = document.querySelector('header');
const getUserName = JSON.parse(localStorage.getItem('userName'))

export function profileDashboard(userName) {

    const h3UserName = document.createElement('h3')
    h3UserName.classList.add("h3UserName")
    h3UserName.innerText = `Olá, ${userName.substring(0,15)}!`


    header.append(h3UserName)
}
profileDashboard(`${getUserName}`)

function renderGames() {
    const getGames = JSON.parse(localStorage.getItem('games'));

    const getUl = document.querySelector('ul');

    getGames.results.forEach(elemento => {
        const liCard = document.createElement('li');
        getUl.append(liCard);

        const boxGamer = document.createElement('div');
        boxGamer.setAttribute('class', 'boxGamer');
        liCard.append(boxGamer);
        
        const imgCard = document.createElement('img');
            imgCard.src = elemento.background_image
            boxGamer.append(imgCard);

    })


}
renderGames()