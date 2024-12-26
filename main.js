// task#1
alert("WELCOME TO JAVASCRIPT ! ");


 var a = prompt("WHAT IS YOUR NAME?");
 alert( "HELLO, " + a + " ! ")
// task#2
var firstname = prompt("enter your first name");
var lastname = prompt("enter your last name");
var fullname =(firstname + " " + lastname);
alert(fullname);
// task#2(2)
var hobby = prompt("your favourite hobbies");
alert("your favourite hobby is " + hobby + ".")
// task#3"variables for numbers"
// task#3(1)
var yearofbirth = prompt("enter your year birth");
var currentyear = prompt("enter the current year");
var age = currentyear - yearofbirth;
alert("your age is " + age);
// task#3(2)
var length = prompt("enter the length of rectangle");
var width = prompt("enter the width of rectangle");
var area = length * width;
alert("The Area of the rectangle is " + area);
// task#4"variables names legal and illegal"
// task#4(1)
// legal
// var _eye;
// var $dollar;
// var a1;
// illegal 
// alert(remainder)
// % modulus
// var a.1

// task#4(2)
var myage = prompt("enter your age");;
var friendsage = prompt("enter your friends age");
alert("my age is " + myage + " and my friends age is " + friendsage) ;
// / task#5(1)
number1 = prompt("enter the first number:");
number2 = prompt("enter the second number:");
sum= number1 + number2
alert("the sum is: " + sum)

// task#5(2)
number1 = prompt("enter the first number for multiplication:");
number2 = prompt("enter the second number for multiplication:");
ans= number1 * number2
alert("the result is: " + ans)
// task#5(3)
number1 = prompt("enter the first number for remainder:");
number2 = prompt("enter the second number for remainder:");
rem= number1 % number2
alert("the remainder is: " + rem)
    // challenging
    
    currentyear = prompt("Please enter current year:");
    birthyear = prompt("Please enter your birth year:");
age= currentyear - birthyear
alert("You are " + age + " years old.");

// challenge#2
 var number1 = prompt( "enter your first number:");
 var number2 = prompt( "enter your second number:");
sum_total = number1 + number2;
difference_total = number1 - number2;
product_total = number1 * number2;
quotient_total = number1 / number2;
remainder_total = number1 % number2
alert("sum: " + sum_total);
alert("difference: " + difference_total);
alert("product: " + product_total);
alert("quotient: " + quotient_total);
alert("remainder: " + remainder_total);