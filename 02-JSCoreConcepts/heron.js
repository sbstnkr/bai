let a = 4;
let b = 5;
let c = 6;

let d = () => {
    let p=(a+b+c)/2;
    let S=Math.sqrt(p*(p-a)*(p-b)*(p-c));
    return "Pole trójkąta o bokach: ${a}, ${b} oraz ${c} wynosi ${S}";
}

console.log( d() );
