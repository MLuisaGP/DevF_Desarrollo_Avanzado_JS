document.addEventListener('DOMContentLoaded', () => {
    let lang = 'es';
    const btnLang = document.getElementById('btnLang');
    const labelLang = document.getElementById('labelLang');
    const titleLang = document.getElementById('titleLang');
    const refLang = document.getElementById('refLang');
    
    btnLang.addEventListener('click',(e)=>{
        e.preventDefault();
        lang = ((lang==='es')?'en':'es');
        if(lang==='en'){
            labelLang.textContent = 'En';
            titleLang.textContent = 'Popular movies';
            refLang.textContent = 'This page made use of the API ';
        }
        else if(lang==='es'){
            labelLang.textContent = 'Es';
            titleLang.textContent = 'Peliculas Populares';
            refLang.textContent = 'Esta pagina dio uso de la api ';
        }
        setPeliculas(lang);
    })
    
});


function setPeliculas(idiom){
    const container = document.getElementById('popularSection');
    container.innerHTML='';
    axios.get(`https://api.themoviedb.org/3/movie/popular?language=${idiom}`, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDgwYWEwM2JhZjlkNjE2NTdjMzU2YTIzYzUzZDliMyIsIm5iZiI6MTc0NzI3MjMwNy4wNTIsInN1YiI6IjY4MjU0MjczYjVjZGYwMTIyZDg2NGVjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gLfTFPn1SSjlV9EMEOEUHwTKBdzPrbDNOC7_GFIIe4I',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            const peliculas = response.data.results
    
            peliculas.forEach(pelicula => {
                const card = document.createElement('section');
                card.classList.add('card');
    
                const peliculaImg = document.createElement('img');
                peliculaImg.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
    
                const divInf = document.createElement('DIV');
                divInf.classList='div-inf'
                const divImg = document.createElement('DIV');
                divImg.classList='div-img'
    
                const peliculaName = document.createElement('H3');
                peliculaName.textContent = pelicula.title;
                const peliculaDate = document.createElement('P');
                peliculaDate.textContent = pelicula.release_date;
                const peliculaInf = document.createElement('P');
                let texto = pelicula.overview;
                if (texto.length > 80) {
                    texto = texto.slice(0, 80) + '...';
                }
                peliculaInf.textContent = texto;
                divInf.appendChild(peliculaName);
                divInf.appendChild(peliculaDate);
                divInf.appendChild(peliculaInf);
                divImg.appendChild(peliculaImg);
                card.appendChild(divImg);
                card.appendChild(divInf);
    
                container.appendChild(card);
            })
        }).catch(error => {
            console.error('Error al traer las peliculas ', error)
            container.innerHTML = '<p> Fallo </p>'
        })    
}


