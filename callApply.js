const normalPerson = {
    firstName: 'Mehedi',
    lastName: 'Hasan',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName + this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;     //*** important */
        return this.salary;
    }
}

console.log(normalPerson);
console.log(normalPerson.firstName);

normalPerson.chargeBill(1000);           //*** important */
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);     //*** important */



const heroPerson = {
     firstName: 'Hero',
     lastName: 'Balam',
     salary: 25000,
}


const friendlyPerson = {
    firstName: 'Topu',
    lastName: 'khan',
    salary: 30000,
}


const motuPerson = {
    firstName: 'Nisar',
    lastName: 'sah',
    salary: 40000,
}

// normalPerson.chargeBill();

// ...........................................bind()....................................................
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);    //////কখন bind() ব্যবহার করবোঃ একটা অবজেক্ট এ একটা মেথড আছে, সেই ম্যাথডটা আমরা চাইলে তো সেই অবজেক্টের জন্য করতেই পারবো, কিন্তু আমরা সেই মেথডটা অন্য একটা অবজেক্টে ব্যবহার করতে চাইলে তখন bind() ব্যবহার করবো।
heroChargeBill(2000);
heroChargeBill(4000);
console.log(heroPerson);
console.log(heroPerson.salary);
console.log(normalPerson.salary);




const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(5000);
console.log(friendlyPerson);
console.log(friendlyPerson.salary);
// bind() : use bind to borrow method from another object



// .............................................call()....c for comma|কমা দিয়ে দিয়ে মেথডের প্যারামিটারগুলো লিখে যেতে হবে.........বাইন্ডের চেয়ে চাল্লু পাবলিক.............................
normalPerson.chargeBill.call(motuPerson, 1000);
console.log(motuPerson.salary);


//........................................apply()......a for array|মেথডের প্যারামিটারগুলো একটা array-র ভিতর লিখে দিতে হবে................কল এর খালাতো ভাই.....................
normalPerson.chargeBill.apply(motuPerson, [3000]);
console.log(motuPerson.salary);