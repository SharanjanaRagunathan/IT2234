//Function
function PrintMsg(){
    console.log("Hello JS")
}

PrintMsg()
console.log("")


function sum(){
	return 5+6
}

console.log(sum())
console.log("")

function sub(a,b){
	return (a-b)
}
console.log(sub(5,3))
console.log("")

//write a boolean function to find a given number in prime
function Isprime(n = 9, i = 2) {
     if (n < 2) {
        return false;
    }
     if (i > n / 2) {
        return true;
    }
     if (n % i === 0) {
        return false;
    }
     return Isprime(n, i + 1);
}

console.log(Isprime());   
console.log("")

//write recursive function to print numbers from 1 to n
function recursive(n, a = 0, b = 1) {
   
    console.log(a);
  
    
    if (n <= 1) {
        return;
    }
  
    
    recursive(n - 1, b, a + b);
}

recursive(6);  
console.log("")

	
//arrow function

const msg= () =>{console.log("Hello JS")}
//console.log(msg)
msg()
console.log("")

//write an arrow function to sum 2 numbers
const add= (a,b)=>{return a+b}
console.log(add(4,5))
console.log("")

const sub1 = (a,b) => {return a-b}
console.log(sub1(10,5))
console.log("")


//default parameter
const mult =(a,b=2)=>{return a*b}
console.log(mult(4,5))
console.log(mult(4))
console.log("")


//Rest parameter 
const mysum = (...n)=>{
	console.log(n)
}
 mysum(12,23,34,45,56,78)
console.log("")

//total of the array 
//method1
const count= (...n)=>{
	let total=0
	 n.forEach((i)=>total=total+i)
	console.log(total)
 }
count(7,8,9,2,3,1)  
console.log("")

//method2
const mysum1=(...n)=>{
	return n.reduce((t,i)=>t=t+i)
}

console.log(mysum1(4,5,6,89,2))
console.log("")


//callback fuction
const myName =(name)=>{console.log("My name is "+name)}

const greet=(msg,fun)=>{
	console.log("Hi..."+msg)
	fun
}
greet("Good morning",myName("Sharanjana"))
console.log("")


const multtwo =(n)=>n*3

const myarr =(mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}

myarr(multtwo,4,5,6,8,2)