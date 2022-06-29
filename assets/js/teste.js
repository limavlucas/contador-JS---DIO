var currentNumberwrapper = document.getElementById('currentNumber');

var erro = document.getElementById('error')

var currentNumber = 0;

var mensagemErro=""

function increment(){
    if(currentNumber < 10){
        currentNumber +=1;
        currentNumberwrapper.innerHTML = currentNumber;
        console.log(currentNumber)
        mensagemErro=""
        erro.innerHTML = mensagemErro;
    }else{
        currentNumber = 0
        currentNumberwrapper.innerHTML = currentNumber;
        
    }
}

function decrement(){
    if(currentNumber >0){
        currentNumber -=1;
        currentNumberwrapper.innerHTML = currentNumber;
    }else{
        mensagemErro = "o contador não exibe numeros negativos"

        erro.innerHTML = mensagemErro;
    }
}