const input=document.getElementById('input-box');
const list=document.getElementById('list-con')



const addTask=()=>{
    if (input ===' '){
        alert("You must Write somthing...");
    }else{
        let li=document.createElement('li');
        li.innerHTML=input.value;
        list.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value='';
    saveData();
}

list.addEventListener("click",(e)=>{
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove();
    }
});

function saveData(){
    localStorage.setItem("data",list.innerHTML)
};
function showTask(){
    list.innerHTML=localStorage.getItem('data');
}
showTask()