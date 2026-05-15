/* TEMA */
const botaoTema = document.getElementById("dark-mode");

document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("tema") === "dark") {
        document.body.classList.add("tema-escuro");

        if (botaoTema) {
            botaoTema.checked = true;
        }
    }

    const btnTodos = document.querySelector(".btn-categoria");

    if (btnTodos) {
        mostrarCategoria(btnTodos, "todos");
    }
});


if (botaoTema) {
    botaoTema.addEventListener("change", () => {

        document.body.classList.toggle("tema-escuro");

        const darkAtivo =
            document.body.classList.contains("tema-escuro");

        localStorage.setItem(
            "tema",
            darkAtivo ? "dark" : "light"
        );
    });
}


/* FILTRO CATEGORIAS */
function mostrarCategoria(botao, categoriaId) {

    const botoes = document.querySelectorAll(".btn-categoria");

    const secoes = document.querySelectorAll(".secao-produtos");

    botoes.forEach(btn => btn.classList.remove("active"));

    botao.classList.add("active");

    secoes.forEach(secao => {

        const idSecao =
            secao.id.replace("secao-", "");

        if (categoriaId === "todos" || idSecao == categoriaId) {
            secao.style.display = "block";
        }
        else {
            secao.style.display = "none";
        }

    });

}

window.mostrarCategoria = mostrarCategoria;

// Função para rolar até a seção de Almoço
function irParaAlmoco() {
    const secaoAlmoco = document.getElementById('secao-almoco');
    if (secaoAlmoco) {
        secaoAlmoco.scrollIntoView({ behavior: 'smooth' });
    }
}

// Conecta o botão "Ver Cardápio"
const btnVerCardapio = document.querySelector('.btn-ver-cardapio');
if (btnVerCardapio) {
    btnVerCardapio.addEventListener('click', irParaAlmoco);
}

// Função de filtro de categorias
function mostrarCategoria(botao, categoriaId) {
    const botoes = document.querySelectorAll(".btn-categoria");
    const secoes = document.querySelectorAll(".secao-produtos");

    botoes.forEach(btn => btn.classList.remove("active"));
    botao.classList.add("active");

    secoes.forEach(secao => {
        const idSecao = secao.id.replace("secao-", "");
        if (categoriaId === "todos" || idSecao == categoriaId) {
            secao.style.display = "block";
        } else {
            secao.style.display = "none";
        }
    });
}
window.mostrarCategoria = mostrarCategoria;

// Carrinho
async function adicionarCarrinho(produtoId) {
    const resposta = await fetch("/carrinho", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ produto_id: produtoId, quantidade: 1 })
    });

    if (resposta.ok) {
        const badge = document.querySelector(".badge");
        let valorAtual = parseInt(badge.textContent || "0");
        badge.textContent = valorAtual + 1;
    }
}

/* BOTÃO SUBIR */
const btnSubir = document.getElementById("btnSubir");

window.onscroll = function () {

    if (!btnSubir) return;

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnSubir.style.display = "flex";
    }
    else {
        btnSubir.style.display = "none";
    }

};

function subirTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.subirTopo = subirTopo;


/* CARRINHO */
async function adicionarCarrinho(produtoId) {
    const resposta = await fetch("/carrinho", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            produto_id: produtoId,
            quantidade: 1
        })
    });


    if (resposta.ok) {
        const badge = document.querySelector(".badge");

        let valorAtual = parseInt(badge.textContent || "0");

        badge.textContent = valorAtual + 1;
    }

}