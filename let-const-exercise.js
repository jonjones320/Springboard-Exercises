// In this exercise, you’ll refactor some ES5 code into ES2015.

// ## ****ES5 Global Constants****
// stop me from doing this:
// var PI = 3.14;
// PI = 42; 

/* Write an ES2015 Version */
const PI = 3.14;

// ## **Quiz**

// - What is the difference between ***var*** and ***let***?
    "var can be redefined and rescoped, but is not confined to a function block." 
    "let, within a function block, cannot be redefined but it can be rescoped";
// - What is the difference between **var** and ***const***?
    "const cannot be redefined or rescoped, but it is confined to a function block, just like 'let'."
// - What is the difference between **let** and **const**?
    "let can have the value changed but not the scope. However, const cannot have its scope or value changed"
// - What is hoisting?
    "Hoisting is when a dom initializes, and Javascript recognizes that a term is declared under 'var',"
    " even though JS has not processed down the page. The variable can be referenced before it is declared."