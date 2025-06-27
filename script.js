const filmes = [
  { nome: "Mozengo: O Filme", imagem: "img/filme1.jpg" },
  { nome: "A Vingança do Mozengo", imagem: "img/filme2.jpg" },
  { nome: "Série: Mozengo em Apuros", imagem: "img/serie1.jpg" },
  { nome: "Comédia Mozenga", imagem: "img/serie2.jpg" },
];

function renderizarCatalogo() {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";
  filmes.forEach((filme) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = \`
      <img src="\${filme.imagem}" alt="\${filme.nome}">
      <h3>\${filme.nome}</h3>
    \`;
    catalogo.appendChild(div);
  });
}

function filtrar() {
  const valor = document.getElementById("searchInput").value.toLowerCase();
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";
  filmes
    .filter((f) => f.nome.toLowerCase().includes(valor))
    .forEach((filme) => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = \`
        <img src="\${filme.imagem}" alt="\${filme.nome}">
        <h3>\${filme.nome}</h3>
      \`;
      catalogo.appendChild(div);
    });
}

window.onload = renderizarCatalogo;