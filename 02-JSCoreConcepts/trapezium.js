let a = 4;
let b = 5;
let h = 6;

let d = () => {
    let p=(a+b)*h/2;
    return `Pole powierzchni trapezu o bokach: ${a}, ${b} oraz wysokości ${h} wynosi ${p}`;
}

console.log( d() );
