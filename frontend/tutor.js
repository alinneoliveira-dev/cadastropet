document.getElementById("tutorForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const tutor = {
    nome: document.getElementById("nome").value,
    cpf: document.getElementById("cpf").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    endereco: document.getElementById("endereco").value,
  };

  let tutores = JSON.parse(localStorage.getItem("tutores")) || [];

  // Evita duplicação de CPF
  const cpfExistente = tutores.some((t) => t.cpf === tutor.cpf);
  if (cpfExistente) {
    alert("CPF já cadastrado.");
    return;
  }

  tutores.push(tutor);
  localStorage.setItem("tutores", JSON.stringify(tutores));
  alert("Tutor cadastrado com sucesso!");
  this.reset();
});
