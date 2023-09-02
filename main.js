class Produto {
    constructor() {
        this.id = 1; 
        this.arrayProdutos = [];
    }

    salvar() {
      
        let produto = this.lerDados();

        if (this.validaCampos(produto)) {
            this.adicionar(produto);
            this.listaTabela();
        }
        
    }

    listaTabela() {
        let tbody = document.getElementById("tbody");
		let resultado = document.getElementById("resultado");
		
        tbody.innerHTML = ''; 

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            
            
            
            let tr = tbody.insertRow();


            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_quantidade = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_valorTotal = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_quantidade.innerText = this.arrayProdutos[i].quantidade;
            td_preco.innerText = `R$ ${this.arrayProdutos[i].preco}`;
            td_valorTotal.innerText = `R$${this.arrayProdutos[i].quantidade * this.arrayProdutos[i].preco}`;

            td_id.classList.add("text-center")
            
			
			
			const arrayTotaldaNfe = []
			for (let i = 0; i < this.arrayProdutos.length; i++) {
                const valorTotalString = this.arrayProdutos[i].quantidade * this.arrayProdutos[i].preco;
                arrayTotaldaNfe.push(parseFloat(valorTotalString)); // Convert to float and push to the array
            }
			let soma = 0;

            for (let i = 0; i < arrayTotaldaNfe.length; i++) {
                soma += arrayTotaldaNfe[i];
            }
            resultado.innerHTML = `Total da NF-e R$${soma}`
            
			
			
			
			// <hr> para aparecer as linhas
            // Adicione uma linha horizontal após cada linha de produto
            let tr_hr = tbody.insertRow();
            tr_hr.classList.add("linha");
			
            
        }
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++; 
    }

    lerDados() {
        let produto = {};
        produto.id = this.id;
        produto.nomeProduto = document.getElementById("produto").value;
        produto.quantidade = document.getElementById("quantidade").value;
        produto.preco = document.getElementById("preco").value; 
    
        return produto;
    }
    
    
    
    validaCampos(produto){
        let msg = "";
        if(produto.nomeProduto == ""){
            msg += "Informe o nome do produto \n"
        }
        if(produto.quantidade == ""){
            msg += "Informe a quantidade do produto \n"
        }
        if(produto.preco == ""){
            msg += "Informe o preco do produto \n"
        }
        if(msg != ""){
            alert(msg)
            return false
        }
        
        return true;
    }
    
    

}

const produto = new Produto();

const cadastrarButton = document.getElementById('cadastrarButton');


cadastrarButton.addEventListener('click', function() {
    produto.salvar();
});