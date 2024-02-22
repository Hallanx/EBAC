// Cria um array de objetos com nome e nota dos alunos
const alunos = [
    { nome: 'Alan', nota: 7 },
    { nome: 'Felipe', nota: 5 },
    { nome: 'Caio', nota: 8 },
    { nome: 'Ticio', nota: 4 },
    { nome: 'Mévio', nota: 6 }
];

// Função que retorna apenas os alunos com nota maior ou igual a 6
function alunosAprovados(arrAlunos) {
    return arrAlunos.filter(aluno => aluno.nota >= 6);
}

// Chamando a função e armazenando o resultado em uma variável
const alunosAprovadosArray = alunosAprovados(alunos);

// Exibindo os alunos aprovados
console.log(alunosAprovadosArray);