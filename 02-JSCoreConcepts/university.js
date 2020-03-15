names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter){
        return names.filter((name) => name.startsWith(letter))
    }

    sort() {
        return names.sort();
    }

    get() {
        return names;
    }

    getFirst(n) {
    		return names.slice(0, n);
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith("P"));
console.log(students.startWith("M").sort());
console.log(students.getFirst(4).sort());
console.log(students.getFirst(2).startWith("M").sort());
console.log(students.get());
