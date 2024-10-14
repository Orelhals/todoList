const botao = document.getElementById('botao');
botao.addEventListener('click', pegarbotao);


function pegarbotao() {
    //meu input
    const inputo = document.getElementById('inputo');
    //pegando o valor dele
    const valorInput= inputo.value;
    //minha lista (ul)
    const minhaLista = document.getElementById('lista');
    // criando um elemento, nesse caso uma lista 
    const novoitem = document.createElement('li');
    minhaLista.appendChild(novoitem);
    //pega o valor do input e joga dentro da li 
    novoitem.textContent = valorInput;
    inputo.value = '';
    console.log(minhaLista);
    console.log(novoitem);

    // criando botao que remove a tarefa
    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent= 'remover';
    novoitem.appendChild(botaoExcluir);
    botaoExcluir.addEventListener('click', removerTarefa);
        function removerTarefa() {
            novoitem.remove()
        };
    // criando um botao de confirmaçao: 

    //Essa parte é toda responsável pela criaçao e organizaçao do botao de conclusao. 
    const botaoFeito = document.createElement('button');
    botaoFeito.textContent = 'concluído';
    botaoFeito.className = 'botaoFeito';
    novoitem.appendChild(botaoFeito);
    botaoFeito.addEventListener('click', adicionarFeito);
        function adicionarFeito() {
            const criarFeitos = document.createElement('li');
            const listaFeitos = document.getElementById('listaFeitos');
            listaFeitos.appendChild(criarFeitos);
            criarFeitos.textContent = valorInput;
        };
};

