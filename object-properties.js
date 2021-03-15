const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maannaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'Dipjol'}
];
const names = [];
for (let i = 0; i < students.length; i++) {
    const object = students[i];
    const name = object.name;
    names.push(name);
}
console.log(names);

// ........simply by map().....filter()........
const names2 = students.map(s => s.name);
const ids = students.map(s => s.id);

const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);

console.log(names2);
console.log(ids);
console.log(bigger);
console.log(biggerOne);
