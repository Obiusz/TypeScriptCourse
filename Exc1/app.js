function add(n1, n2) {
    return n1 + n2;
}
// function printResult(num: number): void  {
//     console.log('Result: ' + num)
// }
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// printResult(add(5, 12))
var combineValues;
//This is how you declare Function types
combineValues = add;
// combineValues = printResult
console.log(combineValues(8, 8));
// let someValue: undefined
addAndHandle(10, 20, function (result) {
    console.log(result);
});
