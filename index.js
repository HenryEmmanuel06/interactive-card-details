function validation() {
    let firstName = document.getElementById("username").value;
    let cardNumber = document.getElementById("card-number").value;
    let cardMonth = document.getElementById("date-month").value;
    let cardYear = document.getElementById("date-year").value;
    let cardCvv = document.getElementById("cvc-number").value;
let nameError = document.getElementById("error-name");
let cardError = document.getElementById("error-card");
let dateError = document.getElementById("error-date");
let cvcError = document.getElementById("error-cvc");
     if(firstName == ""){
        nameError.textContent = "Please Enter Cardholder Name";
        document.getElementById("username").style.borderColor = "red";
     }
    else if(firstName !=""){
        nameError.textContent = ""
     }
     if(cardNumber == ""){
        cardError.textContent = "Please Enter Card Number";
        document.getElementById("card-number").style.borderColor = "red";

     }
     else if(cardNumber != ""){
        cardError.textContent = ""
     }
     if(cardMonth == ""){
      dateError.textContent = "Can't be blank"
      document.getElementById("date-month").style.borderColor = "red";

     }
     else if(cardMonth != ""){
      dateError.textContent = ""
     }
     if(cardYear == ""){
      dateError.textContent = "Can't be blank"
      document.getElementById("date-year").style.borderColor = "red";

     }
     else if(cardYear != ""){
      dateError.textContent = ""
     }
     if(cardCvv == ""){
      cvcError.textContent = "Can't be blank"
      document.getElementById("cvc-number").style.borderColor = "red";

     }
     else if(cardCvv != ""){
      cvcError.textContent = ""
     }
     
    
}

// let cardEl = document.getElementById("card-value");
// let valueCvv = document.getElementById("cvc");
document.getElementById("card-number").oninput = () => {
   document.getElementById('card-value').textContent = document.getElementById('card-number').value; 
}
document.getElementById("username").oninput = () => {
   document.getElementById("card-name").textContent = document.getElementById("username").value;
}
document.getElementById("date-month").oninput = () => {
   document.getElementById("card-month").textContent = document.getElementById("date-month").value;
}
document.getElementById("date-year").oninput = () => {
   document.getElementById("card-year").textContent = document.getElementById("date-year").value;
}
document.getElementById("cvc-number").oninput = () => {
   document.getElementById("cvc").textContent = document.getElementById("cvc-number").value;
}