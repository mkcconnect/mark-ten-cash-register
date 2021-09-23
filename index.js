const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const numberOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {

    hideMessage();

    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven - billAmount;
            calculateChange(amountToBeReturned);

        } else {
            showMessage("Please proceed to the kitchen.");
        }

    } else {
        showMessage("The bill amount should be greater than zero.");
    }
});

function hideMessage() {
    message.style.display = "none";
}

function calculateChange() {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[0]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText =numberOfNotes;
    }
};

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}