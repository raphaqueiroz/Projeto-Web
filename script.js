let jogadores = [
  

    {
        nome:"Marcos",
        numero:1 ,
        posicao:"goleiro",
        golmarcados:0 ,
        titular:true // TRUE OU FALSE
    },
    {
        nome:"Cafú",
        numero: 2,
        posicao:"lateral-direito",
        golmarcados:0,
        titular:true // TRUE OU FALSE
    },
    {
        nome:"Lúcio",
        numero:"3" ,
        posicao:"zagueiro",
        golmarcados: 0,
        titular:true // TRUE OU FALSE
    },
    {
        nome:"Roque Júnior",
        numero: "4",
        posicao:"zagueiro",
        golmarcados:0 ,
        titular:true // TRUE OU FALSE
    },
    {
        nome:"Edmílson",
        numero: "5",
        posicao:"volante e zagueiro",
        golmarcados:1 ,
        titular:true // TRUE OU FALSE
    },
    {
        nome:"Roberto Carlos",
        numero: "6",
        posicao:"lateral-esquerdo",
        golmarcados:1 ,
        titular:true // TRUE OU FALSE
    },
    {
        nome:"Ricardinho",
        numero: "7",
        posicao:"meio-campista",
        golmarcados: 0,
        titular:true // TRUE OU FALSE
    },
    {
        nome:"Gilberto Silva",
        numero: "8",
        posicao:"volante",
        golmarcados:0 ,
        titular:true // TRUE OU FALSE
    },
    {
        nome:"Ronaldo",
        numero: "9",
        posicao:"atacante",
        golmarcados:8 ,
        titular:true // TRUE OU FALSE
    },
    {
        nome:"Rivaldo",
        numero: "10",
        posicao:"atacante",
        golmarcados:5 ,
        titular:true // TRUE OU FALSE
    },
    {
        nome:"Ronaldinho Gaúcho",
        numero: "11",
        posicao:"meio-camppista",
        golmarcados: 2,
        titular:true // TRUE OU FALSE
    },
    {
        nome:"Dida",
        numero: "12",
        posicao:"goleiro",
        golmarcados: 0,
        titular:"false" ,
    },
    {
        nome:"Belletti",
        numero: "13",
        posicao:"lateral-direito",
        golmarcados: 0,
        titular:"false" // TRUE OU FALSE
    }
    
]
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

    console.log(`Este foi um dos jogadores da seleção brasileira de 2002 \n
                ${objeto.nome}
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


function pesquisaJogador(jogador, nome){
    const jogadorRetornado = jogador.filter(player => {
        return player.nome.toUpperCase().includes(nome.toUpperCase())
    })
    if (jogadorRetornado.lenth === 0){
        alert("Jogador não econtrado")
    } else{
        return jogadorRetornado
    }
}

let buscaJogador = prompt("Que jogador gostaria de ver?")

console.log(pesquisaJogador(jogadores, buscaJogador))

let jogadorEncontrado = pesquisaJogador(jogadores, buscaJogador)

imprimeStringObjeto(jogadorEncontrado)











