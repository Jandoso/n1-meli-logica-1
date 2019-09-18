/* 
Primeira lista de exercícios

1. Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10.

2. Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior.

3. Altere o exercício anterior de forma que ele informe também se os números são iguais.

4. Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.

5. Crie um programa que recebe um número inteiro e informa se este número é múltiplo de 10.
*/

//Exercício 1 
const numero = parseInt(prompt("Digite um número inteiro:"))
if (numero > 10) {
    console.log(`Você digitou o número ${numero} e ele é maior que 10!`)
} else if (numero === 10) {
    console.log("Você digitou o número 10!")
} else {
    console.log(`Você digitou o número ${numero} e ele é menor que 10!`)
}

//Exercício 2
const numero1 = parseInt(prompt("Digite um número inteiro: "))
const numero2 = prompt("Digite outro número inteiro: ")
if (numero1 > numero2){
    console.log(`${numero1} foi o primeiro número que você digitou e é maior do que ${numero2} que foi o segundo informado!`)
}else {
    console.log(`${numero1} foi o primeiro número que você digitou e é menor do que ${numero2} que foi o segundo informado`)
}

//Exercício 3
const numero1 = parseInt(prompt("Digite um número inteiro: "))
const numero2 = prompt("Digite outro número inteiro: ")
if (numero1 > numero2){
    console.log(`${numero1} foi o primeiro número que você digitou e é maior do que ${numero2} que foi o segundo informado!`)
} else if (numero1 == numero2){
    console.log(`Você digitou duas vezes o número ${numero1}!`)
}else {
    console.log(`${numero1} foi o primeiro número que você digitou e é menor do que ${numero2} que foi o segundo informado`)
}

//Exercício 4 
const numeroParOuImpar = parseInt(prompt("Informe um número inteiro: "))
if (numeroParOuImpar%2 == 0){
    console.log("O número informado é PAR!")
}else {
    console.log("O número informado é ÍMPAR!")
}

//Exercício 5
const numeroMultiplo = parseInt(prompt("Digite um número inteiro: "))
if (numeroMultiplo % 10 != 0){
    console.log(`O número informado, ${numeroMultiplo}, não é múltiplo de 10`)
} else {
    console.log(`O número informado, ${numeroMultiplo}, é múltiplo de 10`)
}

