// -----------------------Chapter-1-----------------
1:
window.alert("Error!enter a valid password")

2:
window.alert("Welcom to JS Land \n happy coding!") 
3:
alert(" Welcom to JS Land") 
alert("Prevent this page from creating additional dialogs.") 
4:
alert("Hello I can run JS thoughtmy web browser's console")


// -----------------------Chapter-2-----------------


var username;
username = "saad"   
var age = "25" 

var message = "cERTIFIED THE MOBILE dEVELOPMENT"
alert(username)
alert(age)
alert(message)


var email = "hasnainshah3881@gmail.com"
alert(email)
document.getElementById("demo").innerHTML= "yeah! i can Write to html content throughr Js";

document.getElementById("demo").innerHTML= 7+9;
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ")





// -----------------------Chapter-3-----------------


var age = 26


alert("i am "+ age+ " year old")

document.getElementById("demo").innerHTML= "My birth year is 1998";




//-----------------------Chapter-4-----------------



var var1= "Saad"
var var2= "ullah"

var var3= "khan"


console.log(var1+var2+var3)

// Legal varialble

var name;
var $fulName;
var last_Name123;
var _midname;


// illegal Variable

// var &name;
// var Full name;
// var 12_midname;
// var if;
// var int;

//-----------------------Chapter-5-----------------

var a = 3
var b = 5

var add = a + b
var sub = a - b
var mult = a * b
var div = a / b
var moduls = a + b - a * b
console.log("Add----->" + add)
console.log("sub----->" + sub)
console.log("mult----->" + mult)
console.log("div----->" + div)
console.log("modul----->" + moduls)


var c = 7

console.log(c++)
console.log(c)
console.log(++c)
console.log(c--)
console.log(--c)



var ticket = 600
total = 5*ticket
console.log(total)





// table



var table_num = prompt("Enter the number:");
table_num = parseInt(table_num); 

for (var i = 0; i <= 10; i++) {
    console.log(table_num  + "*" + i +"="+ table_num * i);
}


tem= prompt("Temperature celsius input")
tem= parseFloat(tem);
var fah = (tem * 9/5) + 32;

console.log("Celsius is " + tem ,"Fahrenheit is "+ fah)

tem1= prompt("Temperature fahrenheit input")
tem1= parseFloat(tem1);

var Celis = (tem1 - 32) * 5/9;
console.log("Fahrenheit is " + tem1 ,"Celsius is "+ Celis)


