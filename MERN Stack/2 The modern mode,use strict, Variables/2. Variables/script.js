// o Task 16: Declare variables using let, const, and var. Discuss when each should be 
// used. 
// o Task 17: Attempt to reassign a const variable and observe the result. 
// o Task 18: Declare a variable without initializing it and print its value. 
// o Task 19: Assign a number, string, and boolean value to a variable and print its 
// type using typeof. 
// o Task 20: Rename a variable and observe the outcome. 

// Task16();
// Task17();
// Task18();
// Task19();
// Task20();

function Task16(){
    let a;
    const b=5;
    var c;
    a=5;
    b=10;
    c=20;
    console.log(a,b,c);
}

function Task17() {
    const a = 6;
    console.log(a);
    a=120;
    console.log(a);
}

// function Task18(){
//     const a;
//     console.log(a);
// }

function Task19(){
    a = 5;
    b = "Deepak";
    c = true;
    console.log(typeof(a));
    console.log(typeof(b));
    console.log(typeof(c));
}

function Task20(){
    let a = 5;
    let  b = a;
    console.log(b);
}