let jogadores = [
  

    {
        nome:"Marcos",
        numero:1 ,
        posicao:"goleiro",
        golmarcados:"" ,
        titular:"true" // TRUE OU FALSE
    },
    {
        nome:"Cafú",
        numero: 2,
        posicao:"lateral-direito",
        golmarcados:"",
        titular:"true" // TRUE OU FALSE
    },
    {
        nome:"Lúcio",
        numero:"" ,
        posicao:"zagueiro",
        golmarcados: "",
        titular:"true" // TRUE OU FALSE
    },
    {
        nome:"Roque Júnior",
        numero: "",
        posicao:"zagueiro",
        golmarcados:"" ,
        titular:"true" // TRUE OU FALSE
    },
    {
        nome:"Edmílson",
        numero: "",
        posicao:"volante e zagueiro",
        golmarcados:"" ,
        titular:"true" // TRUE OU FALSE
    },
    {
        nome:"Roberto Carlos",
        numero: "",
        posicao:"lateral-esquerdo",
        golmarcados:"" ,
        titular:"true" // TRUE OU FALSE
    },
    {
        nome:"Ricardinho",
        numero: "",
        posicao:"meio-campista",
        golmarcados: "",
        titular:"true" // TRUE OU FALSE
    },
    {
        nome:"Gilberto Silva",
        numero: "",
        posicao:"volante",
        golmarcados:"" ,
        titular:"true" // TRUE OU FALSE
    },
    {
        nome:"Ronaldo",
        numero: "",
        posicao:"atacante",
        golmarcados:"" ,
        titular:"true" // TRUE OU FALSE
    },
    {
        nome:"Rivaldo",
        numero: "",
        posicao:"atacante",
        golmarcados:"" ,
        titular:"true" // TRUE OU FALSE
    },
    {
        nome:"Ronaldinho Gaúcho",
        numero: "",
        posicao:"meio-camppista",
        golmarcados: "",
        titular:"true" // TRUE OU FALSE
    },
    {
        nome:"Dida",
        numero: "",
        posicao:"goleiro",
        golmarcados: "",
        titular:"false" ,
    },
    {
        nome:"Belletti",
        numero: " ",
        posicao:"lateral-direito",
        golmarcados: "",
        titular:"false" // TRUE OU FALSE
    }
    
]

console.log(jogadores[0].nome)
for(let i = 0; i <= jogadores.length; i++) {
    console.log(`${jogadores[i].nome}, ${jogadores[i].posicao}, ${jogadores[i].titular}`)
    // console.log(jogadores[i].nome)
    // console.log(jogadores[i].posicao)
    // console.log(jogadores[i].titular)
}

