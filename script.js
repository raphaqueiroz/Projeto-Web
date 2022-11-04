let jogadores = [
  

    {
        img: "selecao/Marcos-goleiro-brasil-copa-do-mundo-2002.png",
        nome:"Marcos",
        numero:"1" ,
        posicao:"goleiro",
        partidas: 7,
        golmarcados:0 ,
        titular:true // TRUE OU FALSE
    },
    {
        img: "selecao/cafu.jpg",
        nome:"Cafú",
        numero: "2",
        posicao:"lateral-direito",
        partidas: 7,
        golmarcados:0,
        titular:true // TRUE OU FALSE
    },
    {
        img: "selecao/lucio.png",
        nome:"Lúcio",
        numero:"3" ,
        posicao:"zagueiro",
        partidas: 7,
        golmarcados: 0,
        titular:true // TRUE OU FALSE
    },
    {
        img: "selecao/Roque_Júnior_em_2002.jpg",
        nome:"Roque Júnior",
        numero: "4",
        posicao:"zagueiro",
        partidas: 6,
        golmarcados:0 ,
        titular:true // TRUE OU FALSE
    },
    {
        img: "selecao/edmilson.jpg",
        nome:"Edmílson",
        numero: "5",
        posicao:"volante e zagueiro",
        partidas: 6,
        golmarcados:1 ,
        titular:true // TRUE OU FALSE
    },
    {
        img: "selecao/roberto-carlos.jpg",
        nome:"Roberto Carlos",
        numero: "6",
        posicao:"lateral-esquerdo",
        partidas: 6,
        golmarcados:1 ,
        titular:true // TRUE OU FALSE
    },
    {
        img: "selecao/ricardiho.jpg",
        nome:"Ricardinho",
        numero: "7",
        posicao:"meio-campista",
        partidas: 3,
        golmarcados: 0,
        titular:true // TRUE OU FALSE
    },
    {
        img: "selecao/gilberto-silva.jpg",
        nome:"Gilberto Silva",
        numero: "8",
        posicao:"volante",
        partidas: 7,
        golmarcados:0 ,
        titular:true // TRUE OU FALSE
    },
    {
        img: "selecao/ronaldo.jpg",
        nome:"Ronaldo",
        numero: "9",
        posicao:"atacante",
        partidas: 7,
        golmarcados:8 ,
        titular:true // TRUE OU FALSE
    },
    {
        img: "selecao/Rivaldo.jpg",
        nome:"Rivaldo",
        numero: "10",
        posicao:"atacante",
        partidas: 7,
        golmarcados:5 ,
        titular:true // TRUE OU FALSE
    },
    {
        img: "selecao/ronaldinho-gaucho.jpg",
        nome:"Ronaldinho Gaúcho",
        numero: "11",
        posicao:"meio-campista",
        partidas: 5,
        golmarcados: 2,
        titular:true // TRUE OU FALSE
    },
    {
        img: "selecao/dida.jpg",
        nome:"Dida",
        numero: "12",
        posicao:"goleiro",
        partidas: 0,
        golmarcados: 0,
        titular: false ,
    },
    {
        img: "selecao/belletti.jpg",
        nome:"Belletti",
        numero: "13",
        posicao:"lateral-direito",
        partidas: 1,
        golmarcados: 0,
        titular: false, // TRUE OU FALSE
    }
    ,
    {
        img: "selecao/rogerio-ceni.jpg",
        nome:"Rogério Ceni",
        numero:"22" ,
        posicao:"goleiro",
        partidas: 0,
        golmarcados: 0,
        titular: false // TRUE OU FALSE
    }
    ,
    {
        img: "selecao/junior.jpg",
        nome:"Júnior",
        numero:"17" ,
        posicao:"lateral-esquerdo",
        partidas: 1,
        golmarcados: 1,
        titular: false // TRUE OU FALSE
    },
    {
        img: "selecao/kleberson.jpg.crdownload",
        nome:"Kleberson",
        numero:"15" ,
        posicao:"volante",
        partidas: 1,
        golmarcados: 0,
        titular: false // TRUE OU FALSE
    },
    {
        img: "selecao/vampeta",
        nome:"Vampeta",
        numero:"18" ,
        posicao:"volante",
        partidas: 1,
        golmarcados: 0,
        titular: false // TRUE OU FALSE
    },
    {
        img: "selecao/denilson.jpg",
        nome:"Denílson",
        numero:"17" ,
        posicao:"meio-campista",
        partidas: 5,
        golmarcados: 0,
        titular: false // TRUE OU FALSE
    },
    {
        img: "selecao/juninho-paulista.jpg",
        nome:"Juninho Paulista",
        numero:"19" ,
        posicao:"meio-campista",
        partidas: 5,
        golmarcados: 0,
        titular: false // TRUE OU FALSE
    },
    {
        img: "selecao/kaka.jpg",
        nome:"Káka",
        numero:"23" ,
        posicao:"meio-campista",
        partidas: 1,
        golmarcados: 0,
        titular: false // TRUE OU FALSE
    },
    {
        img: "selecao/edilson.webp",
        nome:"Edílson",
        numero:"20" ,
        posicao:"atacante",
        partidas: 4,
        golmarcados: 0,
        titular: false // TRUE OU FALSE
    },
    {
        img: "selecao/luizao.jpg",
        nome:"Luizão",
        numero:"21" ,
        posicao:"atacante",
        partidas: 2,
        golmarcados: 0,
        titular: false // TRUE OU FALSE
    }
]
// remover depois
// jogadores.forEach(jogador =>{
//     jogador.img = "selecao/luizao.jpg"
// })
// console.log(jogadores)
// Variáveis da semana 11
const container = document.getElementById('container')




