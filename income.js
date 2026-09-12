const hourlyButton = document.getElementById("hourly-button");
const salaryButton = document.getElementById("salary-button");

const hourlyForm = document.getElementById("hourly-form");
const salaryForm = document.getElementById("salary-form");

const hourlyWage = document.getElementById("hourly-wage");
const hoursWorked = document.getElementById("hours-worked");
const salary = document.getElementById("salary");

const calculateButton = document.getElementById("calculate-button");
const incomeResult = document.getElementById("income-result");

let incomeType = "";

hourlyForm.style.display = "none";
salaryForm.style.display = "none";


// Let the user switch between hourly and salary options
hourlyButton.addEventListener("click", function () {
    incomeType = "hourly";
    hourlyButton.classList.add("active");
    salaryButton.classList.remove("active");

    hourlyForm.style.display = "block";
    salaryForm.style.display = "none";
    incomeResult.textContent = "";
});

salaryButton.addEventListener("click", function () {
    incomeType = "salary";
    salaryButton.classList.add("active");
    hourlyButton.classList.remove("active");
    
    hourlyForm.style.display = "none";
    salaryForm.style.display = "block";
    incomeResult.textContent = "";
});


// Validate user input and calculate income
calculateButton.addEventListener("click", function () {
    if (incomeType === "") {
        incomeResult.textContent = translate("selectIncome");
        return;
    }

    if (incomeType === "hourly") {
        const wage = Number(hourlyWage.value);
        const hours = Number(hoursWorked.value);

        if (hourlyWage.value === "" || hoursWorked.value === "") {
            incomeResult.textContent = translate("requiredFields");
            return;
        }

        if (wage < 1 || wage > 1000000) {
            incomeResult.textContent = translate("hourlyWageError");
            return;
        }

        // 168 hours in a week
        if (hours < 1 || hours > 168) {
            incomeResult.textContent = translate("hoursError");
            return;
        }
        

        const annualSalary = wage * hours * 52;    
        incomeResult.textContent = translate("annualSalary") + " " + 
        formatCurrency(annualSalary);
        
        
    } else if (incomeType === "salary") {
        const annualSalary = Number(salary.value);
        
        if (salary.value === "") {
            incomeResult.textContent = translate("enterSalary");
            return;
        }

        if (annualSalary < 1 || annualSalary > 1000000000) {
            incomeResult.textContent = translate("salaryError");
            return;
        }


        // Assumes a standard 40 hour work week and 52 weeks per year
        const hourlyRate = annualSalary / (40 * 52);
        incomeResult.textContent = translate("hourlyRate") + " " + 
        formatCurrency(hourlyRate);
    }
});