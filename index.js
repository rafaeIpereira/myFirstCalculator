function insert(num) {
    // Para habilitar somente os (números) da calculadora
    var numero = document.getElementById('resultado').innerHTML;
    // Fazer os números aparecerem um ao lado do outro 
    document.getElementById('resultado').innerHTML = numero + num;
}

// Função para que o botão (C) tenha a funcionalidade de limpar a calculadora 
function clean() {
    document.getElementById('resultado').innerHTML = '';
}

// Função para que o botão (<) apague os números um por um 
function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

// Função para calcular tudo 
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    } else {
        alert("Coloque algo, assim não da pra pensar! 😢");
    }
}