// Semana 5
function imprimeJogadores(jogadores){

    for (let joga of jogadores){
        console.log(`
        Nome: ${joga.nome}\n
        Número: ${joga.numero}\n
        Posição: ${joga.posicao}\n
        Gols marcados: ${joga.golsmarcados}\n
        É titular? ${joga.titular ? 'sim' : 'não'}
        `)
    }
}

imprimeJogadores(jogadores)

// Semana6
let novoObjeto = {
        nome:"Anerson Polga ",
        numero:"14" ,
        posicao:"zagueiro",
        golsmarcados: 0,
        titular:false // TRUE OU FALSE

}

function imprimeString(objeto) { //IMPRIME UM ÚNICO OBJETO

    console.log(`
                Nome: ${objeto.nome}
                Camisa: ${objeto.numero}
                Posição? ${objeto.posicao}
                Marcou ${objeto.golsmarcados} gols.
                Titular: ${objeto.titular ? 'sim' : 'não'}
                `)

}
imprimeString(novoObjeto)

function imprimeStringObjeto(arrayDeObjetos) { //IMPRIME A LISTA DE OBJETOS DO ARRAY
    for (let string of arrayDeObjetos) {
        imprimeString(string)
    }

}
imprimeStringObjeto(jogadores)


// Imprimiir Jogador


function pesquisaJogador(){
    let nome = document.getElementById('pesquisa').value
    const jogadorRetornado = jogadores.filter(player => {
        return player.nome.toUpperCase().includes(nome.toUpperCase())
    })
    console.log(jogadorRetornado)
    if (jogadorRetornado.length){
        geraCard(jogadorRetornado)
    } else{
        alert("Jogador não encontrado")
        geraCard(jogadores)
    }
}

// let buscaJogador = prompt("Que jogador gostaria de ver?")

// console.log(pesquisaJogador(jogadores, buscaJogador))

// let jogadorEncontrado = pesquisaJogador(jogadores, buscaJogador)

// imprimeStringObjeto(jogadorEncontrado)


function geraCard (jogadores){
    let listaJogador = document.getElementById('listaJogador')
    listaJogador.innerHTML = ''
    let card 
    jogadores.map(
        jogador =>{
            card = `<section class = "cardJogador" id = "cardJogador">
            <figure>
                <img src=${jogador.img} alt="foto ${jogador.nome}">
            </figure>
            <article class = "lista">
                <ul>
                    <li>Nome: ${jogador.nome}</li>
                    <li>Camisa: ${jogador.numero}</li>
                    <li>Posição: ${jogador.posicao}</li>
                    <li> Marcou:  ${jogador.golmarcados} gols.</li>
                    <li>Titular: ${jogador.titular ? 'sim' : 'não'}</li>
                </ul>
            </article>
              
        </section>`
        listaJogador.innerHTML += card
        }
    )
}

geraCard(jogadores)