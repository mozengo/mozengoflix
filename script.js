// Shared functions
function loadMovies() {
  const movies = JSON.parse(localStorage.getItem('mozengoflix_movies') || '[]');
  const container = document.getElementById('movies-list');
  if (!container) return;
  container.innerHTML = '';
  movies.forEach(m => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      ${m.image ? '<img src="'+m.image+'" alt="'+m.title+'">' : ''}
      <h3>${m.title}</h3>
      <p>${m.desc || ''}</p>
    `;
    container.appendChild(card);
  });
}

// Page load
document.addEventListener('DOMContentLoaded', () => {
  loadMovies();

  // Creator page logic
  const loginForm = document.getElementById('login-form');
  const creatorSection = document.getElementById('creator-section');
  const loginSection = document.getElementById('login-section');
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const user = document.getElementById('username').value;
      const pass = document.getElementById('password').value;
      if (user === 'creator' && pass === 'password') {
        loginSection.style.display = 'none';
        creatorSection.style.display = 'block';
      } else {
        alert('Credenciais inválidas');
      }
    });
  }

  const movieForm = document.getElementById('movie-form');
  if (movieForm) {
    movieForm.addEventListener('submit', e => {
      e.preventDefault();
      const title = document.getElementById('movie-title').value;
      const image = document.getElementById('movie-image').value;
      const desc = document.getElementById('movie-desc').value;
      const movies = JSON.parse(localStorage.getItem('mozengoflix_movies') || '[]');
      movies.push({ title, image, desc });
      localStorage.setItem('mozengoflix_movies', JSON.stringify(movies));
      movieForm.reset();
      alert('Filme adicionado com sucesso!');
    });
  }
});