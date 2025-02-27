let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let wincon=document.querySelector(".wincon");
let newBtn=document.querySelector("#new-btn");
let winmsg=document.querySelector("#msg");

let turn0=true;//player turn 

const winnerPath=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];
const disbox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledbx=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    
}
const resetGame=()=>{
turn0=true;
enabledbx();
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("just clikeed the btn !");
        
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        chickWinner();
    })
})
const showWinner=(winner)=>{
winmsg.innerText=`congratulation the winner is ${winner} `
disbox();
}
const chickWinner=()=>{
    for (Path of winnerPath){
        let pos1= boxes[Path[0]].innerText;
        let pos2= boxes[Path[1]].innerText;
        let pos3= boxes[Path[2]].innerText;
        if (pos1!=="" && pos2!=="" && pos3!=="" ){
            if(pos1 === pos2 && pos2 === pos3 ){
                console.log("winner",pos1)
                showWinner(pos1);
            }
        }
    }
    
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
