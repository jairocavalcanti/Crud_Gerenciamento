const apiUrlFuncionario = '/funcionarios'; // URL base para a API de funcionários

// Função para obter todos os funcionários
async function getAllFuncionarios() {
    try {
        const response = await fetch(apiUrlFuncionario);
        if (response.ok) {
            const funcionarios = await response.json();
            console.log('Funcionários:', funcionarios);
        } else {
            console.error('Erro ao obter funcionários', response.status);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
}

// Função para obter um funcionário por ID
async function getFuncionarioById(id) {
    try {
        const response = await fetch(`${apiUrlFuncionario}/${id}`);
        if (response.ok) {
            const funcionario = await response.json();
            console.log('Funcionário:', funcionario);
        } else {
            console.error('Funcionário não encontrado', response.status);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
}

// Função para criar um novo funcionário
async function createFuncionario(funcionario) {
    try {
        const response = await fetch(apiUrlFuncionario, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(funcionario)
        });
        if (response.ok) {
            const savedFuncionario = await response.json();
            console.log('Funcionário criado:', savedFuncionario);
        } else {
            console.error('Erro ao criar funcionário', response.status);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
}

// Função para atualizar um funcionário existente
async function updateFuncionario(id, funcionarioDetails) {
    try {
        const response = await fetch(`${apiUrlFuncionario}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(funcionarioDetails)
        });
        if (response.ok) {
            const updatedFuncionario = await response.json();
            console.log('Funcionário atualizado:', updatedFuncionario);
        } else {
            console.error('Erro ao atualizar funcionário', response.status);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
}

// Função para deletar um funcionário
async function deleteFuncionario(id) {
    try {
        const response = await fetch(`${apiUrlFuncionario}/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            console.log('Funcionário deletado');
        } else {
            console.error('Erro ao deletar funcionário', response.status);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
}

// Exemplo de uso
getAllFuncionarios(); // Para pegar todos os funcionários
getFuncionarioById(1); // Para pegar um funcionário com ID 1

// Exemplo de criação de um funcionário
const newFuncionario = {
    nome: 'Carlos Souza',
    cargo: 'Desenvolvedor',
    salario: 5000
};
createFuncionario(newFuncionario);

// Exemplo de atualização de um funcionário
const updatedFuncionario = {
    nome: 'Carlos Souza Atualizado',
    cargo: 'Desenvolvedor Sênior',
    salario: 6000
};
updateFuncionario(1, updatedFuncionario);

// Exemplo de deletação de um funcionário
deleteFuncionario(1);
