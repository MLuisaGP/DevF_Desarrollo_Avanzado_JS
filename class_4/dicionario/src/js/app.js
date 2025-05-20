document.addEventListener('DOMContentLoaded',()=>{
    start();
})

function start(){
    const formSearch = document.getElementById('searchInput');
    formSearch.addEventListener('submit',(e)=>{
        e.preventDefault();
        const word = document.getElementById('search');
        
        mostrarPalabra(word.value);
        word.value='';
    })
}

function mostrarPalabra(word){
    const container = document.getElementById('dictionarySection');
    container.innerHTML='';
    getApi(word)
        .then(data => {
            palabra = data[0];
            const titulo = document.createElement('H2');
            titulo.textContent=palabra.word;
            container.appendChild(titulo);

            
            const phonetics = palabra.phonetics??null;
            
            if (phonetics){
                const phoneticSection = document.createElement('DIV');
                phoneticSection.className='dictionary__phonetic';

                const audioSect = document.createElement('AUDIO');
                audioSect.controls=true;
                const audioSource = document.createElement('source');
                audioSource.src = phonetics[phonetics.length - 1].audio;
                const phoneticTxt = document.createElement('P');
                phoneticTxt.textContent = phonetics[phonetics.length - 1].text;
                
                audioSect.appendChild(audioSource);
                phoneticSection.appendChild(phoneticTxt);
                phoneticSection.appendChild(audioSect);

                container.appendChild(phoneticSection);
            }
            const definitionSection = document.createElement('DIV');
           definitionSection.className = 'dictionary__definition';
            const definitionList = document.createElement('UL');

            let defini = palabra.meanings[0].definitions;

            defini.forEach(definition => {
                const definitionElement = document.createElement('LI');
               definitionElement.textContent = definition.definition;
                definitionList.appendChild(definitionElement);
            });
            definitionSection.appendChild(definitionList);
            container.appendChild(definitionSection);

        })
        .catch((err) =>{
            container.innerHTML ='<p class="no-search">Palabra no encontrada.</p>';
            console.error('Error al hacer fetch',err);
        }
        )
    
    
}

async function getApi(word){
    const inf = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(data => data)
        .catch(err => {
            console.error('Error fetching data', err);
            return '<p>Fallo la carga de personajes.</p>'
        });

    return inf;
}