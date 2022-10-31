/* Let Keyword allows us to declare the variable within the scope(that are limited to the scope) 
of a block of satement. Let keyword is used only within the function where it is declared */

/* Var Keyword declares a variable globally, or locally to entire function regardless of block space.
Var Keyword is used globally within one or more functions */

var x = 60;
// Here the value of x is 60;
{
    let x = 30;
    console.log("let keyword: ", x);
    // Here the value of x is 30;
}
console.log("var keyword: ", x);
// Here the value of x is 60