function euclides_estendido(a, b) {
    if(b == 0) {
        var r = {d: a, x: 1, y: 0}
        return r;
    } else {
        var r2 = euclides_estendido(b, mod(a, b));
        var resp = {
            d: r2.d,
            x: r2.y,
            y: r2.x - (Math.floor(a/b)*r2.y)
        }
        return resp;
    }
}

function mod (x, n) {
    return (x % n + n) % n;
}

// utilzia algumas modificações para retornar valores uteis x e y, tais que
// d = ax + by