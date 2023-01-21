let listaCards = document.querySelector(".listaDeCards")



// separando por tipo
let listaHatch = [];
let listaSedan = [];
let listaSuv = [];

function separeteCars(list){
    for(i = 0; i < list.length; i++){
        let carros = list[i];
        let tipo = carros.tag;
        if(tipo.includes("Hatch")){
            listaHatch.push(carros)
        }
        if(tipo.includes("Sedan")){
            listaSedan.push(carros)
        }
        if(tipo.includes("SUV")){
            listaSuv.push(carros)
        }
    }
}separeteCars(data)

let somaTotal = 0;
let valorTotal = document.querySelector('.valorFinal');

// criação das listas
function createListCars(list){
    for(i = 0; i < list.length; i++){
        let lista = list[i];
        let cards = document.createElement('li');
        cards.setAttribute('class','cards')
        cards.setAttribute('id',`${list[i].id}`)

        let imgs = document.createElement('img');
        imgs.setAttribute('class','imagensHatch')
        imgs.src = lista.img;
        imgs.alt = lista.nameItem;

        let imgsTitulo = document.createElement('h2');
        imgsTitulo.setAttribute('class','carros')
        imgsTitulo.innerText = lista.nameItem;

        let imgsDescricao = document.createElement('p');
        imgsDescricao.setAttribute('class','descricao')
        imgsDescricao.innerText = lista.description;

        let imgsValor = document.createElement('p');
        imgsValor.innerText = `R$: ${lista.value.toFixed(2)}`;


        let adicionar = document.createElement('button');
        adicionar.setAttribute('class','botaoAdicionar');
            adicionar.addEventListener('click',function(e){
                quantidadeTotal.innerText++
                somaTotal += lista.value;
                valorTotal.innerText = `R$ ${somaTotal.toFixed(2)}`;
                createCarrinhoItens(lista)
            
        })
        adicionar.innerText = lista.addCart;

        listaCards.appendChild(cards);
        cards.appendChild(imgs);
        cards.appendChild(imgsTitulo);
        cards.appendChild(imgsDescricao);
        cards.appendChild(imgsValor);
        cards.appendChild(adicionar);
    }
}createListCars(data);


// selecionar qual lista vai aparecer
let seletorTodos = document.querySelector('.todos');
seletorTodos.addEventListener('click', function(e){
    location.reload();
})
let seletorHatch = document.querySelector('.hatch');
seletorHatch.addEventListener('click', function(e){
    listaCards.innerHTML = "";
    createListCars(listaHatch);
});
let seletorSedan = document.querySelector('.sedan');
seletorSedan.addEventListener('click', function(e){
    listaCards.innerHTML = "";
    createListCars(listaSedan)
});
let seletorSuv = document.querySelector('.suv');
seletorSuv.addEventListener('click', function(e){
    listaCards.innerHTML = "";
    createListCars(listaSuv)
});


// pesquisa dos modelos
function createModelo(list){
    let botaoPesquisar = document.querySelector('.botaoPesquisar');
    for(i = 0; i < list.length; i++){
        let carroModelo = list[i].nameItem;
        let carroDescricao = list[i].description;

        let carro = document.getElementById(list[i].id)
        botaoPesquisar.addEventListener('click', function(e){
            let barraPesquisa = document.querySelector('.barraPesquisa');
            if(carroModelo.includes(barraPesquisa.value)){
                carro.style.display = 'block';
                carro.style.marginRight = '150px'
                
            }else if(carroDescricao.includes(barraPesquisa.value)){
                carro.style.display = 'block';
                carro.style.marginRight = '30px'
            }
            else{
                carro.style.display = 'none';
            }
        })
    };
}createModelo(data)




// adicionar ao carrinho
let div = document.querySelector('.divCaixa');
let quantidadeTotal = document.querySelector('.quantidade');
quantidadeTotal.innerText = 0


function createCarrinhoItens(list){
    div.className = 'divCaixaEsconde';
    let espacoCarrinho = document.querySelector('.caixaDoCarrinho');
    let listaItens = document.createElement('li');
    listaItens.setAttribute('class','listaDoCarrinho');
    listaItens.style.paddingBlock = '25px'
    let imgNoCarrinho = document.createElement('img');
    imgNoCarrinho.setAttribute('class','imagemNoCarrinho');
    imgNoCarrinho.src = list.img
    let tituloNoCarrinho = document.createElement('h2');
    tituloNoCarrinho.innerText = list.nameItem
    let valorNoCarrinho = document.createElement('p');
    valorNoCarrinho.innerText = `R$ ${list.value.toFixed(2)}`;


    let removedor = document.createElement('button');
    removedor.setAttribute('class','removedorButton')
    removedor.innerText = 'Remover item'
    removedor.addEventListener('click',function(e){
        listaItens.style.display = "none"
        quantidadeTotal.innerText--
        somaTotal -= list.value;
        valorTotal.innerText = `R$ ${somaTotal.toFixed(2)}`
    })

    espacoCarrinho.append(listaItens);
    listaItens.append(imgNoCarrinho,tituloNoCarrinho,valorNoCarrinho,removedor);
}

// efeito luz
let botaoLuz = document.querySelector('.luz')

let corpo = document.querySelector('.corpoPagina')
let lista = document.querySelector('.listaDeCards')
let botao = document.querySelectorAll('.botaoAdicionar')
let caixaTitulo = document.querySelector('.tituloCaixa')
let divCaixa = document.querySelector('.caixaDoCarrinho')
let detalheFinal = document.querySelector('.fimDaLista')
let botaoPesquisa = document.querySelector('.botaoPesquisar')

let contador = 0
    botaoLuz.addEventListener('click', function(e){
        contador++
        console.log(contador)
        if(contador % 2 !== 0){
            corpo.classList.add('corpoPaginaClaro')
            lista.classList.add('cardsClaro') 
            for(let i = 0; i < botao.length; i++){
                botao[i].classList.add('buttonClaro')
            }
            caixaTitulo.classList.add('tituloCaixaClaro')
            divCaixa.classList.add('caixaDoCarrinhoClaro')
            detalheFinal.classList.add('fimDaListaClaro')
            botaoPesquisa.classList.add('botaoPesquisarClaro')
            botaoLuz.classList.add('escuro')
            botaoLuz.innerText = 'Dark'
            
        }
        else if(contador% 2 == 0){
            corpo.classList.remove('corpoPaginaClaro')
            lista.classList.remove('cardsClaro') 
            for(let i = 0; i < botao.length; i++){
                botao[i].classList.remove('buttonClaro')
            }
            caixaTitulo.classList.remove('tituloCaixaClaro')
            divCaixa.classList.remove('caixaDoCarrinhoClaro')
            detalheFinal.classList.remove('fimDaListaClaro')
            botaoPesquisa.classList.remove('botaoPesquisarClaro')
            botaoLuz.classList.remove('escuro')
            botaoLuz.innerText = 'Light'
        }
    })