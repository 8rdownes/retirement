//Function declarations
function retire(age){
    let year ==2017; //set current year
    let retirementAge ==65; //set current retirement age
    let diff = retirementAge - age;

    //write three separate conditional statements to say when you can take out money.

    //first if your age is older than the retirementAge
if(age > retirementAge){
console.log("You're ready to retire");
}
else if (age = retirementAge) {
  console.log("You're on your way!");
}

    //second if your age is equal to the retirementAge
else (age < retirement){
  console.log("Wait a few more years.");
}
    //third if your age is younger than the retirementAge

}


//main function tests your code above with different inputs.
function main(){
    retire(18);
    retire(50);
    retire(65);
    retire(100); //Hundo!

}




// ctrl + shift + B
//This will run the program.
main();
