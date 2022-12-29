// Problem 1: If the number is divisible by 3, print a "multiple of 3".

let number= 18;
( number% 3== 0) ? 
  console.log( number, "is a multiple of 3" ) : 
  console.log( number , "is a not multiple of 3" )

// Problem 2: If a person is allowed to drive in India print "Apply for a license" or "NA".
let age= 15;

( age>= 18 ) ? 
console.log("Apply for a license") :
console.log("NA")

// Problem 3: Given 2 numbers a and b print which is greater or "both equal".
let a= 20;
let b= 20;

( a== b) ? console.log("both equal") :
( a> b)  ? console.log("a is greater") :
           console.log("b is greater")

// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let userName= "manu";
let userPassword= "mansi3";
let log_name= "mansi";
let log_password= "jai3";

( (userName== log_name) && 
(userPassword== log_password) ) ? 
    console.log( "I can login" ) 
  : console.log( "please check the name and 
    password ")