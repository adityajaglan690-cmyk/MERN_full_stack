// //what is array: array is the collection of multiple element ,it store its element in memory allocation  

// let arr=["a",3,4,5,6,7.8,"ramu"]
// console.log(arr);
// for(let i=0;i<8; i++){
//     console.log(arr[i]);
// }
// // console.log(arr[5]);
// console.log(arr.reverse());

let arr=[1,2,3,4,5,6,]
let i=0;
let j=arr.length-1;
while(i<j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
}
console.log(arr);