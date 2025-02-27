const passwordBox=document.getElementById('Password');
//pass cotent
const length=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase=upperCase.toLowerCase();
const numbers="123456789";
const symbols="!@#$%^&*_+|{}*()[]:;+-=`'\/.,"

//function
const allChars=upperCase+lowerCase+numbers+symbols;
function genratePass(){
    let password='';
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];

    while(length > password.length){
    password+=allChars[Math.floor(Math.random()*allChars.length)];

    }
    passwordBox.value=password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand('copy');
}