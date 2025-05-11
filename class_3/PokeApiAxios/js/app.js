

console.log('Hola')
const container = document.getElementById('pokemonContainer')

axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then(response => {
        const pokemons = response.data.results

        pokemons.forEach(pokemon => {
            axios.get(pokemon.url)
                .then(res => {
                    const pokeData = res.data;
                    const card = document.createElement('section')
                    card.classList.add('card')

                    const image = document.createElement('img')
                    image.src = pokeData.sprites.front_default
                    image.alt = pokeData.name

                    const name = document.createElement('h2')
                    name.textContent = pokeData.name;

                    card.appendChild(image)
                    card.appendChild(name)
                    container.appendChild(card)
                })
                .catch(err => {
                    console.error('Error al traer la informacion', err)
                })
        })
    }).catch(error => {
        console.error('Error al traer pokemons ', error)
        container.innerHTML = '<p> Fallo </p>'
    })