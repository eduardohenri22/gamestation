const header = document.querySelector('header');
const getUserName = JSON.parse(localStorage.getItem('userName'))

export function profileDashboard(userName) {    
    
    const h3UserName = document.createElement('h3')
    h3UserName.classList.add("h3UserName")
    h3UserName.innerText = `Olá, ${userName.substring(0,15)}!`


    header.append(h3UserName)
}

profileDashboard(`${getUserName}`)