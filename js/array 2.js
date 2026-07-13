function sum (){
    a=10;
    b=100;
    console.log("this is update a",a);
    console.log("this is update b",b);
    console.log(c); 
}

let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr);
console.log(typeof(arr));


console.log(typeof(NaN));

// rest...... operator:

let [a,b,...baki]=arr
console.log(a);
console.log(b);

// spread operator

let num1=["mango","banana"]
let num2=[...num1,"apple","kiwi","orange"]
console.log(num2);


// **** dstructuring arry

let [a,b]=[1,2,3,4,5]
b=19;
console.log(a);
console.log(b);


let[x,,y]=[10,20,30,40]
console.log(x);
console.log(y);


let a=10;
let b="10"
console.log(a==b);
console.log(a===b);






