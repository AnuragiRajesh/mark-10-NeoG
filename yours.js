const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]






checkButton.addEventListener("click", function validationOfBillAndCashAmount() {
    hideSms();
    if(billAmount.value > 0 && cashGiven.value > 0) {
        console.log(cashGiven.value,billAmount.value)
        if(parseInt(cashGiven.value) >= parseInt(billAmount.value)) {
            var amountNeedtobereturn = cashGiven.value - billAmount.value
            calculate(amountNeedtobereturn)
        } else {
            showMessage("The cash amount should be grater the bill");
        }
    } else {
        showMessage("Invalid Bill amount or Cash given ");
    }
});    


function calculate(amountNeedtobereturn) {
    for (let i = 0; i < availableNotes.length; i++ ) {
        const numbersOfNotes = Math.trunc(amountNeedtobereturn / availableNotes[i]);
        amountNeedtobereturn = amountNeedtobereturn % availableNotes[i]
        noOfNotes[i].innerText = numbersOfNotes
    }
     
}

function hideSms(){
    message.style.display = "none";
}

function showMessage(sms) {
    message.style.display = "block";
    message.innerText = sms;
}

