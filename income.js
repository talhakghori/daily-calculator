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
        incomeResult.textContent = 
        "Please select Hourly or Salary.";
        return;
    }

    if (incomeType === "hourly") {

        const wage = Number(hourlyWage.value);
        const hours = Number(hoursWorked.value);

        if (hourlyWage.value === "" || 
            hoursWorked.value === "") {
            incomeResult.textContent = 
            "Please fill in all required fields.";
            return;
        }

        if (wage < 1 || wage > 1000000) {
            incomeResult.textContent = 
            "Hourly wage must be between $1 and 1 million.";
            return;
        }

        // 24 times 7 is 168 hours
        if (hours < 1 || hours > 168) {
            incomeResult.textContent = 
            "Hours worked must be between 1 and 168.";
            return;
        }
        
        const annualSalary = wage * hours * 52;

        incomeResult.textContent = "Annual Salary: $" +
        annualSalary.toLocaleString("en-CA", {
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2
        });

        
    } else if (incomeType === "salary") {

        const annualSalary = Number(salary.value);
        
        if (salary.value === "") {
            incomeResult.textContent = 
            "Please enter your salary.";
            return;
        }

        if (annualSalary < 1 || annualSalary > 1000000000) {
            incomeResult.textContent = 
            "Salary must be between $1 and 1 billion.";
            return;
        }

        // Assumes a standard 40 hour work week and 52 weeks per year
        const hourlyRate = annualSalary / (40 * 52);

        incomeResult.textContent = "Hourly Rate: $" +
        hourlyRate.toLocaleString("en-CA", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
});