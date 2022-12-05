const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const errorMsg = document.querySelector("#error-msg");
const noOfNotes = document.querySelector(".number-of-notes");
const availableNotes = ["2000" , "500" , "100" ,"20" ,"10" ,"5" , "1"];

checkBtn.addEventListener("click", function validateAmount() {
    errorMsg.style.display = "none";
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBereturn = cashGiven.value - billAmount.value;
            calculateChange(amountToBereturn);
        } else {
            errorMsg.innerText = "Cash Provided is not enough to pay the bill";
        }
    } else {
        errorMsg.style.display = "block";
        errorMsg.innerText = "Invalid Bill Amount";
    }
});


function calculateChange(amountToBereturn) {
 for(let i=o; i < availableNotes.length; i++){
    const numberOfNotes = Math.trunc(amountToBereturn / availableNotes[i]);
    amountToBereturn %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes; 
 }
}