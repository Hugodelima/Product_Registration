#Product_Registration

Classe Produto



class Produto {

Nesta linha, começa a definição da classe Produto, que será responsável por representar objetos relacionados a produtos.



    constructor() {
        this.id = 1; 
        this.arrayProdutos = [];
    }

No construtor da classe, são configurados valores iniciais para um novo objeto Produto. Ele define duas propriedades:

    id: Inicializado com 1 para criar um ID exclusivo para cada produto.
    arrayProdutos: Uma matriz vazia que armazenará informações sobre os produtos.

Método salvar()



    salvar() {

Este método, chamado salvar(), é usado para salvar informações sobre um produto. Vamos analisá-lo passo a passo:



        let produto = this.lerDados();

    Aqui, o método lerDados() é chamado para ler as informações digitadas pelo usuário (nome, quantidade e preço do produto) e armazená-las em uma variável chamada produto.



        if (this.validaCampos(produto)) {

    Em seguida, verifica-se se os dados do produto são válidos, chamando o método validaCampos() e passando o objeto produto como argumento. Isso garante que as informações inseridas sejam válidas antes de prosseguir.



            this.adicionar(produto);
            this.listaTabela();
        }
    }

    Se os dados do produto forem válidos, o método adicionar(produto) é chamado para adicionar o produto à lista de produtos existente, e o método listaTabela() é chamado para atualizar uma tabela na página da web com os produtos salvos até o momento.

Método listaTabela()



