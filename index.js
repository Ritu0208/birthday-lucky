const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outputE1 = document.querySelector("#output-box");

function calculateSum(Birthdate){
    Birthdate = Birthdate.replaceAll("-","");
    let sum = 0;
    for(let i = 0; i < Birthdate.length; i++){
        sum = sum + Number(Birthdate.charAt(i));
    } 
    return sum;
}

function compareValues(sum,luckyNumber){
   if(sum%luckyNumber === 0){
    outputE1.innerText = "Your Birthday is Lucky."
   }else{
    outputE1.innerText = "Your Birthday is not so lucky.";
   }
}

checkNumber.addEventListener("click", function checkBirthdayIsLucky(){
    if(dateOfBirth.value === "" || luckyNumber.value === ""){
        outputE1.innerText = "Please enter values in the fields."
    }else if(Number(luckyNumber.value) < 0){
        outputE1.innerText = "Please enter positive values in the fields.";
    }else{
       const Birthdate = dateOfBirth.value;
       const sum = calculateSum(Birthdate);
       if(sum && Birthdate)
          compareValues(sum,luckyNumber.value);
       else 
          outputE1.innerText = "Please enter both the fields."
    }
});