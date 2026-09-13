const lightButton = document.getElementById("light-button");
const darkButton = document.getElementById("dark-button");

const textSlider = document.getElementById("text-size");
const textValue = document.getElementById("text-value");

const enButton = document.getElementById("en-button");
const frButton = document.getElementById("fr-button");


// English and Canadian French translations
const translation = {
    en: {
        settings: "Settings", light: "Light", 
        dark: "Dark", textSize: "Text Size", small: "Small",
        large: "Large", language: "Language",
        dailyCalculator: "Daily Calculator", shopping: "Shopping",
        income: "Pay / Income", conversions: "Metric & Imperial",
        loan: "Loan / Payment", province: "Province",
        selectProvince: "Select a province", price: "Price ($)",
        discount: "Discount (%)", calculate: "Calculate",
        discountedPrice: "Discounted Price:", taxRate: "Tax Rate:",
        tax: "Tax:", finalPrice: "Final Price:", incomeTitle: "Income",
        hourly: "Hourly", salary: "Salary", hourlyWage: "Hourly Wage",
        hoursWorked: "Hours Worked Per Week", 
        conversionsTitle: "Conversions", metric: "Metric",
        imperial: "Imperial", kilometers: "Kilometers", miles: "Miles",
        meters: "Meters", feet: "Feet", centimeters: "Centimeters",
        inches: "Inches", kilograms: "Kilograms", pounds: "Pounds",
        celsius: "Celsius", fahrenheit: "Fahrenheit",
        litres: "Litres", gallons: "US Gallons", convert: "Convert",
        loanTitle: "Loan / Payment", loanAmount: "Loan Amount ($)",
        interestRate: "Annual Interest Rate (%)",
        loanTerm: "Loan Term (Years)",
        requiredFields: "Please fill in all required fields.",
        selectIncome: "Please select Hourly or Salary.",
        enterSalary: "Please enter your salary.",
        monthlyPayment: "Monthly Payment:",
        totalInterest: "Total Interest:", 
        totalPaid: "Total Amount Paid:",
        selectConversion: "Please select Metric or Imperial first.",
        enterValue: "Please enter at least one value.",
        hourlyWageError: "Hourly wage must be between $1 and 1 million.",
        hoursError: "Hours worked must be between 1 and 168.",
        salaryError: "Salary must be between $1 and 1 billion.",
        annualSalary: "Annual Salary:", hourlyRate: "Hourly Rate:",
        loanAmountError: "Loan amount must be between $1 and 1 billion.",
        interestRateError: "Interest rate must be between 0% and 100%.",
        loanTermError: "Loan term must be between 1 and 100 years.",
        selectProvinceError: "Please select a province.",
        priceError: "Price must be between 0 and 1 billion.",
        discountError: "Discount must be between 0 and 100.",
        britishColumbia: "British Columbia", alberta: "Alberta",
        saskatchewan: "Saskatchewan", manitoba: "Manitoba",
        ontario: "Ontario", quebec: "Quebec", 
        newBrunswick: "New Brunswick",
        newfoundland: "Newfoundland and Labrador", 
        novaScotia: "Nova Scotia",
        princeEdwardIsland: "Prince Edward Island"
    },

    fr: {
        settings: "Paramètres", light: "Clair",
        dark: "Sombre", textSize: "Taille du texte", small: "Petit",
        large: "Grand", language: "Langue",
        dailyCalculator: "Calculateur quotidien", shopping: "Magasinage",
        income: "Paie / revenu", conversions: "Métrique et impérial",
        loan: "Prêt / paiement", province: "Province",
        selectProvince: "Sélectionnez une province", price: "Prix ($)",
        discount: "Rabais (%)", calculate: "Calculer",
        discountedPrice: "Prix après rabais :", taxRate: "Taux de taxe :",
        tax: "Taxe :", finalPrice: "Prix final :", incomeTitle: "Revenu",
        hourly: "À l'heure", salary: "Salaire", 
        hourlyWage: "Salaire horaire",
        hoursWorked: "Heures travaillées par semaine",
        conversionsTitle: "Conversions", metric: "Métrique",
        imperial: "Impérial", kilometers: "Kilomètres", miles: "Milles",
        meters: "Mètres", feet: "Pieds", centimeters: "Centimètres",
        inches: "Pouces", kilograms: "Kilogrammes", pounds: "Livres",
        celsius: "Celsius", fahrenheit: "Fahrenheit", litres: "Litres",
        gallons: "Gallons US", convert: "Convertir",
        loanTitle: "Prêt / paiement", loanAmount: "Montant du prêt ($)",
        interestRate: "Taux d'intérêt annuel (%)",
        loanTerm: "Durée du prêt (années)",
        requiredFields: "Veuillez remplir tous les champs requis.",
        selectIncome: "Veuillez sélectionner À l'heure ou Salaire.",
        enterSalary: "Veuillez entrer votre salaire.",
        monthlyPayment: "Paiement mensuel :",
        totalInterest: "Intérêts totaux :", 
        totalPaid: "Montant total payé :",
        selectConversion: "Veuillez sélectionner Métrique ou Impérial.",
        enterValue: "Veuillez entrer au moins une valeur.",
        hourlyWageError:
        "Le salaire horaire doit être compris entre 1 $ et 1 million de dollars.",
        hoursError:
        "Le nombre d'heures travaillées doit être compris entre 1 et 168.",
        salaryError:
        "Le salaire doit être compris entre 1 $ et 1 milliard de dollars.",
        annualSalary: "Salaire annuel :", hourlyRate: "Taux horaire :",
        loanAmountError:
        "Le montant du prêt doit être compris entre 1 $ et 1 milliard de dollars.",
        interestRateError:
        "Le taux d'intérêt doit être compris entre 0 % et 100 %.",
        loanTermError: "La durée du prêt doit être comprise entre 1 et 100 ans.",
        selectProvinceError: "Veuillez sélectionner une province.",
        priceError: "Le prix doit être compris entre 0 et 1 milliard.",
        discountError: "Le rabais doit être compris entre 0 et 100 %.",
        britishColumbia: "Colombie-Britannique", alberta: "Alberta",
        saskatchewan: "Saskatchewan", manitoba: "Manitoba", 
        ontario: "Ontario", quebec: "Québec", 
        newBrunswick: "Nouveau-Brunswick",
        newfoundland: "Terre-Neuve-et-Labrador", 
        novaScotia: "Nouvelle-Écosse",
        princeEdwardIsland: "Île-du-Prince-Édouard"
    }
};


