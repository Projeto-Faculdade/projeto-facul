document.addEventListener('DOMContentLoaded', function () {
    const tarefas = [
        { data: '22/09/2023', disciplina: 'Estrutura de Dados', descricao: 'Lista de Exercício 01' },
        { data: '22/09/2023', disciplina: 'Estrutura de Dados', descricao: 'Lista de Exercício 02' },
        { data: '22/09/2023', disciplina: 'Estrutura de Dados', descricao: 'Lista de Exercício 03' },
        { data: '25/09/2023', disciplina: 'Sistemas Operacionais', descricao: 'TED 02' },
        { data: '25/09/2023', disciplina: 'Sistemas Operacionais', descricao: 'TED 03' },
        { data: '04/10/2023', disciplina: 'Banco de Dados', descricao: 'Modelo Descritivo + Modelo ER' },
        { data: 'Sem data de entrega', disciplina: 'Sistemas Operacionais', descricao: 'Canvas' },
        { data: 'Sem data de entrega', disciplina: 'Banco de Dados', descricao: 'Modelo Lógico' },
        { data: 'Sem data de entrega', disciplina: 'Estrutura de Dados', descricao: 'Listas Ordenada' },
        { data: 'Sem data de entrega', disciplina: 'Linguagem de Programação I', descricao: 'Nota de Aula 1' },
        { data: 'Sem data de entrega', disciplina: 'Linguagem de Programação I', descricao: 'Nota de Aula 2' },
        { data: 'Sem data de entrega', disciplina: 'Linguagem de Programação I', descricao: 'Nota de Aula 3' },
        { data: 'Sem data de entrega', disciplina: 'Tec. Front-End', descricao: 'Nivelamento em Python' },
        { data: 'Sem data de entrega', disciplina: 'Tec. Front-End', descricao: 'Nivelamento em JavaScript' },
        { data: 'Sem data de entrega', disciplina: 'Tec. Front-End', descricao: 'Cálculo Média com Pesos' },
        { data: 'Sem data de entrega', disciplina: 'Tec. Front-End', descricao: 'Cálculo Média Aritmética com Arrays' },
    ];

    const accordion = document.getElementById('accordion');

    const disciplinas = {};
    for (let tarefa of tarefas) {
        if (!disciplinas[tarefa.disciplina]) {
            disciplinas[tarefa.disciplina] = [];
        }
        disciplinas[tarefa.disciplina].push(tarefa);
    }

    function adicionarDisciplinaAcordeao(disciplina, tarefas) {
        const details = document.createElement('details');
        details.innerHTML = `
            <summary>${disciplina}</summary>
            <ul>
                ${tarefas.map(tarefa => `<li>${tarefa.data} - ${tarefa.descricao}</li>`).join('')}
            </ul>
        `;
        accordion.appendChild(details);
    }

    for (let disciplina in disciplinas) {
        adicionarDisciplinaAcordeao(disciplina, disciplinas[disciplina]);
    }
});

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