function equationSolver(a, b, n) {
    var init = euclides_estendido(a, n);

        console.log(init);
        if ((b % init.d) == 0) {
            var x0 = mod((init.x * (b / init.d)), n);

            for (var i = 0; i <= init.d - 1; i++) {
                console.log(mod((x0 + (i * (n / init.d))), n));
            }

        } else {
            console.log("Não existem soluções")
        }
}

function mod (x, n) {
    return (x % n + n) % n;
}

// o algoritmo considera a equação ax = b (modulo n)
// ele recebe como parâmetro os valores de a, b e n
// retorna como resposta todos os valores x que satisfazem a equação
// o algoritmo começa fazendo uma chamada para o algoritmo de euclides estendido
// esse algoritmo retorna um tripla d, x e y
// em seguinda, ele olha para o resultado D e verifica se d é um divisor de b ( já sabemos que é um divisor de n e a)
// se ele não for, significa que a equação não tem resposta.
// caso contrário, ele calculo o valor inicial de x % n
// em seguida, ele usa a técnica que vimos de gerar subgrupos apartir de um elemento
// no caso, o elemento é o x0 e subgrupo é aquele que compõe as soluções que queremos