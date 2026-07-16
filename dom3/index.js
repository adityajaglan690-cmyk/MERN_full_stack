let task=document.getElementById("task");
console.log(task);
let list=document.getElementById("list");


document.getElementById("btn").addEventListener('click',()=>{
    console.log(task);
    let li=document.createElement("li");
    li.innerHTML=~`${task.value}`;
    list.appendChild(li);

})