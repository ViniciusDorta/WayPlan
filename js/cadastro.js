//Cria uma array vazia
var list = [];

// Atribui dados na array caso exista dados salvos no local storage
if(localStorage.getItem("items") != null){
    var list = JSON.parse(localStorage.getItem("items"));
}

// Renderiza os itens na tabela ao carregar a página
list.forEach((item, indexid) => { renderItem(item, indexid) });

// Função para atualizar dados na tabela
function renderItem(item, idPosicao) {
    // Adicionando uma div com o item e a quantidade na div .items
    var tabela = document.getElementById("tabela")
    tabela.innerHTML += `
    <tr>
        <td>${idPosicao}</td>
        <td>${item.nome}</td>
        <td class="entrada">R$ ${item.valor}</td>
        <td class="categoria">${item.categ}</td>
        <td>${item.data}</td>
    </tr>
`}

// Função que executa ao clicar no botão de cadastrar
$("#salva").click(function () {
    var nome = document.getElementById("nome").value
    var valor = document.getElementById("valor").value
    var categ = document.getElementById("categ").value
    var data = document.getElementById("data").value
    var tabela = document.getElementById("tabela")

    // Adiciona o novo valor na array 'list'
    list.push({ nome, valor, categ, data })

    // Adicionando um array com um objeto no localStorage
    localStorage.setItem('items', JSON.stringify(list));

    if (localStorage.getItem('items')) {
        if (list.length == 0) {
            localStorage.removeItem('items');

        } else {
            // Limpando o html
            tabela.innerHTML = "";

            // Para cada item do array, é renderizado no html
            list.forEach((item, indexid) => { renderItem(item, indexid) });

        }
    }
})