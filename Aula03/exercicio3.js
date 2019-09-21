/* # Terceira lista de exercícios

1. Escreva um programa que solicita o nome e a altura de 5 atletas. Ao final da entrada de dados, informe A ALTURA do atleta mais alto. 

    1.1. Complemente o exercício anterior agora informando o NOME e a ALTURA do atleta mais alto. 

    1.2 informe também a altura média destes 5 atletas. 

    1.3 não restrinja a entrada de dados a apenas 5 atletas. Agora após a inclusão de cada atleta o programa deve perguntar ao usuário se deseja incluir outro. A resposta é dada com (S/N). O programa continua mostrando o nome do mais alto, e a altura média.

2. Solicite que seja digitada uma palavra que contenha a letra F ou comece com a letra P 

_________________________________________________________________________________________________________*/

//1. Escreva um programa que solicita o nome e a altura de 5 atletas. Ao final da entrada de dados, informe A ALTURA do atleta mais alto. 

let altura = []
let contador = 0

while (contador < 5) {
    altura.push(parseInt(prompt("Informe a altura do atleta (em cm - 180, por exemplo): ")))

    contador++
}

let maior = Math.max.apply(Math, altura)

alert(`O maior atleta mede ${maior}`)

// 1.1. Complemente o exercício anterior agora informando o NOME e a ALTURA do atleta mais alto.

let altura = []
let nome = []
let contador = 0

while (contador < 5) {
    nome.push(prompt("Informe o nome do atleta: "))
    altura.push(parseInt(prompt("Informe a altura do atleta (em cm - 180, por exemplo): ")))

    contador++
}

let maior = Math.max.apply(Math, altura)

alert(`O maior atleta é  ${nome[altura.indexOf(maior)]} que mede ${maior}`)

//1.2 informe também a altura média destes 5 atletas. 

let altura = []
let nome = []
let contador = 0

while (contador < 5) {
    nome.push(prompt("Informe o nome do atleta: "))
    altura.push(parseInt(prompt("Informe a altura do atleta (em cm - 180, por exemplo): ")))

    contador++
}


let maior = Math.max.apply(Math, altura)

let total = altura.reduce((total, altura) => {
    return total + altura;
}, 0);
console.log(total);

let media = total / (altura.length)

alert(`O maior atleta é  ${nome[altura.indexOf(maior)]} que mede ${maior}`)
alert(`A média da altura dos 5 atletas é ${media}`)

/* 1.3 não restrinja a entrada de dados a apenas 5 atletas. Agora após a inclusão de cada atleta o programa deve perguntar ao usuário se deseja incluir outro. A resposta é dada com (S/N). O programa continua mostrando o nome do mais alto, e a altura média. */

let altura = []
let nome = []
let adicionar = false

while (adicionar = true) {
    nome.push(prompt("Informe o nome do atleta: "))
    altura.push(parseInt(prompt("Informe a altura do atleta (em cm - 180, por exemplo): ")))
    let resposta = prompt("Gostaria de adicionar mais um atleta? S para sim e N para não: ")
    if (resposta == "S" || resposta == "s") {
        adicionar = true
    } else {
        break
    }
}

let maior = Math.max.apply(Math, altura)

let total = altura.reduce((total, altura) => total + altura, 0)

let media = total / (altura.length)

alert(`O maior atleta é  ${nome[altura.indexOf(maior)]} que mede ${maior}`)
alert(`A média da altura dos ${altura.length} atletas é ${media}`)

//2. Solicite que seja digitada uma palavra que contenha a letra F ou comece com a letra P 

const palavra = prompt("Digite uma palavra: ")

palavra[0] == "P" || palavra[0] == "p"
palavra[i] == "F" || palavra[i] == "f"

