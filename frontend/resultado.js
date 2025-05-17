document.getElementById("buscar-btn").addEventListener("click", function () {
  const cpf = document.getElementById("busca").value.trim();
  const tutores = JSON.parse(localStorage.getItem("tutores")) || [];
  const pets = JSON.parse(localStorage.getItem("pets")) || [];

  const tutor = tutores.find((t) => t.cpf === cpf);
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = "";

  if (!tutor) {
    resultadosDiv.innerHTML = "<p>Tutor não encontrado.</p>";
    return;
  }

  const petsDoTutor = pets.filter((p) => p.tutorId === cpf);

  let html = `
    <h2>Informações do Tutor</h2>
    <p><strong>Nome:</strong> ${tutor.nome}</p>
    <p><strong>CPF:</strong> ${tutor.cpf}</p>
    <p><strong>Email:</strong> ${tutor.email}</p>
    <p><strong>Telefone:</strong> ${tutor.telefone}</p>
    <p><strong>Endereço:</strong> ${tutor.endereco}</p>
    <hr/>
    <h2>Pets do Tutor</h2>
  `;

  if (petsDoTutor.length === 0) {
    html += "<p>Nenhum pet cadastrado para este tutor.</p>";
  } else {
    petsDoTutor.forEach((pet, i) => {
      html += `
        <h3>Pet ${i + 1}</h3>
        <p><strong>Nome:</strong> ${pet.nome}</p>
        <p><strong>Espécie:</strong> ${pet.especie}</p>
        <p><strong>Raça:</strong> ${pet.raca}</p>
        <p><strong>Idade:</strong> ${pet.idade}</p>
        <p><strong>Sexo:</strong> ${pet.sexo}</p>
        <p><strong>Castrado:</strong> ${pet.castrado}</p>
        <p><strong>Antipulgas:</strong> ${pet.antipulgas}</p>
        <p><strong>Medicamentos:</strong> ${pet.medicamentos}</p>
        <p><strong>Banho de saída:</strong> ${pet.banho}</p>
        <p><strong>Histórico:</strong> ${pet.historico}</p>
        <p><strong>Observações:</strong> ${pet.observacoes}</p>
        <hr/>
      `;
    });
  }
  document.getElementById("downloadBtn").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const fichaText = document.getElementById("resultados").innerText;

  const margin = 10;
  const lineHeight = 7;
  const lines = doc.splitTextToSize(fichaText, 180);
  let y = margin;

  lines.forEach((line) => {
    if (y + lineHeight > 280) {
      doc.addPage();
      y = margin;
    }
    doc.text(line, margin, y);
    y += lineHeight;
  });

  doc.save("ficha_pet.pdf");
});

  resultadosDiv.innerHTML = html;

});
