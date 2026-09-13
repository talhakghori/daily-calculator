const loanAmount = document.getElementById("loan-amount");
const interestRate = document.getElementById("interest-rate");
const loanTerm = document.getElementById("loan-term");

const calculateButton = document.getElementById("calculate-button");
const loanResult = document.getElementById("loan-result");


// Validate user input and calculate loan payments
calculateButton.addEventListener("click", function () { 
    const principal = Number(loanAmount.value);
    const annualRate = Number(interestRate.value);
    const years = Number(loanTerm.value);

    if (loanAmount.value === "" || interestRate.value === "" || 
        loanTerm.value === "") {
        loanResult.textContent = translate("requiredFields");
        return;
    }

    if (principal < 1 || principal > 1000000000) {
        loanResult.textContent = translate("loanAmountError");
        return;
    }

    if (annualRate < 0 || annualRate > 100) {
        loanResult.textContent = translate("interestRateError");
        return;
    }

    if (years < 1 || years > 100) {
        loanResult.textContent = translate("loanTermError");
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
    translate("monthlyPayment") + " " + 
    formatCurrency(monthlyPayment) + "<br><br>" +

    translate("totalInterest") + " " + 
    formatCurrency(totalInterest) + "<br><br>" +

    translate("totalPaid") + " " + 
    formatCurrency(totalPaid);
});