/* você irá solicitar ao usuário que ele insira **dois números** e, 
a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par (ou ímpar)
- [ ]  Verifique se os dois números inseridos são iguais (ou diferentes)

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!

*/

alert("Insira dois números.")
let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

if (firstNumber === secondNumber) {
  alert('Os números são iguais')
} else {
  alert('Os números são diferentes')
}

if (sum % 2 === 0) {
  alert('Soma: ' + sum + '. O número é par.')
} else {
  alert('Soma: ' + sum + '. O número é ímpar.')
}

alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)

