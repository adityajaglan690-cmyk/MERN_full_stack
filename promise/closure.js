// what is closure: a closurein js is created when a function remember and access variable 
// what is  lexical scope:Lexical scope is the ability of the js engine to search for the variable  from its pranets scope





function outer(){
    let count=10;
    function inner(){
        console.log(count);
        count++;
        
    }
}
let out=outer();
out()
