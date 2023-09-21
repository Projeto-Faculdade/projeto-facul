document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const dadosDoFormulario = document.getElementById('dadosDoFormulario')

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        let date = document.getElementById('date').value;
        let datePart = date.split('-');
        let dateConverted = datePart[2] + '/' + datePart[1] + '/' + datePart[0];
        const atividade = document.getElementById('atividade').value;
        const disciplina = document.getElementById('disciplina').value;

        const novoParagrafo = document.createElement('li');
        novoParagrafo.textContent = `${dateConverted} - ${atividade} - ${disciplina}`;

        dadosDoFormulario.appendChild(novoParagrafo);

        document.getElementById('date').value = '';
        document.getElementById('atividade').value = '';
        document.getElementById('disciplina').value = '';
    })

})

document.addEventListener("DOMContentLoaded", function () {
    const listaDeContribuidores = document.getElementById("listaDeContribuidores");

    fetch(`https://api.github.com/repos/Projeto-Faculdade/projeto-facul/contributors`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Repositório não encontrado");
        }
        return response.json();
    })
    .then((contribuidores) => {
        const contribuidoresHTML = contribuidores.map((contribuidor) => `
            <li>${contribuidor.login}</li>
        `).join("");
        listaDeContribuidores.innerHTML = contribuidoresHTML;
    })
    .catch((error) => {
        listaDeContribuidores.innerHTML = `<p>${error.message}</p>`;
    });
});