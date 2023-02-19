const header = document.querySelector('header');

export function profileDashboard() {
    const getUserName = JSON.parse(localStorage.getItem('userName'));

    const h3UserName = document.createElement('h3');
        h3UserName.innerText = `Olá,${getUserName}`
        header.append(h3UserName);
}   
profileDashboard()