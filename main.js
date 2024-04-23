let letterSearch = ["хлеб", "мед", "банан", "яблоко", "Азиза", "цветок", "машина"];

let WithO = letterSearch.filter(word => word.toLowerCase().includes('н'));
let WithoutO = letterSearch.filter(word => !word.toLowerCase().includes('н'));

console.log(WithO);
console.log(WithoutO);