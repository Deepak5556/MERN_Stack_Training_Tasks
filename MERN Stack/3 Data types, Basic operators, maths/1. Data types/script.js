// 1. Data types: 
// o Task 21: Create variables of different data types (e.g., string, number, boolean, 
// null, undefined, object). 
// o Task 22: Use the typeof operator to determine the type of various variables. 
// o Task 23: Declare a symbol and print its type. 
// o Task 24: Assign the value null to a variable and check its type using typeof. 
// o Task 25: Differentiate between declaring a variable using var and let in terms of 
// scope.

Task21();
Task22();
// Task23();
Task24();
Task25();

function Task21(){
   var PersonName = "Deepak";
    let Age = 20;
    let Matured = true;
    let Placed =null;
    let Company;
    let CollegeDetails = {
        CollegeName:"Karpagam College Of Enginnering",
        Address: "Coimbatore"
    };
    console.log(PersonName);
    console.log(Age);
    console.log(Matured);
    console.log(Placed);
    console.log(Company);
    console.log(CollegeDetails.CollegeName);
    console.log(CollegeDetails.Address);
}
function Task22(){
    let rollNumber = 5;
    let StudentName = "Deepak";
    let EligibleForVote = true;
    console.log(typeof(rollNumber));
    console.log(typeof(StudentName));
    console.log(typeof(EligibleForVote));
}
function Task23(){
    let a = $;
    console.log(a);
}
function Task24(){
    let a = null;
    console.log(a);
}
function Task25(){
    if(true)
    {
        let a =50;
    }
    console.log(a);
}