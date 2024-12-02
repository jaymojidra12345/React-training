//Write a program that prints out all even numbers between 1 to 100 using a loop and conditional statements.

console.log("Even numbers between 1 to 100");

//using for loop
console.log("Using for loop");

for(let i=1; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
}

//using while loop
console.log("Using while loop");

let x=1;
while(x<=100){
    if(x%2==0){
        console.log(x);
    }
    x++;
}