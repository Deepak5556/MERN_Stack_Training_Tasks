// 2. Basic operators, maths: 
// o Task 26: Convert a string to a number using both implicit and explicit conversion. 
// o Task 27: Convert a boolean to a string and vice versa. 
// o Task 28: Practice basic arithmetic operators (+, -, *, /, %). 
// o Task 29: Use the ++ and -- operators on a numeric variable. 
// o Task 30: Explore the precedence of operators by combining multiple operators in 
// a single expression. 

// Task26();
// Task27();
// Task28();
// Task29();
// Task30();


function Task26(){
    //Implicit
    let a = "450";
    console.log(typeof(a));
    let b = a*5;
    console.log(b);
    console.log(typeof(b));
    //Explicit
    let Age = "20";
    console.log(Age);
    let res = parseInt(Age);
    let num= Number(Age);
    let c = parseFloat(Age+0.5);
    console.log(num);
    console.log(typeof(num));
    console.log(typeof(c));
    console.log(c);
    console.log(typeof(res));
}

function Task27(){
    //boolean to a string and vice versa.
    let boolValue = true;
    console.log(typeof(boolValue));
    let MethodOne = String(boolValue);
    console.log(typeof(MethodOne));
    let MethodTwo = boolValue.toString();
    console.log(typeof(MethodTwo));
   console.log( check("true"));   
    function check(str)
    {
        return str.toLowerCase()==="true";
    }
}

function Task28(){
    // arithmetic operators (+, -, *, /, %). 
    let num1 = 5;
    let num2 = 10;
    sum(num1,num2);
    mul(num1,num2);
    sub(num1,num2);
    div(num1,num2);
    mod(num1,num2);
    function mod(a,b)
    {
        console.log(a%b);
        
    }
    function sum(a,b){
        console.log(a+b);
    } 
    
    function sub(a,b){
        console.log(a-b);
    } 
    
    function mul(a,b){
        console.log(a*b);
    } 
    
    function div(a,b){
        console.log(a/b);
    }  
}

function Task29(){
    // ++ and -- operators
    let a = 5;
    console.log(a);
    a++;
    console.log(a);
    let b = 10;
    console.log(b);
    b--;
    console.log(b);  
}

function Task30(){
    // precedence of operators by combining multiple operators
    let a = 5;
    console.log(perform(a));
    function perform(num)
    {
        return num*5+2-6/2;
    }
}