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



//pegar liçao

//for loop

for(i=1; i<=5;i++) {
    console.log("O numero é",i)
}

let myNumber =20

for (i=1; i<=myNumber; i++) {
    console.log('O numero é', i)
}

//While loop

let index = 1
while(index<=100) {
    console.log("O numero é", index)
    index++
}

//Do While Loop

let index2 =1
do{
    console.log('Numero',index2)
}

//For of Loop

const friends = ["Joao","Matheus", "Diego","Larissa","Luana"]

for(let friend of friends){
    console.log(friend)
}

//OPP Object Oriented Programming - programaçao orientada a objetos

// const book = {
//     title: 'Atomic Heart',
//     author: 'James Clear',
//     pages: 320,
//     price: 29.99,
//     chapters: {
//         chapter1: "The Fundamental of Atomic Habits", //Consigo botar atributos, dentro de atributos
//         chapter2: "The surprising",
//         chapter3: "...",

//         printbook: function(){ //Podemos botar funções dentro de objetos

//             console.log("Print book...")

//         }
//     }
// }

//console.log(book) //para pedir o printbook (funçao acima)


//Factory Function (factory = fabricA)

// function CreateBook(title, author, pages, price){
 
//     const book = {
//     title: title,
//     author: author,
//     pages: pages,
//     price: price,

        
//     }
//     return book
// }

// const book1 = new CreateBook("Atomic Hearts","James Clear",320,29.99) //bote o CreateBook para dizer que a variavel pertence a funçao
// const book2 = new CreateBook("The Power of Habits","Charles Duhigg",371, 25.90)
// book1.color = "Red" //botando mais um atributo
// book2.color = "Blue"
// console.log(book1, book2)


//Constructor Function

//fuçoes sao criada com duas letras maiusculas tipo CreaterBook, as variaveis sao apenas uma, createrBook

// construtor nao precisa de return
function CreaterBook (title, author, pages, price) {

    this.title = title, //este titulo = esse titulo
    this.author = author,
    this.pages = pages,
    this.price = price

}

const book1 = new CreaterBook("The Power of Habits","Charles Duhigg",371, 25.90)
book1.color = "Green"
console.log(book1)

//Garbage Collection >> objetos gasta memoria, se o objeto nao estiver sendo usado ele o "apaga", deixando em desuso, liberando memoria


//Built-in Objects

//biblioteca nativa math
console.log(Math.max(2,2455,34, 4543, 56, 430, 223)) //max vai retornar o valor maximo
console.log(Math.min(2,2455,34, 4543, 56, 430, 223)) // min vai retornar o valor minimo
console.log(Math.round(3.5)) //round vai arredondar para o valor mais proximo
console.log(Math.PI) //puxar o pi
console.log(Math.random(55)) //retorna um numero flutuante

//Strings

let message = "Hey, whats up?"
console.log(message.startsWith("Hey")) //ver se o valor de message começa com Hey
console.log(message.endsWith("up?")) // termina com
console.log(message.includes(",")) // se tem tal caracter n string
console.log(message.length) //quantos caracters


let name = "Joe"

const email = "Hi " + name + ",\nThe meet is scheduled for 10:00 AM!" //o \n é a quebra de linha, se botar umespaço depois, gtbm sai no texto
console.log(email)
const email1 =`Hi ${name},
The meet is scheduled for 10:00 AM!` //assim é a atual forma de quebrar a linha e botar variavel no texto
console.log(email1)

//Entendendo as Arrays a fundo

const random = ['Marcos', 1, true]
console.log(random) //random é apenas o nome da variavel

const num = [7,8,9]
num.push(10)// empurrar, ele bota o valor dentro da array(lista), ficando no final
console.log(num)
num.unshift(1,2,3)// vai adicionar no começo, ja que o push adiciona no final
console.log(num)

num.splice(3,0,4,5,6)//a partir da casa 3 (primeiro caractere no splice), ele apagrá 0 (segundo caractere no splice) caracteres, e irá adicionar os numeros 4,5,6 (ultimos caracteres)
console.log(num)

console.log(num.indexOf(8))//ele diz a posiçao em que está o numero que voce bota, se botei 8, estará como setimo caractere, vale lembrar que ele conta o zero
console.log(num.includes(21))// vai procurar se tal numerovai estar na array

//Arrays de referência

const movies = [

    {id:1, title: 'The Matrix', ratting: '4.5'},
    {id:2, title: 'The GoodFather', rating: '5'}
]

console.log(movies.find(function(movie){ //voce usa a funcao .find dentro do .log, e dentro do fund criamos a funcao 'movie'
    return movie.title === 'The GoodFather'// a funcao retorna o filme que é igual a tal string
//movie.title, porque ta procurando o title da movies, mas dentro da funcao movie
} ))

//Arrow Functions

console.log(movies.find(movie=>movie.title === 'The Matrix'))//Fazendo a mesma coisa que em cima, mas de forma simplificada