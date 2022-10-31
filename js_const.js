/* Const Keyword is similar to Let Keyword, expect that Const Keyword allows us to decleare the constant
value ie, value cannot be changed. Likewise Let Keyword Const Keyword is used to declare within a scope
*/

var x = 30;
// Value of x is 30
{
    const x = 50;
    console.log(x);
    // Value of x is 50
}
console.log(x);
// Value of x is 30
