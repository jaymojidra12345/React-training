let numbers=[10,15,20,25,30,35,40,45,50];
let sum=0;

function arraySum(array){
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum;
}

console.log("Sum of array is "+arraySum(numbers));