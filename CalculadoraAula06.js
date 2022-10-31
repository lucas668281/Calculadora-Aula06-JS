//Calculadora nivel 1

function adicionar (a, b){
    const resultado = a + b;
    return resultado;
}

function subtracao(a = 0, b = 0){
    const resultado = a - b;
    return resultado;
}

function multiplicacao (a = 0, b = 0){
    const resultado = a * b;
    return resultado;
}

function divisao (a = 0, b = 0){
    const resultado = a / b;
    return resultado;
}

//Nivel 2

console.log ("-------------- Teste de Operações / Calculadora --------------")

console.log(adicionar(5, 5));//10
console.log(subtracao(10, 5));//5
console.log(multiplicacao(2, 10));//20
console.log(divisao(2, 2));//1
console.log(divisao(0, 0));//erro

//Nivel 3

console.log ("-------------- Teste de Funções Extras --------------")

function quadradoDoNumero (a = 0) {
    const resultado = multiplicacao (a , a);
    return resultado;
}

function mediaDeTresNumeros (a , b , c){
    const resultado = adicionar(a , b) + c;
    const total = divisao( resultado , 3)
    return total;
}

function calculaPorcentagem (a, valorPorcentagem) {
    const porcentagem = divisao(valorPorcentagem , 100 );
    const resultado = multiplicacao(porcentagem , a )
    return resultado;
}

function geradorDePorcentagem (a , b){
    const valorA = divisao(b , 100);
    const resultado = divisao(a, valorA)
    return resultado;
}

console.log (quadradoDoNumero(5)); // 25    
console.log (mediaDeTresNumeros(10, 5, 10)); //8.33
console.log (calculaPorcentagem(300 , 15)); // 45
console.log (geradorDePorcentagem (2 ,200)); // 1
