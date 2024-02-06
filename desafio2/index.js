let productValue = Number(prompt('Enter the product price: ',))// input
if (productValue >= 20){
    document.getElementById('result').innerHTML = 'Approved'//linkar a variavel do html

}

else{
    document.getElementById('result').innerHTML = 'Denied'//linkar novamente
}