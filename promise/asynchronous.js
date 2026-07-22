// what is  asynchronous: when the process is executing one by one this manner is known as the synxhronous manner

// what is asynchronous:=to achieve the parallel executive of the thread we use asynch keyword  to achive asynchronous manner of the program 








// async function load() {
//     let response=await fetch("https://fakestoreapi.com/products/")
//     // console.log(response);
//     let data=await response.json();
//     console.log(data);
    
    
    
// }
// load()



async function load(){
    try{
        let response=await fetch("https://fakestoreapi.com/products/")
        console.log(response);
        if(!response.ok){
            console.log("something went wrong");
            

        }
        let data=await response.json()
        console.log(data);
        
        
    }catch(error){
        console.error(`something went wrong${response.status}`);
    }   
}
load();

// console.log("hello");
