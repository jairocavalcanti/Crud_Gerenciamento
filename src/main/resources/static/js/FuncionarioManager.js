const baseUrl = 'http://localhost:8080/funcionarios';

// Função para buscar e exibir os funcionários
async function fetchFuncionarios() {
    const response = await fetch(baseUrl);
    const funcionarios = await response.json();
    const funcionarioList = document.getElementById('funcionario-list');
    funcionarioList.innerHTML = ''; // Limpa a lista de funcionários

    funcionarios.forEach(funcionario => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${funcionario.id}, Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}`;
        funcionarioList.appendChild(listItem);
    });
}

// Função para criar um novo funcionário
async function criarFuncionario(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const cargo = document.getElementById('cargo').value;

    const funcionario = { nome, cargo };

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(funcionario)
    });

    if (response.ok) {
        alert('Funcionário criado com sucesso');
        fetchFuncionarios();
    } else {
        alert('Erro ao criar funcionário');
    }
}

// Função para editar um funcionário
async function editarFuncionario(event) {
    event.preventDefault();
    const funcionarioId = document.getElementById('funcionario-id-editar').value;
    const nome = document.getElementById('novo-nome').value;
    const cargo = document.getElementById('novo-cargo').value;

    const funcionario = { nome, cargo };

    const response = await fetch(`${baseUrl}/${funcionarioId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(funcionario)
    });

    if (response.ok) {
        alert('Funcionário editado com sucesso');
        fetchFuncionarios();
    } else {
        alert('Erro ao editar funcionário');
    }
}

// Função para excluir um funcionário
async function excluirFuncionario(event) {
    event.preventDefault();
    const funcionarioId = document.getElementById('funcionario-id-excluir').value;

    const confirmDelete = confirm("Tem certeza que deseja excluir este funcionário?");
    if (confirmDelete) {
        const response = await fetch(`${baseUrl}/${funcionarioId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert('Funcionário excluído com sucesso');
            fetchFuncionarios();
        } else {
            alert('Erro ao excluir funcionário');
        }
    }
}

// Inicialização dos formulários e da lista de funcionários
document.getElementById('criar-funcionario-form').addEventListener('submit', criarFuncionario);
document.getElementById('editar-funcionario-form').addEventListener('submit', editarFuncionario);
document.getElementById('excluir-funcionario-form').addEventListener('submit', excluirFuncionario);

// Carrega a lista de funcionários ao abrir a página
window.onload = () => {
    fetchFuncionarios();
};
