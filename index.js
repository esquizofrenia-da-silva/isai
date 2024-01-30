//print do python
console.log("JavaScript funcionando")

//variavel, chamada firstName, e outra chamada lastname
let firstName = "Diogo"
let lastName = "Alvarenga"

console.log(firstName, lastName)

// const = variavel constante, a idade está fixada em "18", nao da para mudar
const age = 18
console.log(age)

//Variaveis
// pode botar o valor como "null", ela vai estar nula
let nameItem = "Caneta"
let price = 3
let itemAvaible = true
let itemColor = "Azul"

console.log(nameItem, price, itemAvaible, itemColor)

// objetos
let Caneta = {
    itemName: "Caneta azul 0.3 mm", //nao se esquecer de usar as virgulas no final
    itemPrice: 2.99, // sempre usar pontos em numeros
    itemAvaible: true,
    itemColor: "Azul"
    //atributos acima
}

//Caneta.itemName(1,99)

console.log(Caneta)

//Arrays
let cars = ['gol', 'palio', 'uno', 'hb-20', 'corsa']
console.log(cars)
//para puxar um carro especifico:
console.log(cars[0]) //0 vai ser o gol, pois comecamos a contar no 0
//para mudar uma variavel, como o uno [3]:
cars[3] = 'celta'
console.log(cars)

//para ir direto a tal objeto da variavel pode:

console.log(Caneta.itemColor)

//function, aqui a funcao so vai dar um .log
function saleStatus(){
    console.log("testando funçao")

}

saleStatus()


function statusVendas(status, total) {
    console.log("Transção:"+ status + '! Total Amount $' + total)

}
statusVendas("aprovado", 30)

//tarefa

function desconto(total, descontar,valfinal) {
   console.log('Você pagou '+total+ "com o desconto de "+descontar + '%' )
   console.log('Processando...')
   console.log('Seu valor final fica sendo:'+ valfinal)
}
desconto(40, 10, 40- 40*40/100)

//resposta

function discontstatus(value, discontvalue){
    let discont = value *discontvalue/100
    return discont
}

console.log("O valor da compra é de R$",discontstatus(100,20))

//Operadores Aritimeticos

let num1 =3
let num2 =2

console.log(num1 + num2)
console.log(num1 + num2)
console.log(num1 + num2)
console.log(num1/num2)
console.log(num1%num2) //resto, valor inteiro
console.log(num1**num2)//Potenciaçao, ele pega 3(num1) e eleva a 2 (num2)


let total = 5
console.log(++total)
console.log(total++)//mostra o valor e depois inclementa, portanto acaba nao mostrando
//se eu pegar a conta acima e botar um:
console.log(--total)
//a resposta vai ser 5, pois no '(total++)' foi adicionado 1, porem nao foi mostrado por motivos acima
//ai mo '(--total)' ele tirou esse 1, fazendo virar 5 novamente


//Operadores de Atribuição

let num3 = 10

console.log(num3+=20)
//Aqui adicionamos 20 na variavel num3, deixando 30, nao apenas printamos o 10+ 20, mas sim adicionamos 20 na variaveel,
// e depois primtamos

console.log(num3-=20)
console.log(num3*=20)
console.log(num3/=20)

//Operadores de comparação

let num4 = 10

console.log(num4 > 0)
console.log(num4 < 0)
console.log(num4 >= 10)
console.log(num4 <= 10)

console.log(num4 != 10)
console.log(num4 == 10)


let num5 = 10
let num6 = '10'

console.log(num5 == num6 )// == vai ver o queta dentro do pacote, NAO VAI ver se é str ou num, so compara o valor dentro - vai dar true
console.log(num5 === num6)// === vai verificar se é str num etc, compara o tipo de variavel e o valor dentro - vai dar false

//Operadores ternarios

let driver = 120 //o motorista esta a 120 km
let speed = driver>110? 'Above':'Below' //se sim, 'Above'(acima), se nao, "Below" (abaixo)
console.log(speed)

//Operadores logicos

let temIdadeMinima = true
let temTituloEleitor = true

let podeVotar = temIdadeMinima&&temTituloEleitor //tipo o and, se as duas condiçoes sao verdadeiras, da true, caso contrario, false
console.log(podeVotar)

let podeViajar =! podeVotar //Para ele votar, nao pode viajar e vice versa
console.log(podeVotar)

//Operadores Logicos com strings

let corCliente = 'White'
let corEstoque ='Black'
let corVendida = corCliente||corEstoque //funcao 'ou'
console.log(corVendida)
//Ele da como prioridade a cor do cliente

let corCliente1 = undefined //usuario nao selecionou a cor
let corEstoque1 ='Black'
let corVendida1 = corCliente1||corEstoque1 //funcao 'ou'
console.log(corVendida1)
//Como a cor do cliente esta indefinida, o codigo dará preferencia para o preto


//Precedencia de Operadores

let num7 = 3 + 4 * 2 //ele irá multiplicar 4*2 primeiro
console.log(num7)
//para fazer a adiçao primeiro:
let numero = (3 + 4) *2
console.log(numero)


//If - Else

let driverSpeed = 60 // 60 km/ hr
if (driverSpeed >110) {

    console.log('Above Speed') //se a velocidade estiver maior que 110

}

else if (driverSpeed >= 60 && driverSpeed <= 110) {

    console.log('Speed ok')// se estiver maior ou igual 110

}

else {

    console.log('Below Speed Limit')// se estiver abaixo

}


//Switch Case

let airPortName = 'GRU'

switch (airPortName) {
    case "MCO":
        console.log('Orlando National Airport')
        break

     case "LAS":
        console.log('Las Vegas National Airport')
        break
    default:
        console.log('Nao encontrado')
        break
}