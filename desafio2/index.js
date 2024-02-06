let productValue = Number(prompt('Enter the product price: '))// input




if (productValue >= 20){
    document.getElementById('result').innerHTML = 'Approved'//linkar a variavel do html
    document.getElementById('purchase').innerHTML = productValue
    
}

    

else{
    document.getElementById('result').innerHTML = 'Denied'//linkar novamente
    document.getElementById('purchase').innerHTML = productValue
    document.getElementById('missing').innerHTML = 20 - productValue
    
}
