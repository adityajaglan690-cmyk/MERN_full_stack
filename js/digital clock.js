let div=document.createElement("div");
let h1=document.createElement("h1");
let h2=document.createElement("h2");

function clock(){
    let time=new Date();
    // console.log(time);
    let hrs=String(time.getHours()).padStart(2, '0');
    let min=String(time.getMinutes()).padStart(2, '0');
    let sec=String(time.getSeconds()).padStart(2, '0');
    console.log(`${hrs} ${min} ${sec}`);
    h1.innerHTML=`${hrs}:${min}:${sec}`
     h2.innerHTML=`${hrs}:${min}:${sec}`
}
div.appendChild(h1);
document.body.appendChild(div);
object.assign(div.style,{
    color:"red",
    backgroundcolor:"blue"
});
div.appendChild(h2);
document.body.appendChild(div);
clock();
setInterval(clock,1000);