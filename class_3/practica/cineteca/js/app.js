

console.log('Hola')
const container = document.getElementById('pokemonContainer')

axios.get('https://api.themoviedb.org/3/movie/popular', {
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
            peliculaImg.src = 'https://image.tmdb.org/t/p/w500/'+pelicula.poster_path;

            const peliculaName = document.createElement('h2');
            peliculaName.textContent = pelicula.title;

            card.appendChild(peliculaImg);
            card.appendChild(peliculaName);

            container.appendChild(card);
        })
    }).catch(error => {
        console.error('Error al traer pelis ', error)
        container.innerHTML = '<p> Fallo </p>'
    })