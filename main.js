const form = document.getElementById('form-lista');
const NomeTarefa = [];
let linhas = '';


form.addEventListener('submit', function (e) {
    e.preventDefault();

    AddTarefa();
    atualizaTabela();

})

function AddTarefa() {
    const InputTarefa = document.getElementById('Tarefa');

    if (NomeTarefa.includes(InputTarefa.value)) {
        alert(`a tarefa ${InputTarefa.value} já foi inserida!`);
    } else {

        NomeTarefa.push(InputTarefa.value);

        let linha = `<ul>`;
        linha += `<li> ${InputTarefa.value}`;
        linha += `</ul>`;

        linhas += linha;
    }

    InputTarefa.value = '';
}


function atualizaTabela() {
    const Tabelaraiz = document.querySelector('ul');
    Tabelaraiz.innerHTML = linhas;
    Tabelaraiz.addEventListener('click', function (e) {
        if (e.target.classList.contains('checked')) {
            e.target.classList.remove('checked');
        } else {
            e.target.classList.add('checked');
        }
    })

}