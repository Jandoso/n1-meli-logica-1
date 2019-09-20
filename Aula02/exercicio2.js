/* 
Escreva um programa que sorteia um número de 1 a 10 e dá duas chances para que o usuário acerte.

1.1. Escreva um programa que sorteia um número de 1 a 10, dá duas chances para que o usuário acerte, mas informa se o número sorteado é maior ou menor que o primeiro palpite.

1.2. Faça o mesmo programa anterior, agora com 3 palpites.

Sorteie dois números de 1 a 5 e peça que o usuário acerte os dois números de uma vez, não necessariamente na mesma ordem.

Sorteie dois números de 1 a 10. Informe quantos destes números estão entre 3 e 7 (inclusive).

Escreva um programa que joga par ou ímpar com o usuário.

Crie um programa que solicita que o usuário digite uma palavra que começa com a letra A. O programa deve então exibir uma mensagem dizendo se ele acertou ou errou. (Importante o programa aceitar que a letra A seja digitada tanto em minúsculas quanto em maiúsculas). 
________________________________________________________________ */

/*Escreva um programa que sorteia um número de 1 a 10 e dá duas chances para que o usuário acerte.*/
const sorteado = Math.floor((Math.random() * 10) + 1);
const palpite1 = parseInt(prompt('Sorteamos um número de 1 a 10! Vamos ver se você consegue acertar! Digite seu primeiro palpite: '))


if (sorteado == palpite1) {
    alert(`Você acertou! Sorteamos o número ${sorteado}`)
} else {
    const palpite2 = parseInt(prompt('Não foi dessa vez! Quer tentar outra vez? Qual é o seu segundo palpite?: '))
    if (sorteado == palpite2) {
        alert(`Você acertou! Sorteamos o número ${sorteado}!`)
    } else {
        alert('Não foi dessa vez campeão!')
    }
}

/*1.1. Escreva um programa que sorteia um número de 1 a 10, dá duas chances para que o usuário acerte, mas informa se o número sorteado é maior ou menor que o primeiro palpite.*/
const sorteado = Math.floor((Math.random() * 10) + 1);
const palpite1 = parseInt(prompt('Sorteamos um número de 1 a 10! Vamos ver se você consegue acertar! Digite seu palpite: '))


if (sorteado == palpite1) {
    alert("Acertou miserávi!")
} else if (sorteado > palpite1) {
    const palpite2 = parseInt(prompt("O número sorteado é maior do que o seu palpite. Tente mais uma vez: "))
    if (sorteado == palpite2) {
        alert("Acertou miserávi!")
    } else
        alert("Não foi dessa vez!")
} else {
    const palpite2 = parseInt(prompt("O número sorteado é menor do que o seu palpite. Tente mais uma vez: "))
    if (sorteado == palpite2) {
        alert("Acertou miserávi!")
    } else {
        alert("Não foi dessa vez!")
    }
}
//Com laços de repetição

const sorteado = Math.floor((Math.random() * 10) + 1);
const contador = 0
while (contador < 2){
    let palpite = parseInt(prompt("Digite seu palpite: "))
}



//1.2. Faça o mesmo programa anterior, agora com 3 palpites.
const sorteado = Math.floor((Math.random() * 10) + 1);
const palpite1 = parseInt(prompt('Sorteamos um número de 1 a 10! Vamos ver se você consegue acertar! Qual é o seu palpite: '))

if (sorteado == palpite1) {
    alert("Acertou miserávi!")
} else if (sorteado > palpite1) {
    const palpite2 = parseInt(prompt("O número sorteado é maior do que o seu palpite. Tente mais uma vez: "))
    if (sorteado == palpite2) {
        alert("Acertou miserávi!")
    } else if (sorteado > palpite2) {
        const palpite3 = parseInt(prompt("O número sorteado é maior do que o seu palpite. Tente mais uma vez: "))
        if (sorteado == palpite3) {
            alert("Agora acertou miserávi!")
        } else {
            alert("Não foi dessa vez!")
        }
    } else {
        const palpite3 = parseInt(prompt("O número sorteado é menor do que o seu palpite. Tente mais uma vez: "))
        if (sorteado == palpite3) {
            alert("Agora acertou miserávi!")
        } else {
            alert("Não foi dessa vez!")
        }
    }
} else {
    const palpite2 = parseInt(prompt("O número sorteado é menor do que o seu palpite. Tente mais uma vez: "))
    if (sorteado == palpite2) {
        alert("Acertou miserávi!")
    } else if (sorteado > palpite2) {
        const palpite3 = parseInt(prompt("O número sorteado é maior do que o seu palpite. Tente mais uma vez: "))
        if (sorteado == palpite3) {
            alert("Agora acertou miserávi!")
        } else {
            alert("Não foi dessa vez!")
        }
    } else {
        const palpite3 = parseInt(prompt("O número sorteado é menor do que o seu palpite. Tente mais uma vez: "))
        if (sorteado == palpite3) {
            alert("Agora acertou miserávi!")
        } else {
            alert("Não foi dessa vez!")
        }
    }
}




