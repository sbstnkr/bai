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

jan = new Person("Jan", "Nowak");
sebastian = new Person("Sebastian", "Krawczyk")

console.log(jan.fullName());
console.log(jan.initials());
console.log(sebastian.fullName());
console.log(sebastian.initials());
