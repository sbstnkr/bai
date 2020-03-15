const title = "dr";
const name = "Mateusz";
const surname = "Kubicki";
const street = "Długa 15";
const city = "Kraków";
const zip = "30-781";
const country = "Poland";
const countryUpper = country.toUpperCase()

console.log(`
    ${title} ${name} ${surname}
    ul. ${street} 
    ${zip} ${city}
    ${country}
`);

console.log(`
    ${title} ${name} ${surname}
    ul. ${street} 
    ${zip} ${city}
    ${countryUpper}
`);
