let student = {
    names : 'Alexandre',
    favoriteFood : 'Donuts',
    city : 'Paris',
};

//simple 

let result = 0;
let values = Object.values (student);

values.forEach ((value) => {
    result += value.length
});

console.log(result)

if (result%2) { // pour mettre en binaire (0/1)
    console.log("impair")
}
else {
    console.log("pair")

}


/*let  total = 0
console.log(total = student.names.length + student.favoriteFood.length + student.city.length)

if (total%2 == 0) {
    console.log("pair")
}
else {
    console.log("impair")
}*/
//Ternaire
//console.log (`Le résultat est ${result % 2  ? 'impair' : 'pair'}`);
//condition ? vrai : faux