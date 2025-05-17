document.getElementById("petForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = new FormData(this);
  const especie = form.get("especie") === "Outro" ? form.get("outraEspecie") : form.get("especie");

  const pet = {
    nome: form.get("nome"),
    especie: especie,
    raca: form.get("raca"),
    idade: form.get("idade"),
    sexo: form.get("sexo"),
    castrado: form.get("castrado"),
    antipulgas: form.get("antipulgas"),
    medicamentos: form.get("medicamentos"),
    banho: form.get("banho"),
    historico: form.get("historico"),
    observacoes: form.get("observacoes"),
    imagem: "", // simplificado, não armazena imagem no localStorage
    tutorId: form.get("tutorId"),
  };

  if (!pet.tutorId) {
    pet.tutorId = prompt("Digite o CPF do tutor responsável:");
  }

  const tutores = JSON.parse(localStorage.getItem("tutores")) || [];
  const tutor = tutores.find((t) => t.cpf === pet.tutorId);

  if (!tutor) {
    alert("CPF de tutor não encontrado.");
    return;
  }

  const pets = JSON.parse(localStorage.getItem("pets")) || [];
  pets.push(pet);
  localStorage.setItem("pets", JSON.stringify(pets));
  alert("Pet cadastrado com sucesso!");
  this.reset();
});

function checkOutraEspecie(select) {
  const input = document.getElementById("outraEspecie");
  input.style.display = select.value === "Outro" ? "block" : "none";
}
