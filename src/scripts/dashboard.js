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

    getGames.results.forEach(game => {
    
        const liCard = document.createElement('li');
        getUl.append(liCard);

        const boxGamer = document.createElement('div');
        boxGamer.setAttribute('class', 'boxGamer');
        liCard.append(boxGamer);
        
        const imgCard = document.createElement('img');
            imgCard.src = game.background_image
            boxGamer.append(imgCard);

        const nameGame = document.createElement('h3')
         nameGame.setAttribute('class', 'h3NameGame')
          nameGame.innerText = game.name
            boxGamer.append(nameGame)
        
        // game.platforms.forEach(platform => {
        //     console.log(platform)
        //     const pRequiriments = document.createElement('p')
        //     pRequiriments.innerText = `Requisitos: ${platform.platform.requirements_en.recommended}`
        // });
        

        // const yearGame = document.createElement('span')
        //  yearGame.setAttribute('class', 'spanYearGame')
        //     yearGame.innerText = `Ano: ${game.released}`
        //     boxGamer.append(yearGame)

    })



}
renderGames()