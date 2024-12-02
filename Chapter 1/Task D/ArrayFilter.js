const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 45 },
    { name: "Monitor", price: 150 },
    { name: "USB Cable", price: 10 }
];

let answer=products.filter((arr)=>{
    return arr.price>50
}) 

console.log(answer)