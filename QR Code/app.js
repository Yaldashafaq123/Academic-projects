let imagBox=document.getElementById("imgbox");
let qrImage=document.getElementById("qrimg");
let qrTxt=document.getElementById("qrTxt");
function createQrCode(){
    if(qrTxt.value ==""){
        window.alert("Please Enter A valid Value")
    }else{
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"+qrTxt.value;
        imagBox.classList.add("img-show");
    }
  
}