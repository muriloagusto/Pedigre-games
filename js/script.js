// ========================================
// CARRINHO
// ========================================

let carrinho = [];


// ========================================
// ADICIONAR PRODUTO
// ========================================

function adicionarCarrinho(nome, preco) {

    carrinho.push({

        nome: nome,

        preco: preco

    });


    atualizarCarrinho();


    alert(
        nome + " foi adicionado ao carrinho!"
    );
}


// ========================================
// ATUALIZAR CARRINHO
// ========================================

function atualizarCarrinho() {

    const quantidade =
        document.getElementById(
            "quantidade"
        );


    const lista =
        document.getElementById(
            "listaCarrinho"
        );


    const totalElemento =
        document.getElementById(
            "total"
        );


    // Quantidade

    quantidade.innerText =
        carrinho.length;


    // Limpa a lista

    lista.innerHTML = "";


    // Total

    let total = 0;


    // Se estiver vazio

    if (carrinho.length === 0) {

        lista.innerHTML = `

            <p style="
                text-align:center;
                color:#888;
                padding:20px;
            ">
                Seu carrinho está vazio.
            </p>

        `;

    }


    // Produtos

    carrinho.forEach(
        function(produto, index) {

            total += produto.preco;


            const item =
                document.createElement(
                    "div"
                );


            item.classList.add(
                "item-carrinho"
            );


            item.innerHTML = `

                <span>
                    ${produto.nome}
                </span>

                <strong>
                    R$ ${produto.preco
                        .toFixed(2)
                        .replace(".", ",")}
                </strong>

                <button
                    onclick="removerProduto(${index})"
                >
                    ❌
                </button>

            `;


            lista.appendChild(item);

        }
    );


    // Mostra total

    totalElemento.innerText =
        "R$ " +
        total
            .toFixed(2)
            .replace(".", ",");
}


// ========================================
// REMOVER PRODUTO
// ========================================

function removerProduto(index) {

    carrinho.splice(
        index,
        1
    );


    atualizarCarrinho();
}


// ========================================
// ABRIR CARRINHO
// ========================================

function abrirCarrinho() {

    const modal =
        document.getElementById(
            "modalCarrinho"
        );


    modal.style.display =
        "flex";


    atualizarCarrinho();
}


// ========================================
// FECHAR CARRINHO
// ========================================

function fecharCarrinho() {

    const modal =
        document.getElementById(
            "modalCarrinho"
        );


    modal.style.display =
        "none";
}


// ========================================
// FECHAR CLICANDO FORA
// ========================================

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "modalCarrinho"
            );


        if (
            event.target === modal
        ) {

            fecharCarrinho();

        }

    }
);


// ========================================
// FINALIZAR COMPRA
// ========================================

function finalizarCompra() {

    if (
        carrinho.length === 0
    ) {

        alert(
            "Seu carrinho está vazio!"
        );

        return;

    }


    let mensagem =
        "Olá! Gostaria de comprar:%0A%0A";


    let total = 0;


    carrinho.forEach(
        function(produto) {

            mensagem +=
                "• " +
                produto.nome +
                " - R$ " +
                produto.preco
                    .toFixed(2)
                    .replace(".", ",") +
                "%0A";


            total +=
                produto.preco;

        }
    );


    mensagem +=
        "%0ATotal: R$ " +
        total
            .toFixed(2)
            .replace(".", ",");


    /*
       TROQUE 5500000000000
       PELO SEU NÚMERO DO WHATSAPP.

       Coloque o código do Brasil:
       55 + DDD + número

       Exemplo:
       5533999999999
    */


    const telefone =
        "5500000000000";


    const url =
        "https://wa.me/" +
        telefone +
        "?text=" +
        mensagem;


    window.open(
        url,
        "_blank"
    );
}


// ========================================
// ROLAR ATÉ PRODUTOS
// ========================================

function irParaProdutos() {

    const produtos =
        document.getElementById(
            "produtos"
        );


    produtos.scrollIntoView({
        behavior: "smooth"
    });
}