// Translate text on the current page
function translatePage() {
    const language = sessionStorage.getItem("language") || "en";

    document.documentElement.lang = 
    language === "fr" ? "fr-CA" : "en-CA";

    document.querySelectorAll("[data-translate]").forEach(function(element) {
        const key =  element.getAttribute("data-translate");

        if (translation[language][key]) {
            element.textContent = translation[language][key];
        }
    });

    const titleKey = document.body.getAttribute("data-title-key");
    
    if (titleKey && translation[language][titleKey]) {
        document.title = translation[language][titleKey];
    }
}


// Let all calculator JS files translate the messages
function translate(key) {
    const language = sessionStorage.getItem("language") || "en";
    return translation[language][key];
}


// Format numbers based on the language selected
function getLocale() {
    const language = sessionStorage.getItem("language") || "en";

    if (language === "fr") {
        return "fr-CA";
    }
    return "en-CA";
}

function formatCurrency(value) {
    return value.toLocaleString(getLocale(), {
        style: "currency", currency: "CAD"
    });
}

function formatPercent(value) {
    return value.toLocaleString(getLocale(), {
        style: "percent", 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 3
    });
}

translatePage();


// Apply the selected theme for the current session
if (sessionStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}


// Apply the selected text size for the current session
const savedTextSize = sessionStorage.getItem("textSize") || 100;

document.documentElement.style.setProperty(
    "--text-scale", savedTextSize / 100
);


if (lightButton) {
    lightButton.addEventListener("click", function () {
        document.body.classList.remove("dark-mode");
        sessionStorage.setItem("theme", "light");
    });
}

if (darkButton) {
    darkButton.addEventListener("click", function () {
        document.body.classList.add("dark-mode");
        sessionStorage.setItem("theme", "dark");
    });
}


if (textSlider) {
    textSlider.value = savedTextSize;
    textValue.textContent = savedTextSize + "%";

    textSlider.addEventListener("input", function () {
        const textSize = textSlider.value;

        document.documentElement.style.setProperty(
            "--text-scale", textSize / 100
        );

        textValue.textContent = textSize + "%";
        sessionStorage.setItem("textSize", textSize);
    });
}


if (enButton) {
    enButton.addEventListener("click", function () {
        sessionStorage.setItem("language", "en");
        translatePage();
    });
}

if (frButton) {
    frButton.addEventListener("click", function () {
        sessionStorage.setItem("language", "fr");
        translatePage();
    });
}