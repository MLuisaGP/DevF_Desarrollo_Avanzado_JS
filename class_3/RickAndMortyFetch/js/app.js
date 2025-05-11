document.addEventListener('DOMContentLoaded',()=>{
    const container = document.getElementById('characterContainer');
    const beforeBtn = document.getElementById('btnBefore');
    const nextBtn = document.getElementById('btnNext');
    const currentPage = 1;

    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json()) //Convierte la respuesta en json
        .then(data=>{
            const characters = data.results;
            characters.forEach(character => {
                const card = document.createElement('section');
                card.classList.add('card');

                const characterImg = document.createElement('img');
                characterImg.src = character.image;

                const characterName = document.createElement('h2');
                characterName.textContent = character.name;

                card.appendChild(characterImg);
                card.appendChild(characterName);
               
                container.appendChild(card);
            });
        })
        .catch(error=>{
            console.error('Error fetching data',error);
            container.innerHTML='<p>Fallo la carga de personajes.</p>'
            
        })
})