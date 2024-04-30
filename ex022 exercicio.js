// escreve 2 numero e retorne o maior deles

function max(x, y) {
  if(x > y) {
    return x;
  } else {
    return y;
  }
}

console.log(max(5,8));

console.log('-------------');

function maximo(a, b) { if(a > b) return a; return b }

console.log(maximo(5,8));

console.log('-------------');

function comparacao (c,d) { return c > d ? c : d }

console.log(comparacao(12,15));

console.log('-------------');

const max2 = (e,f) => e > f ? e : f
console.log(max2(32,40));
