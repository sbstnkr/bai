let min = 5
let max = 20
let numberArray = []

for (let n=0; n<10; n++) {
  numberArray.push(Math.floor(Math.random() * (max - min + 1) ) + min);
}

console.log(numberArray)
