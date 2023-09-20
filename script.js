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