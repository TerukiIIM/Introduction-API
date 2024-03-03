const key = ""
function fetchStarwars() {
    const language = "fr-FR"
    return fetch(`https://api.themoviedb.org/3/movie/1895?api_key=${key}&language=${language}`).then(r => r.json())
}

async function displayStarWars() {
    const data = await fetchStarwars()
    
    if (key === "") {
        document.getElementById("starWars").innerHTML = `
        <h1>VEUILLEZ ENTRER VOTRE CLÉ API DANS LE FICHIER MOVIE.JS</h1>
        `
    } else {
        document.getElementById("starWars").innerHTML = `
        <h1>${data.title}</h1>
        <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}"/>
        `
    }
}

displayStarWars()