async function buscarEndereco() {
    const cep = prompt("Por favor, insira o CEP (apenas números):");
    const url = `https://viacep.com.br/ws/${cep}/json`;

try {
    const response = await fetch(url);
    const data = await response.json();

if (response.ok) {
    const { logradouro, complemento, bairro, localidade, uf } = data;
    const enderecoFormatado = `${logradouro}, ${complemento ? complemento + ' - ' : ''}${bairro} - ${localidade}/${uf}`;

      // Verificar se os dados informados estão corretos

    const confirmacao = confirm(`Confirme se os dados estão corretos:\n\n${enderecoFormatado}`);
        if (confirmacao) {
        // Salvar os dados no localStorage
        const endereco = { logradouro, complemento, bairro, localidade, uf };
        localStorage.setItem("endereco", JSON.stringify(endereco));
        alert("Endereço salvo com sucesso!");
    } else {
        alert("Por favor, corrija os dados informados.");
    }
    } else {
        alert(`Erro ao buscar endereço: ${data.message}`);
    }

} catch (error) {
    console.error('Erro ao buscar endereço:', error);
    alert('Ocorreu um erro ao buscar o endereço. Por favor, tente novamente.');
}
}

buscarEndereco();