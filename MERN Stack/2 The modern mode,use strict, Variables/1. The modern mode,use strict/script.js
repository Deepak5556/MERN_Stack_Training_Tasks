// The modern mode, “use strict”: 
// o Task 11: Write a script without using “use strict” and try to assign a value to an 
// undeclared variable. Note the result. 
// o Task 12: Enable “use strict” mode and repeat the above action, noting the 
// difference. 
// o Task 13: In “use strict” mode, try to delete a variable, function, or function 
// parameter. 
// o Task 14: Assign a value to an undeclared variable without “use strict” and then 
// with “use strict”. 
// o Task 15: Declare a variable with a reserved keyword in “use strict” mode.

task11();
// task12();
// task13();
task14();
task15();

function task11(){
    a = 10;
    console.log(a);
}
// function task12(){
//     "use strict"
//     b = 10;
//     console.log(b);
// }
// function task13(){
//     "use strict"
//     var age = 18;
//     console.log(age);
//     delete age;
// }
function task14(){
    a = 10;
    console.log(a);
    "use strict";
    b=5 ;
    console.log(b);
}

function task15(){
    "use strict";
    var let = 5; 
    console.log(let);

}