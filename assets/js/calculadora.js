function insert(num) {
    //document.getElementById('resultado').innerHTML = num;
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function calcularPorcentagem() {
    var numero = document.getElementById('resultado').innerHTML;
    var resultado = parseFloat(numero) / 100;
    document.getElementById('resultado').innerHTML = resultado;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}
//Um valor String que contém um código JavaScript válido.