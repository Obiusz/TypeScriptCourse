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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
// można przypisać własną wartość enumowi - jakąkolwiek
// jeste jeszcze type 'any', ale nie warto używać:
// cały TS traci wtedy swoje zalety
var person = {
    name: 'Obisław',
    age: 33,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// person.role.push('admin')
// person.role[1] = 10
// person.role = [0, 'admin', 'user']
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
