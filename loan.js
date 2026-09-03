const loanAmount = document.getElementById("loan-amount");
const interestRate = document.getElementById("interest-rate");
const loanTerm = document.getElementById("loan-term");

const calculateButton = document.getElementById("calculate-button");
const loanResult = document.getElementById("loan-result");


// Ensures valid input from user to calculate loan payments
calculateButton.addEventListener("click", function () { 
    const principal = Number(loanAmount.value);
    const annualRate = Number(interestRate.value);
    const years = Number(loanTerm.value);

    if (loanAmount.value === "" || interestRate.value === "" || 
        loanTerm.value === "") {
        loanResult.textContent = 
        "Please fill in all required fields.";
        return;
    }

    if (principal < 1 || principal > 1000000000) {
        loanResult.textContent = 
        "Loan amount must be between $1 and 1 billion.";
        return;
    }

    if (annualRate < 0 || annualRate > 100) {
        loanResult.textContent = 
        "Interest rate must be between 0% and 100%.";
        return;
    }

    if (years < 1 || years > 100) {
        loanResult.textContent =
        "Loan term must be between 1 and 100 years.";
        return;
    }


    // Convert annual interest rate and loan term into monthly values
    const monthlyRate = annualRate / 100 / 12;
    const totalPayments = years * 12;

    let monthlyPayment;


    // Calculate monthly payment using the mathematical loan formula
    if (monthlyRate === 0) {
        monthlyPayment = principal / totalPayments;

    } else {
        monthlyPayment = principal * (monthlyRate * Math.pow
        (1 + monthlyRate, totalPayments)) / 
        (Math.pow(1 + monthlyRate, totalPayments) - 1);
    }


    const totalPaid = monthlyPayment * totalPayments;
    const totalInterest = totalPaid - principal;

    loanResult.innerHTML = 
    "Monthly Payment: $" + monthlyPayment.toLocaleString("en-CA", {
        minimumFractionDigits: 2, maximumFractionDigits: 2
    }) + "<br><br>" +

    "Total Interest: $" + totalInterest.toLocaleString("en-CA", {
        minimumFractionDigits: 2, maximumFractionDigits: 2
    }) + "<br><br>" +

    "Total Amount Paid: $" + totalPaid.toLocaleString("en-CA", {
        minimumFractionDigits: 2, maximumFractionDigits: 2
    });
});