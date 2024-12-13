    // Fetch movie data from a JSON file
    fetch('movies.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const movieList = document.getElementById('movieList');
        data.forEach(movie => {
          const movieItem = document.createElement('div');
          movieItem.classList.add('item');
          const movieImage = document.createElement('img');
          movieImage.src = movie.image;
          movieImage.alt = movie.name;
          const movieContent = document.createElement('div');
          movieContent.classList.add('content');
          const movieName = document.createElement('div');
          movieName.classList.add('movieName');
          movieName.textContent = movie.name;
          const movieGenre = document.createElement('div');
          movieGenre.classList.add('genre');
          movieGenre.textContent = movie.genre;
          const movieDescription = document.createElement('div');
          movieDescription.classList.add('movieDescription');
          movieDescription.textContent = movie.description;
          const movieButton = document.createElement('div');
          movieButton.classList.add('movieButton');
          const watchTrailerButton = document.createElement('button');
          watchTrailerButton.classList.add('btn1');
          watchTrailerButton.textContent = 'Watch Trailer';
          const seeMoreButton = document.createElement('button');
          seeMoreButton.classList.add('btn2');
          seeMoreButton.textContent = 'See More';
          movieButton.appendChild(watchTrailerButton);
          movieButton.appendChild(seeMoreButton);
          movieContent.appendChild(movieName);
          movieContent.appendChild(movieGenre);
          movieContent.appendChild(movieDescription);
          movieContent.appendChild(movieButton);
          movieItem.appendChild(movieImage);
          movieItem.appendChild(movieContent);
          movieList.appendChild(movieItem);
        });
      })
      .catch(error => console.error('Error fetching movie data:', error));


