const materiasDestaque = [
    {
        id: 0,
        titulo: 'Quais são os primeiros passos essenciais?',
        imagem: './imagem/Imagem1.jpg',
        pagina: '#'
    },
    {
        id: 1,
        titulo: 'Descubra os erros mais comuns ao montar sua carteira de ações!',
        imagem: './imagem/Imagem2.jpg',
        pagina: '#'
    },
    {
        id: 2,
        titulo: 'Ações tudo o que você precisa saber antes de investir!',
        imagem: './imagem/Imagem3.jpg',
        pagina: '#'
    },
    {
        id: 3,
        titulo: 'É possível viver de dividendos?',
        imagem: './imagem/Imagem4.jpg',
        pagina: '#'
    },
    {
        id: 4,
        titulo: '10 Dicas de como economizar para sobrar mais dinheiro!',
        imagem: './imagem/Imagem5.jpg',
        pagina: '#'
    },
    {
        id: 5,
        titulo: 'Tomada de Decisão e Gestão de Risco',
        imagem: './imagem/Imagem6.jpg',
        pagina: '#'
    },
    {
        id: 6,
        titulo: 'Como escolher as melhores ações para swing trade?',
        imagem: './imagem/Imagem7.jpg',
        pagina: '#'
    },
    {
        id: 7,
        titulo: 'Como investir seguindo a estratégia Buy and Hold?',
        imagem: './imagem/Imagem8.jpg',
        pagina: '#'
    },
    {
        id: 8,
        titulo: 'Guia completo da análise de mercado',
        imagem: './imagem/Imagem9.jpg',
        pagina: '#'
    },
    {
        id: 9,
        titulo: 'O que significa risco de investimento? Como reduzi-lo?',
        imagem: './imagem/Imagem10.jpg',
        pagina: '#'
    },
    {
        id: 10,
        titulo: 'O que é a alavancagem? Entenda como funciona!',
        imagem: './imagem/Imagem11.jpg',
        pagina: '#'
    },
    {
        id: 11,
        titulo: 'Como fazer análise técnica de ações?',
        imagem: './imagem/Imagem12.jpg',
        pagina: '#'
    }    
]


const materiasComecar = [
    {
        id: 0,
        titulo: 'O que é a Taxa Selic e como ela impacta seus investimentos',
        imagem: './imagem/Imagem1.jpg',
        pagina: '#'
    },
    {
        id: 1,
        titulo: 'Como ser trader? Confira 5 características essenciais!',
        imagem: './imagem/Imagem14.jpg',
        pagina: '#'
    },
    {
        id: 2,
        titulo: 'Aprenda 4 dicas de como fazer um bom plano de investimento!',
        imagem: './imagem/Imagem15.jpg',
        pagina: '#'
    },
    {
        id: 3,
        titulo: 'Quais são as melhores formas de investir com pouco dinheiro?',
        imagem: './imagem/Imagem16.jpg',
        pagina: '#'
    },
    {
        id: 4,
        titulo: 'Quais são os mitos sobre investir na bolsa de valores?',
        imagem: './imagem/Imagem17.jpg',
        pagina: '#'
    },
    {
        id: 5,
        titulo: 'Investir em ações: quais são os primeiros passos essenciais',
        imagem: './imagem/Imagem18.jpg',
        pagina: '#'
    },
    {
        id: 6,
        titulo: 'Carteira de ações para quem ganha pouco',
        imagem: './imagem/Imagem19.jpg',
        pagina: '#'
    },
    {
        id: 7,
        titulo: 'Tesouro direto para iniciantes',
        imagem: './imagem/Imagem20.jpg',
        pagina: '#'
    },
    {
        id: 8,
        titulo: '7 passos para escolher um fundo imobiliário',
        imagem: './imagem/Imagem21.jpg',
        pagina: '#'
    },
    {
        id: 9,
        titulo: 'Renda Fixa X Renda Variável',
        imagem: './imagem/Imagem22.jpg',
        pagina: '#'
    }
]

inicializarCards = () => {
    var containerCardsDestaque = document.getElementById('card-destaque');
    var containerCardsComecar = document.getElementById('card-comecar');

    materiasDestaque.map((valor)=>{
        containerCardsDestaque.innerHTML += `
        <div class="card">
        <div class="img-eduf"><img src="${valor.imagem}" alt=""></div>
            <div class="content">
                <div class="title">${valor.titulo}<br><br></div>
                <div class="btn">
                    <button onclick="window.location.href = '${valor.pagina}'">Leia mais</button>
                </div>
            </div>
        </div>
        
        `;
    })

    materiasComecar.map((valor)=>{
        containerCardsComecar.innerHTML += `
        <div class="card">
        <div class="img-eduf"><img src="${valor.imagem}" alt=""></div>
            <div class="content">
                <div class="title">${valor.titulo}<br><br></div>
                <div class="btn">
                    <button onclick="window.location.href = '${valor.pagina}'">Leia mais</button>
                </div>
            </div>
        </div>
        `;
    })

}

inicializarCards();