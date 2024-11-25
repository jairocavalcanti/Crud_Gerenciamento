const baseUrl = 'http://localhost:8080/pessoas'; // URL da API

// Função para buscar e exibir as pessoas
async function fetchPessoas() {
    const response = await fetch(baseUrl);
    const pessoas = await response.json();

    const clienteList = document.getElementById('cliente-list');
    const funcionarioList = document.getElementById('funcionario-list');
    clienteList.innerHTML = '';
    funcionarioList.innerHTML = '';

    pessoas.forEach(pessoa => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${pessoa.id}, Nome: ${pessoa.nome}`;

        if (pessoa.tipo === 'Cliente') {
            listItem.textContent += `, Telefone: ${pessoa.telefone}`;
            clienteList.appendChild(listItem);
        } else if (pessoa.tipo === 'Funcionario') {
            listItem.textContent += `, Cargo: ${pessoa.cargo}`;
            funcionarioList.appendChild(listItem);
        }
    });
}

// Carrega as listas ao abrir a página
window.onload = () => {
    fetchPessoas();
};
