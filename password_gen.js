
function updateValue(value){
    document.getElementById("lenghtValue").textContent = value;
}

function generate(){
    
    validateCheckbox();

    const length = document.getElementById("passLength").value;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
    
    let allowedChar = '';
    if(includeLowercase) allowedChar += 'qwertyuiopasdfghjklzxcvbnm';
    if(includeUppercase) allowedChar += 'QWERTYUIOPASDFGHJKLZXCVBNM';
    if(includeNumbers) allowedChar += '0123456789';
    if(includeSymbols) allowedChar += '~!@#$/%^&*-';

    let password = '';

    for(let i=0; i < length; i++){
        const randomNum = Math.floor(Math.random()*allowedChar.length);
        password += allowedChar[randomNum];
    }

    document.getElementById('password').textContent = password;

}

function copyPassword(){
    const password = document.getElementById('password').textContent;

    navigator.clipboard.writeText(password).then(()=>{
        alert("Password copied to clipboard!");
    });
}


function validateCheckbox(){
    const checkboxes = document.querySelectorAll('.setting-container input[type = "checkbox"]');
    let isChecked = false;

   checkboxes.forEach((checkbox)=>{
       if(checkbox.checked){
       isChecked = true;
       }
   });

   const errorMessage = document.getElementById("errorMessage");

   if(!isChecked){
       errorMessage.textContent = "Please select at least one option";
       errorMessage.style.display = "block";
   }
   else{
       errorMessage.style.display = "none";
   }

}


generate();