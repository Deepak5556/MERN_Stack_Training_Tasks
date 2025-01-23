// 2. Conditional branching: if, ‘?’: 
// o Task 36: Write an if statement that checks if a number is even or odd. 
// o Task 37: Use nested if statements to classify a number as negative, positive, or 
// zero. 
// o Task 38: Use the conditional (ternary) operator ‘?’ to rewrite a simple if…else 
// statement. 
// o Task 39: Check the validity of a variable using the ? operator. 
// o Task 40: Use the conditional operator to assign a value to a variable based on a 
// condition. 

// Task36();
// Task37();
// Task38();
// Task39();
// Task40();

function Task36(){
    //checks if a number is even or odd.
    let a = prompt("Task 36 : Enter a Number For Checking Odd or Even")
    if(a%2==0){
        console.log(a + " is Odd Number");
    }
    else{
        console.log(a + " is Even Number");
    }
}

function Task37(){
    // Nested if statements
    let a = prompt("Task 37: Enter a Number For Checking Negative , Positive or Zero");
    if(a<=0)
    {
        if(a==0)
        {
            console.log("Entered Value is Zero");
        }
        else{
            console.log("Entered Value is Negative");   
        }
    }
    else{
        console.log("Entered Value is Positive");
    }
}

function Task38(){
    //The conditional (ternary) operator ‘?’
    let a =Number(prompt("Enter an Number"));
    console.log(a%2==0? a + " is Even":a+" is Odd");   
}

function Task39(){
    //validity of a variable using the ? operator.
    let a = null;
    result = a ?? "Default Value";
    console.log(result);    
}

function Task40() {
    // The conditional operator to assign a value to a variable based on a condition. 
    let a = prompt("Enter Your Age");
    let age = Number(a);
    let res = age > 18 ? eligible() : noteligible();
    console.log(res);
    function eligible() {
        return 'Accepted';
    }

    function noteligible() {
        return "Not Accepted";
    }
}