const apiUrl = '/clientes'; // URL base para a API de clientes

// Função para obter todos os clientes
async function getAllClientes() {
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const clientes = await response.json();
            console.log('Clientes:', clientes);
        } else {
            console.error('Erro ao obter clientes', response.status);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
}

// Função para obter um cliente por ID
async function getClienteById(id) {
    try {
        const response = await fetch(`${apiUrl}/${id}`);
        if (response.ok) {
            const cliente = await response.json();
            console.log('Cliente:', cliente);
        } else {
            console.error('Cliente não encontrado', response.status);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
}

// Função para criar um novo cliente
async function createCliente(cliente) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });
        if (response.ok) {
            const savedCliente = await response.json();
            console.log('Cliente criado:', savedCliente);
        } else {
            console.error('Erro ao criar cliente', response.status);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
}

// Função para atualizar um cliente existente
async function updateCliente(id, clienteDetails) {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clienteDetails)
        });
        if (response.ok) {
            const updatedCliente = await response.json();
            console.log('Cliente atualizado:', updatedCliente);
        } else {
            console.error('Erro ao atualizar cliente', response.status);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
}

// Função para deletar um cliente
async function deleteCliente(id) {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            console.log('Cliente deletado');
        } else {
            console.error('Erro ao deletar cliente', response.status);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
}

// Exemplo de uso
getAllClientes(); // Para pegar todos os clientes
getClienteById(1); // Para pegar um cliente com ID 1

// Exemplo de criação de um cliente
const newCliente = {
    nome: 'João Silva',
    email: 'joao@exemplo.com',
    telefone: '1234567890'
};
createCliente(newCliente);

// Exemplo de atualização de um cliente
const updatedCliente = {
    nome: 'João Silva Atualizado',
    email: 'joao@exemplo.com',
    telefone: '0987654321'
};
updateCliente(1, updatedCliente);

// Exemplo de deletação de um cliente
deleteCliente(1);
