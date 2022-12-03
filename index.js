const incr=document.querySelector('#increment');
const decr=document.querySelector('#decrement');
const result=document.querySelector('#display');

count=0;
incr.onclick=()=>{
count=count+1
console.log(count)
result.innerHTML=count;
}

decr.onclick=()=>{
    count=count-1
    console.log(count)
    result.innerHTML=count;
}
