
var num = 20
num = toString(num)
console.log(typeof(num))


var a = "hello"
console.log(typeof (a))


var b = 40
console.log(typeof(b))

    b = toString(b)
    console.log(typeof(b))



var x = "hello"
x = parseInt(x)
console.log(typeof(x))



var z = 2.4747
z = parseFloat(z)
console.log(typeof(z))



var z = 2.4797
console.log(z.toFixed(2))


var z = 2.4797
console.log(z.toPrecision(3))


console.log(typeof(Number("24")))



var num1=20, num2=30
document.write("The result is " + num1 + " and " + num2 + "<br>")


var x ="bangladesh";
document.write(x.length);

// var v = prompt("Enter your NAme :")
// document.write("<br>" + v.length  )

var e = "hssdsdgas"
document.write("<br>" + e.charAt(3))


var r = "mahmuda";
r = r.toUpperCase()
document.write("<br>" + r);

var r = "mahmuda";
r = r.toLowerCase()
document.write("<br>" + r + "<br>");


var w="my name is ", z="meem", a= w.concat(z)
document.write(a + "<br>")


var s="BANGLADESH", x=s.slice(4,7)
document.write(x)


var n = 3
n*=3
document.write("<br>" + n + "<br>")



// var a=prompt("enter your first number : ")
// var b=prompt("enter your second number : ")

// a=parseInt(a,10)
// b=parseInt(b,10)

// var c=a+b
// document.write(a + " + " + b + "=" + c + "<br>")

// var d=a-b
// document.write(a + " - " + b + "=" + d + "<br>")


// var h=parseFloat(prompt("enter height :"))
// var b=parseFloat(prompt("enter base :"))

// var s=(h*b)/2
// document.write("the result is =" + s)


// var h=parseFloat(prompt("enter height :"))

// var s=h*(9/5)+32
// document.write("the temp is =" + s)



var x=3
if (x % 2 == 0)
console.log("even")
else 
console.log("odd")


// var num=prompt("Enter you number :")
//     if (num>0)
//     console.log("positive")

//     else if (num<0)
//     console.log("negative")

