const header = document.querySelector('header');
const getUserName = JSON.parse(localStorage.getItem('userName'))
const getGames = JSON.parse(localStorage.getItem('games'));

export function profileDashboard(userName) {

    const h3UserName = document.createElement('h3')
    h3UserName.classList.add("h3UserName")
    h3UserName.innerText = `Olá, ${userName.substring(0,15)}!`


    header.append(h3UserName)
}
profileDashboard(`${getUserName}`)

function renderGames() {

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
        
            // console.log(game)

        const pYearGame = document.createElement('p')
        pYearGame.setAttribute('class', 'pYearGame')
        pYearGame.innerText = game.released
        boxGamer.append(pYearGame)

        const pGameTags = document.createElement('p')
        pGameTags.setAttribute('class', 'pGameTags')
        pGameTags.innerText = game.tags[0].name
        boxGamer.append(pGameTags)

        const divBtOpen = document.createElement('div')
        divBtOpen.setAttribute('class', 'divBtOpen')

        const btOpenGame = document.createElement('button')
        btOpenGame.setAttribute('class', 'btOpenGame')
        btOpenGame.innerText = 'Ver Fotos'

        btOpenGame.addEventListener('click', function() {


            // console.log(game.short_screenshots[0].image)
            const modalController = document.querySelector('.modalController')
                modalController.showModal()

            const btCloseModal = document.querySelector('.btCloseModal')
            
            btCloseModal.addEventListener('click', () => {
                modalController.close()
            })

            const contentModal = document.querySelector('.contentModal')
            contentModal.innerHTML = ''
           game.short_screenshots.forEach(element => {
            console.log(game.short_screenshots)
                const imgModal = document.createElement('img')
                const aDownload = document.createElement('a')
                 aDownload.setAttribute('class', 'aDownload')

                aDownload.innerText = 'Download'
                aDownload.setAttribute('target', 'blank')
                
                aDownload.addEventListener('click', ()=>{
                    aDownload.href = element.image
                    aDownload.click();
                })

                imgModal.setAttribute('class', 'imgModal')

                imgModal.src = `${element.image}`

                contentModal.append(imgModal, aDownload)

            }); 
        })

        

        boxGamer.append(divBtOpen)
        divBtOpen.append(btOpenGame)
    })



}
renderGames()

