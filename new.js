class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 20000);
console.log(heroPerson);
const friendlyPerson = new Person('Tapu', 'Khan', 30000);
console.log(friendlyPerson);