/* Sorteie dois números de 1 a 5 e peça que o usuário acerte os dois números de uma vez, não necessariamente na mesma ordem. */

const sorteado1 = Math.floor((Math.random() * 5) + 1)
const sorteado2 = Math.floor((Math.random() * 5) + 1)
const palpite1 = parseInt(prompt('Sorteamos dois números de 1 - 5. Qual é o seu primeiro palpite?: '))
const palpite2 = parseInt(prompt('Quer dar um segundo palpite?: '))

if ((sorteado1 == palpite1 || sorteado1 == palpite2) && (sorteado2 == palpite1 || sorteado2 == palpite2)) {
    console.log('Parabéns! Você acertou os dois números que foram sorteados!')
} else {
    console.log('Você não acertou os dois números! Tente outra vez!')
}

/*Sorteie dois números de 1 a 10. Informe quantos destes números estão entre 3 e 7 (inclusive).*/
const sorteado1 = Math.floor((Math.random() * 10) + 1)
const sorteado2 = Math.floor((Math.random() * 10) + 1)

if ((sorteado1 >= 3 && sorteado1 <= 7) && (sorteado2 >= 3 && sorteado2 <= 7)) {
    console.log('Ambos os números sorteados são maiores ou iguais a 3 e menores ou igual a 7')
} else if ((sorteado1 >= 3 && sorteado1 <= 7) && (sorteado2 < 3 || sorteado2 > 7)) {
    console.log('O primeiro número é maior ou igual a 3 e menor ou igual a 7. O segundo não necessariamente!')
} else if ((sorteado1 < 3 || sorteado1 > 7) && (sorteado2 >= 3 && sorteado2 <= 7)) {
    console.log('O primeiro número não é maior ou igual a 3 e menor ou igual a 7. Mas o segundo é!')
} else {
    console.log('Nenhum dos dois números sorteados satisfazem as condições: maior ou igual a 3 e menor ou igual a 7')
}

//Escreva um programa que joga par ou ímpar com o usuário.

//Usuário escolhe se quer par ou ímpar
const parOuImpar = prompt('Vamos brincar de Par ou Ímpar. Pra começar digite P para Par ou I para Ímpar!: ')
//Usuário escolhe um número de 0 a 10
const numeroUsuario = parseInt(prompt('Agora escolha um número de 0 a 10: '))
//Computador sorteia um número de 0 a 10
const numeroSorteado = Math.floor(Math.random() * 10)
//Soma dos números escolhido + sorteado
const soma = numeroUsuario + numeroSorteado
//Verificação se é par ou ímpar:
//Se o usuário escolheu par e a soma deu par --> Venceu
//Se o usuário escolheu ímpar e a soma deu ímpar --> Venceu
//Se o usuário escolheu par e a soma deu ímpar --> Perdeu
//Se o usuário escolheu ímpar e a soma deu par --> Perdeu
if ((parOuImpar == 'P' || parOuImpar == 'p') && (soma % 2 == 0)) {
    console.log(`Você escolheu Par e a soma dos nosso números deu ${soma} que é um número par! Acertou miseráve!`)
} else if ((parOuImpar == 'I' || parOuImpar == 'i') && (soma % 2 != 0)) {
    console.log(`Você escolheu Ímpar e a soma dos nossos números deu ${soma} que é um número ímpar! Acertou miseráve!`)
} else if ((parOuImpar == 'P' || parOuImpar == 'p') && (soma % 2 != 0)) {
    console.log(`Você escolheu Par mas a soma dos nossos números deu ${soma}, que é um número ímpar! Perdeu playboy!`)
} else if ((parOuImpar == 'I' || parOuImpar == 'i') && (soma % 2 == 0)) {
    console.log(`Você escolheu Ímpar mas a soma de nossos números deu ${soma}, que é um número Par! Perdeu playboy!`)
}

/*Crie um programa que solicita que o usuário digite uma palavra que começa com a letra A. O programa deve então exibir uma mensagem dizendo se ele acertou ou errou. (Importante o programa aceitar que a letra A seja digitada tanto em minúsculas quanto em maiúsculas).*/