    listaTabela() {

Este método, chamado listaTabela(), é responsável por exibir a lista de produtos em uma tabela na página da web. Vamos analisá-lo em detalhes:



        let tbody = document.getElementById("tbody");
        let resultado = document.getElementById("resultado");

    Aqui, obtêm-se referências aos elementos HTML com IDs "tbody" e "resultado". Esses elementos serão usados para mostrar a lista de produtos na página e o resultado total.



        tbody.innerHTML = '';

    Esta linha limpa o conteúdo da tabela HTML representada por tbody. Isso é feito definindo seu conteúdo interno como uma string vazia, removendo todas as linhas existentes.



        for (let i = 0; i < this.arrayProdutos.length; i++) {

    Inicia-se um loop que percorre cada produto na lista de produtos existente, representada por this.arrayProdutos.



            let tr = tbody.insertRow();

    Para cada produto, uma nova linha é criada na tabela HTML representada por tbody.



            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_quantidade = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_valorTotal = tr.insertCell();

    Aqui, células de tabela (td) são criadas para cada propriedade do produto, como ID, nome, quantidade, preço e valor total.



            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_quantidade.innerText = this.arrayProdutos[i].quantidade;
            td_preco.innerText = `R$ ${parseFloat(this.arrayProdutos[i].preco).toLocaleString('pt-BR')}`;
            td_valorTotal.innerText = `R$${parseFloat(this.arrayProdutos[i].quantidade * this.arrayProdutos[i].preco).toLocaleString('pt-BR')}`;

    Essas linhas preenchem as células da tabela com informações do produto, como ID, nome, quantidade, preço e valor total. Os valores são formatados para exibição, incluindo "R$" e formatação numérica no estilo brasileiro.



            const arrayTotaldaNfe = []

    Aqui, um novo array chamado arrayTotaldaNfe é criado para armazenar os valores totais de cada produto.



            for (let i = 0; i < this.arrayProdutos.length; i++) {

    Neste loop, calcula-se o valor total de cada produto e adiciona-o ao arrayTotaldaNfe. Isso ajuda a calcular o valor total da nota fiscal eletrônica (NF-e).



            let soma = 0;
            for (let i = 0; i < arrayTotaldaNfe.length; i++) {
                soma += arrayTotaldaNfe[i];
            }

    Aqui, calcula-se a soma de todos os valores totais no arrayTotaldaNfe. Isso fornece o valor total da NF-e.



            resultado.innerHTML = `Total da NF-e: R$${(soma).toLocaleString('pt-br')}`;

    Esta linha atualiza o elemento HTML com o ID "resultado" para mostrar o valor total da NF-e em um formato legível para o Brasil.



            tabela.style.display = 'table';
            tabelaNome.style.display = 'block';

    Finalmente, a tabela e um elemento com o ID "tabelaNome" na página da web são exibidos. Esses elementos podem ter sido ocultados anteriormente e agora estão sendo mostrados.

Método adicionar(produto)



    adicionar(produto) {

Este método, chamado adicionar(produto), é usado para adicionar um produto à lista de produtos existente. Vamos analisar o código:



        this.arrayProdutos.push(produto);
        this.id++;

    Aqui, o objeto produto é adicionado à lista arrayProdutos, e o id é incrementado para o próximo produto, garantindo IDs exclusivos.

Método lerDados()



    lerDados() {

Este método, chamado lerDados(), lê as informações inseridas pelo usuário nos campos de entrada HTML. Vamos ver como ele funciona:



        let produto = {};
        produto.id = this.id;
        produto.nomeProduto = document.getElementById("produto").value;
        produto.quantidade = document.getElementById("quantidade").value;
        produto.preco = document.getElementById("preco").value;

    Um objeto produto vazio é criado, e suas propriedades são preenchidas com os valores dos campos de entrada HTML, incluindo ID, nome, quantidade e preço do produto.



        return produto;

    Finalmente, o objeto produto com as informações preenchidas é retornado.

Método validaCampos(produto)



    validaCampos(produto){

Este método, chamado validaCampos(produto), verifica se os campos de entrada do produto estão preenchidos corretamente. Vamos analisá-lo em detalhes:



        let msg = "";

    Uma variável msg é criada para armazenar mensagens de erro, caso ocorram.



        if(produto.nomeProduto == ""){
            msg += "Informe o nome do produto \n";
        }

    Verifica-se se o nome do produto está em branco, e, se estiver, uma mensagem de erro é adicionada à msg.



        if(produto.quantidade == "" || produto.quantidade <= "0"){
            msg += "Informe a quantidade do produto maior que zero\n";
        }

    Verifica-se se a quantidade do produto está em branco ou menor ou igual a zero, e, se estiver, uma mensagem de erro é adicionada à msg.



        if(produto.preco == ""|| produto.preco <= "0"){
            msg += "Informe o preço do produto maior que zero\n";
        }

    Verifica-se se o preço do produto está em branco ou menor ou igual a zero, e, se estiver, uma mensagem de erro é adicionada à msg.



        if(msg != ""){
            alert(msg)
            return false
        }

    Se msg contiver alguma mensagem de erro, um alerta é exibido com as mensagens de erro, e false é retornado para indicar que os campos não são válidos.



        return true;

    Se não houver mensagens de erro, true é retornado para indicar que os campos são válidos.

Método limpaCampo()



    limpaCampo(){

Este método, chamado limpaCampo(), é usado para limpar os campos de entrada após salvar um produto. Vamos ver como ele funciona:



        document.getElementById('produto').value = '';
        document.getElementById('quantidade').value = '';
        document.getElementById('preco').value = '';

    Os valores dos campos de entrada "produto", "quantidade" e "preço" são definidos como strings vazias, tornando-os vazios.

Criação de uma Instância da Classe Produto



const produto = new Produto();

Nesta linha, uma instância da classe Produto é criada, chamada produto. Isso significa que agora você tem um objeto que pode ser usado para salvar e gerenciar informações sobre produtos.
Configuração do Evento de Cadastrar



const cadastrarButton = document.getElementById('cadastrarButton');

Aqui, obtém-se uma referência ao botão HTML com o ID "cadastrarButton". Este botão será usado para acionar a função de salvar quando for clicado.



cadastrarButton.addEventListener('click', function() {
    produto.salvar();
});

    É adicionado um ouvinte de evento ao botão "Cadastrar". Isso significa que quando você clicar no botão, ele chamará a função produto.salvar() para salvar as informações do produto.
