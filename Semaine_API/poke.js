fetch("https://pokeapi.co/api/v2/pokemon/1002").then(r => r.json()).then(data => {
    console.log(data)
})

function fetchPoke(poke) {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + poke).then(r => r.json())
}

async function displayPoke(poke) {
    const data = await fetchPoke(poke)
    document.getElementById("pokemon").innerHTML = `
    <h1>${data.name}</h1>
    <img src="${data.sprites.front_shiny}" alt="${data.name}"/>
    `
}

displayPoke("570")