//     else 
//     console.log("zero")



    // marks

    // var marks= prompt("Enter your marks :")

    // if (marks>100 || marks<0)
    // document.write("Invalid Marks")

    // else if (marks>=80)
    // document.write.style.fontSize("35px")("A+" + "<br>")

    // else if (marks>=70 && marks<80)
    // document.write("A" + "<br>")

    // else if (marks>=60 && marks<70)
    // document.write("A-")

    // else if (marks>=50 && marks<60)
    // document.write("B")

    // else if (marks>=40 && marks<50)
    // document.write("C")

    // else if (marks>=33 && marks<40)
    // document.write("D")

    // else
    // document.write("Critical Condition")


    // var num1=prompt ("Enter your Number :")
    // var num2=prompt ("Enter your Number :")
    // var num3=prompt ("Enter your Number :")

    // if (num1>num2 && num1>num3)
    // document.write("Lerge number is " + num1)

    // else if (num2>num1 && num2>num3)
    // document.write("Lerge number is " + num2)

    // else
    // document.write("Lerge number is " + num3)



    // var letter= prompt("enter your word :")

    // letter=letter.toLowerCase()

    // if (letter=="a" || letter=="e" || letter=="i" || letter=="o" || letter=="u")
    // document.write("vowel")

    // else
    // document.write("consonent")


    
    
    // var digit = prompt ("Enter your digit :")

    // if (digit == 0)
    // document.write("Zero")

    // else if (digit == 1)
    // document.write("One")

    // else if (digit == 2)
    // document.write("Two")

    // else if (digit == 3)
    // document.write("Three")

    // else if (digit == 4)
    // document.write("Four")

    // else if (digit == 5)
    // document.write("Five")

    // else if (digit == 6)
    // document.write("Six")

    // else if (digit == 7)
    // document.write("Seven")

    // else if (digit == 8)
    // document.write("Eight")

    // else if (digit == 9)
    // document.write("Nine")

    // else if (digit == 10)
    // document.write("Ten")

    // else
    // document.write("Not a Digit")



    // var digit = prompt("Enter a digit :")

    // switch(digit){

    // case "0":
    // document.write("Zero");
    // break

    // case "1":
    // document.write("One");
    // break

    // case "2":
    // document.write("Two");
    // break

    // case "3":
    // document.write("Three");
    // break

    // case "4":
    // document.write("Four");
    // break

    // case "5":
    // document.write("Five");
    // break

    // case "6":
    // document.write("Six");
    // break

    // case "7":
    // document.write("Seven");
    // break

    // case "8":
    // document.write("Eight");
    // break

    // case "9":
    // document.write("Nine");
    // break

    // case "10":
    // document.write("Ten");
    // break

    // default :
    // document.write("Not a digit");
                                                
    // }



    // var letter = prompt("enter your letter :")

    // letter=letter.toLowerCase()

    // switch(letter){
    //     case "a":
    //     document.write("vowel")
    //     break
    //     case "e":
    //     document.write("vowel")
    //     break
    //     case "i":
    //     document.write("vowel")
    //     break
    //     case "o":
    //     document.write("vowel")
    //     break
    //     case "u":
    //     document.write("vowel")
    //     break
    //     default:
    //     document.write("consonent")
    // }


    // var letter = prompt("enter your letter :")

    // letter=letter.toLowerCase()

    // switch(letter){
    //     case "a":
    //     case "e":
    //     case "i":
    //     case "o":
    //     case "u":
    //     document.write("vowel")
    //     break
    //     default:
    //     document.write("consonent")
    // }

    for (var x=1 ; x<=10 ; x++)
    {
        document.write("<h1>BANGLADESH</h1>")
    }

    document.write("<h1>END</h1>")

    for (var x=1 ; x<=100 ; x++)
    {
        document.write(" " + x)
    }

    document.write("<h1>END</h1>")

    for (var x=1 ; x<=99 ; x=x+2)
    {
        document.write(" " + x)
    }

    document.write("<h1>END</h1>")

    for (var x=2 ; x<=100 ; x=x+2)
    {
        document.write(" " + x)
    }

    document.write("<h1>END</h1>")

    for (var x=10 ; x>=1 ; x--)
    {
        document.write(" " + x)
    }

    document.write("<h1>END</h1>")


    var sum =0
    for (x=1 ; x<=5; x++){
        sum = sum + x
    }
    document.write("sum = "+ sum + "<br>")

    // var m = parseInt(prompt("enter your first number :"))
    // var n = parseInt(prompt("enter your last number :"))
    // var sum =0
    // for (x=m ; x<=n; x++){
    //     sum = sum + x
    // }
    // document.write("sum = "+ sum)


    // for (var x=1; x<=5 ; x++){
    //     var num1 = parseInt (prompt("Enter 1st no :"))
    //     var num2 = parseInt (prompt("Enter 2nd no :"))
    //     var sum= num1 + num2
    //     console.log(sum)
    // }


    var i=1;
    while (i<=5) {
        document.write(" " + i)
        i++
    }


    var i=1
    var sum=0
    while (i<=10) {
        sum=sum+i
        i=i+1
    }
    document.write("<br>" + sum)

    var i=2
    var sum=0
    while (i<=100) {
        sum=sum+i
        i=i+2
    }
    document.write("<br>" + sum)


    var i=1
    var sum=0
    while (i<=100) {

        if(i%3==0 && i%5==0){
            // document.write("<br>" +" " +i)
            sum=sum+i
        }
            i=i+1
    }
    document.write("<br>" + sum + "<br>")


    var y=1
    do{
        document.write(" " + " " + y  )
        y++
    }while(y<=10)
    document.write(" END" + "<br>")



    //break//////

    for (var i=1; i<=100; i++){
        if(i==10){
            break;
        }
        document.write(" "  +i )

    }
    document.write(" END" + "<br>")


    for (var i=1; i<=100; i++){
        document.write(" " + i)
        if(i==10){
            break;
        }
    }
    document.write(" END" + "<br>")


    //continue///

    for (var i=1; i<=100; i++){
        if(i==10){
            continue;
        }
        document.write(" " + i)

    }
    document.write(" END" + "<br>")


    for (var i=1; i<=100; i++){
        if(i%2==0){
            continue;
        }
        document.write(" " + i)

    }
    document.write(" END" + "<br>")


    for (var i=1; i<=100; i++){
        if(i%2!=0){
            continue;
        }
        document.write(" " +i)

    }
    document.write(" END" + "<br>")



    //Ternary Condition//

    // var num = (prompt("Enter Your Number :"))
    // if(num>0){
    //     document.write("Positive")
    // }
    // else if(num<0){
    //     document.write("Negative")
    // }
    // else
    // document.write("Zero")

    // var result= num>0 ? "Positive" : "Negative"
    // document.write(result)


    // var result= num>0 ? "positive" : num<0 ? "negative" : "zero";
    // document.write(result)


    // var num1 = prompt("Enter your number :")
    // var num2 = prompt("Enter your number :")
    // var num3 = prompt("Enter your number :")

    // var result = num1>num2 && num1>num3 ? "Lerge number is  "+ num1 : num2>num1 && num2>num3 ? "Lerge number is " + num2 : "Lerge number is " + num3
    // document.write(result)




    //Function//

    // function square(){
    //     var a = 4
    //     var result = a*a
    //     document.write(result)
    // }
    // square()

    // function square(num){
    //     var result2 = num*num
    //     document.write(result2)
    // }
    // square(6)

    // function square(num1, num2){
    // var result2 = num1*num2
    // document.write(result2)
    // }
    // square(6,8)

    // function square(num1,num2){
    //     var result =num1*num2
    //     return result;
    // }   
    //     var x=square(9,5)
    //     document.write(x)



    //ADD Function///

    function add(x,y) {
       var result= x+y 
       document.write(result + "<br>")
    }
   

    //SUB Function///

    function sub(x,y) {
    var result= x-y 
    document.write(result )
    }

    //Modulus Function///

    function modu(x,y) {
    var result= x%y 
    document.write( result )
    document.write( "End" + "<br>" )
    }

    modu(4,3)
    add(3,4)
    sub(3,4)


