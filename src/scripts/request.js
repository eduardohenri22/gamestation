
export async function allGames() {
    return await fetch(`https://rawg.io/api/games?key=2900fe04e92c4bb79789d5a0f0353435`,{
        method: "GET",
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        localStorage.setItem('games', JSON.stringify(data));
    })
}