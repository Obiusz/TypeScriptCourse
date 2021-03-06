// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
//     //tuple - array złożony wyłącznie z dwóch elementów
// } = {
//     name: 'Obisław',
//     age: 33,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role { ADMIN = 5, READ_ONLY, AUTHOR };
// można przypisać własną wartość enumowi - jakąkolwiek
// jeste jeszcze type 'any', ale nie warto używać:
// cały TS traci wtedy swoje zalety

const person = {
    name: 'Obisław',
    age: 33,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

// person.role.push('admin')
// person.role[1] = 10

// person.role = [0, 'admin', 'user']

let favoriteActivities: string[]
favoriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if (person.role === Role.AUTHOR) {
    console.log('is author')
}