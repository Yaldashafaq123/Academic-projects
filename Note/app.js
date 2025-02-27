const noteContainer=document.querySelector(".notes-con");
const createBtn = document.querySelector(".btn"); // Recommended
const notes= document.querySelector(".input-box");

function updateStorage(){
    localStorage.setItem('notes',noteContainer.innerHTML)
}
function showNotes(){
    noteContainer.innerHTML=localStorage.setItem("notes")
}
showNotes()
createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="./images/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img);

});
noteContainer.addEventListener("click", function(e){
    if(e.target.tagName == "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }else if(e.target.tagName == "P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(element => {
            element.onkeyup= function(){
                updateStorage()
            }
        });
    }
})