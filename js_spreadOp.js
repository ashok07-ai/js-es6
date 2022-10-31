/* The Spread Operator(...) allows an iterable, such as an array or string */

const fruits = ["mango", "banana", "apple"];
const vegetables = ["potato", "tomato", "carrot"];

const combined_result = [fruits, ...vegetables]
console.log(combined_result);

const brands = ["Dell", "Lenovo", ..."Acer"]
console.log(brands)