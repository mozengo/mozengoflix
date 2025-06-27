const filmes = [
  {
    nome: "Mozengo: O Filme",
    imagem: "img/filme1.jpg",
    trailer: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    views: 0
  },
  {
    nome: "Mozengo em Apuros",
    imagem: "img/filme2.jpg",
    trailer: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    views: 0
  }
];

function renderizarCatalogo() {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";
  filmes.forEach((filme, index) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = \`
      <img src="\${filme.imagem}" alt="\${filme.nome}">
      <h3>\${filme.nome}</h3>
      <button onclick="verTrailer('\${filme.trailer}')">🎬 Ver Trailer</button>
      <button onclick="contarVisualizacao(\${index})">👁️ Visualizações: <span id="views\${index}">\${filme.views}</span></button>
    \`;
    catalogo.appendChild(div);
  });
}

function verTrailer(link) {
  window.open(link, "_blank");
}

function contarVisualizacao(index) {
  filmes[index].views++;
  document.getElementById("views" + index).textContent = filmes[index].views;
}

function filtrar() {
  const valor = document.getElementById("searchInput").value.toLowerCase();
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";
  filmes
    .filter(filme => filme.nome.toLowerCase().includes(valor))
    .forEach((filme, index) => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = \`
        <img src="\${filme.imagem}" alt="\${filme.nome}">
        <h3>\${filme.nome}</h3>
        <button onclick="verTrailer('\${filme.trailer}')">🎬 Ver Trailer</button>
        <button onclick="contarVisualizacao(\${index})">👁️ Visualizações: <span id="views\${index}">\${filme.views}</span></button>
      \`;
      catalogo.appendChild(div);
    });
}

window.onload = renderizarCatalogo;
function fazerLogin() {
  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("mensagem");

  if (!username || !password) {
    msg.textContent = "Preencha todos os campos.";
    return;
  }

  if (role === "usuario" && username === "usuario" && password === "1234") {
    window.location.href = "home_usuario.html";
  } else if (role === "criador" && username === "criador" && password === "admin") {
    window.location.href = "painel_criador.html";
  } else {
    msg.textContent = "Usuário ou senha inválidos.";
  }
}
