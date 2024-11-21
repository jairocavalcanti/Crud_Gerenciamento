const baseUrl = 'http://localhost:8080/clientes';

// Função para buscar e exibir os clientes
async function fetchClientes() {
    const response = await fetch(baseUrl);
    const clientes = await response.json();
    const clienteList = document.getElementById('cliente-list');
    clienteList.innerHTML = ''; // Limpa a lista de clientes

    clientes.forEach(cliente => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${cliente.id}, Nome: ${cliente.nome}, Telefone: ${cliente.telefone}`;
        clienteList.appendChild(listItem);
    });
}

// Função para criar um novo cliente
async function criarCliente(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    const cliente = { nome, telefone };

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    });

    if (response.ok) {
        alert('Cliente criado com sucesso');
        fetchClientes();
    } else {
        alert('Erro ao criar cliente');
    }
}

// Função para editar um cliente
async function editarCliente(event) {
    event.preventDefault();
    const clienteId = document.getElementById('cliente-id-editar').value;
    const nome = document.getElementById('novo-nome').value;
    const telefone = document.getElementById('novo-telefone').value;

    const cliente = { nome, telefone };

    const response = await fetch(`${baseUrl}/${clienteId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    });

    if (response.ok) {
        alert('Cliente editado com sucesso');
        fetchClientes();
    } else {
        alert('Erro ao editar cliente');
    }
}

// Função para excluir um cliente
async function excluirCliente(event) {
    event.preventDefault();
    const clienteId = document.getElementById('cliente-id-excluir').value;

    const confirmDelete = confirm("Tem certeza que deseja excluir este cliente?");
    if (confirmDelete) {
        const response = await fetch(`${baseUrl}/${clienteId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert('Cliente excluído com sucesso');
            fetchClientes();
        } else {
            alert('Erro ao excluir cliente');
        }
    }
}

// Inicialização dos formulários e da lista de clientes
document.getElementById('criar-cliente-form').addEventListener('submit', criarCliente);
document.getElementById('editar-cliente-form').addEventListener('submit', editarCliente);
document.getElementById('excluir-cliente-form').addEventListener('submit', excluirCliente);

// Carrega a lista de clientes ao abrir a página
window.onload = () => {
    fetchClientes();
};
