const apiUrlPessoa = '/pessoas'; // URL base para a API de pessoas

// Função para obter todas as pessoas
async function getAllPessoas() {
    try {
        const response = await fetch(apiUrlPessoa);
        if (response.ok) {
            const pessoas = await response.json();
            console.log('Pessoas:', pessoas);
            displayPessoas(pessoas); // Exibe as pessoas na tabela
        } else {
            console.error('Erro ao obter pessoas', response.status);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
}

// Função para obter uma pessoa por ID
async function getPessoaById(id) {
    try {
        const response = await fetch(`${apiUrlPessoa}/${id}`);
        if (response.ok) {
            const pessoa = await response.json();
            console.log('Pessoa:', pessoa);
            displayPessoa(pessoa); // Exibe a pessoa encontrada
        } else {
            console.error('Pessoa não encontrada', response.status);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
}

// Função para criar uma nova pessoa
async function createPessoa(pessoa) {
    try {
        const response = await fetch(`${apiUrlPessoa}/postpessoas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pessoa)
        });
        if (response.ok) {
            const savedPessoa = await response.json();
            console.log('Pessoa criada:', savedPessoa);
            alert('Pessoa criada com sucesso!');
        } else {
            console.error('Erro ao criar pessoa', response.status);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
}

// Função para atualizar uma pessoa
async function updatePessoa(id, pessoaDetails) {
    try {
        const response = await fetch(`${apiUrlPessoa}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pessoaDetails)
        });
        if (response.ok) {
            const updatedPessoa = await response.json();
            console.log('Pessoa atualizada:', updatedPessoa);
            alert('Pessoa atualizada com sucesso!');
        } else {
            console.error('Erro ao atualizar pessoa', response.status);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
}

// Função para deletar uma pessoa
async function deletePessoa(id) {
    try {
        const response = await fetch(`${apiUrlPessoa}/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            console.log('Pessoa deletada');
            alert('Pessoa deletada com sucesso!');
        } else {
            console.error('Erro ao deletar pessoa', response.status);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
}

// Função para exibir as pessoas na tabela
function displayPessoas(pessoas) {
    const tableBody = document.getElementById('pessoas-table-body');
    tableBody.innerHTML = ''; // Limpa a tabela antes de preencher

    pessoas.forEach(pessoa => {
        const row = document.createElement('tr');

        const tdId = document.createElement('td');
        tdId.textContent = pessoa.id;

        const tdNome = document.createElement('td');
        tdNome.textContent = pessoa.nome;

        const tdTipoPessoa = document.createElement('td');
        tdTipoPessoa.textContent = pessoa.tipoPessoa ? pessoa.tipoPessoa() : 'N/A'; // Usando polimorfismo

        row.appendChild(tdId);
        row.appendChild(tdNome);
        row.appendChild(tdTipoPessoa);

        tableBody.appendChild(row);
    });
}

// Função para exibir uma pessoa específica (por ID)
function displayPessoa(pessoa) {
    const tableBody = document.getElementById('pessoas-table-body');
    tableBody.innerHTML = ''; // Limpa a tabela antes de exibir uma pessoa

    const row = document.createElement('tr');

    const tdId = document.createElement('td');
    tdId.textContent = pessoa.id;

    const tdNome = document.createElement('td');
    tdNome.textContent = pessoa.nome;

    const tdTipoPessoa = document.createElement('td');
    tdTipoPessoa.textContent = pessoa.tipoPessoa ? pessoa.tipoPessoa() : 'N/A'; // Usando polimorfismo

    row.appendChild(tdId);
    row.appendChild(tdNome);
    row.appendChild(tdTipoPessoa);

    tableBody.appendChild(row);
}

// Função para preencher o formulário com os dados de uma pessoa para edição
function fillFormForEdit(pessoa) {
    document.getElementById('id').value = pessoa.id;
    document.getElementById('nome').value = pessoa.nome;
    document.getElementById('tipoPessoa').value = pessoa.tipoPessoa;
}

// Exemplo de uso
getAllPessoas(); // Para pegar todas as pessoas
getPessoaById(1); // Para pegar uma pessoa com ID 1

// Exemplo de criação de uma pessoa
const newPessoa = {
    nome: 'Ana Silva',
    tipoPessoa: 'Fisica' // Exemplo de tipo de pessoa, dependendo do seu modelo
};
createPessoa(newPessoa);

// Exemplo de atualização de uma pessoa
const updatedPessoa = {
    nome: 'Ana Silva Atualizada',
    tipoPessoa: 'Juridica'
};
updatePessoa(1, updatedPessoa);

// Exemplo de deletação de uma pessoa
deletePessoa(1);
