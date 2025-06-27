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