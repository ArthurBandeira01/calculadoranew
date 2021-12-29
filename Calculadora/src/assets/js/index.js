//Inserir N°
function insert(num){
    var number = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = number + num;
}

//Limpar:
function clean(){
    document.getElementById('resultado').innerHTML = "";
}

//Apagar um N°: 
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

//Calcular conta:
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = "Nada...";
    }
}