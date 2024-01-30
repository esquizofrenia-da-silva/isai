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

}

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

console.log(discontstatus(100,20))