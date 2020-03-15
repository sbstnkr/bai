class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName; 
  	}
	fullName() { 
  	return `${this.firstName} ${this.lastName.toUpperCase()} `
	}
  	initials() {
	  return `${this.firstName[0]}.${this.lastName[0]}.`
 	}
}

person = new Person("Ania", "Kowalska");

console.log(person.fullName())
console.log(person.initials())
