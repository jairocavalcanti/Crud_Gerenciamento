const baseUrl = 'http://localhost:8080/pessoas';  // URL da API para gerenciar as pessoas

// Função para buscar e exibir as pessoas
async function fetchPessoas() {
    const response = await fetch(baseUrl);
    const pessoas = await response.json();
    const pessoaList = document.getElementById('pessoa-list');
    pessoaList.innerHTML = '';  // Limpa a lista de pessoas

    pessoas.forEach(pessoa => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${pessoa.id}, Nome: ${pessoa.nome}, Tipo: ${pessoa.tipo}`;

        if (pessoa.tipo === 'Cliente') {
            listItem.textContent += `, Telefone: ${pessoa.telefone}`; // Adiciona o telefone para clientes
        } else if (pessoa.tipo === 'Funcionario') {
            listItem.textContent += `, Cargo: ${pessoa.cargo}`; // Adiciona o cargo para funcionários
        }

        pessoaList.appendChild(listItem);
    });
}

// Carrega a lista de pessoas ao abrir a página
window.onload = () => {
    fetchPessoas();
};
