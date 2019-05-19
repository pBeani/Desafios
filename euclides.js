function euclides(a, b) {
    if(b == 0) {
        return a;
    } else {
        return euclides(b, mod(a, b));
    }
}

function mod (x, n) {
    return (x % n + n) % n;
}

// para a chamada recursiva
// a%b = resto de a/b = a - b*q(quociente)
// lembranado da regra d|a e d|b então d/ax +by, se tomarmos x = 1 e y = -1q, temos a equação válida

// para a condição de parada
// temos a regra que MDC(a, 0) = |a|

// Ex: 40 e 30
// primeira chamada:
// 40: 1,2,4,5,8,10,20,40
// 30: 1,2,3,5,6,10,15,30
// segunda chamada
// 30: 1,2,3,5,6,10,15,30
// 40%30 = 10: 1,2,5,10
// terceira chamada
// 10: 1,2,5,10
// 30%10 = 0;
// retorna a = 10

// quando b for maior que a temos que a segunda chamada recursiva será
// b, a%b = a
// ex: 30 e 40 a chamada será euclides(40, 30%40 = 30)