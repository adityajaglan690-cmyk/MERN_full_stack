let task=document.getElementById("task");
// console.log(task);
// function handleclick(
let list=document.getElementById("list")

    
document.getElementById("btn").addEventListener('click',()=>{
    // console.log(task.value);
    if(task.value==""){
        alert("enter any task before add new task")
        return;
    }else{
          let li=document.createElement("li")
          li.innerHTML=`${task.value}`

          let complete=document.createElement("button");
          complete.innerHTML="complete";
          complete.addEventListener("click",()=>{
        //  js text decoration syntax
            li.style.textDecoration="line-through";
          })

           let dlt=document.createElement("button");
          dlt.innerHTML="Delete";

          dlt.addEventListener("click",()=>{
            li.remove();
          })

          li.appendChild(complete)
          li.appendChild(dlt)
         list.appendChild(li)
         task.value="";
    }

})