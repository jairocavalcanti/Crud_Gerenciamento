const baseUrl = 'http://localhost:8080/pessoas';  // URL da API para gerenciar as pessoas

// Função para buscar e exibir as pessoas
async function fetchPessoas() {
    const response = await fetch(baseUrl);
    const pessoas = await response.json();
    const pessoaList = document.getElementById('pessoa-list');
    pessoaList.innerHTML = '';  // Limpa a lista de pessoas

    pessoas.forEach(pessoa => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${pessoa.id}, Nome: ${pessoa.nome}, Tipo: ${pessoa.tipo}`; // Exibe o campo "tipo"

        if (pessoa.tipo === 'Cliente') {
            listItem.textContent += `, Telefone: ${pessoa.telefone}`; // Adiciona o telefone para clientes
        } else if (pessoa.tipo === 'Funcionario') {
            listItem.textContent += `, Cargo: ${pessoa.cargo}`; // Adiciona o cargo para funcionários
        }

        pessoaList.appendChild(listItem);
    });
}

// Função para editar uma pessoa
async function editarPessoa(event) {
    event.preventDefault();
    const pessoaId = document.getElementById('pessoa-id-editar').value;
    const nome = document.getElementById('novo-nome').value;
    const cargo = document.getElementById('novo-cargo').value;

    const pessoa = { nome, cargo };

    const response = await fetch(`${baseUrl}/${pessoaId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pessoa)
    });

    if (response.ok) {
        alert('Pessoa editada com sucesso');
        fetchPessoas();  // Atualiza a lista de pessoas
    } else {
        alert('Erro ao editar pessoa');
    }
}

// Função para excluir uma pessoa
async function excluirPessoa(event) {
    event.preventDefault();
    const pessoaId = document.getElementById('pessoa-id-excluir').value;

    const confirmDelete = confirm("Tem certeza que deseja excluir esta pessoa?");
    if (confirmDelete) {
        const response = await fetch(`${baseUrl}/${pessoaId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert('Pessoa excluída com sucesso');
            fetchPessoas();  // Atualiza a lista de pessoas
        } else {
            alert('Erro ao excluir pessoa');
        }
    }
}

// Inicialização dos formulários e da lista de pessoas
document.getElementById('editar-pessoa-form').addEventListener('submit', editarPessoa);
document.getElementById('excluir-pessoa-form').addEventListener('submit', excluirPessoa);

// Carrega a lista de pessoas ao abrir a página
window.onload = () => {
    fetchPessoas();
};
