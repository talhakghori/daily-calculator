const province = document.getElementById("province");
const price = document.getElementById("price");
const discount = document.getElementById("discount");
const calculateButton = document.getElementById("calculate-button");
const discountedPriceOutput = document.getElementById("discounted-price");
const taxRateOutput = document.getElementById("tax-rate");
const taxAmountOutput = document.getElementById("tax-amount");
const finalPriceOutput = document.getElementById("final-price");
const errorMessage = document.getElementById("error-message");


// Provincial sales tax rates
const taxRates = {
    AB: 0.05, BC: 0.12, MB: 0.12, NB: 0.15, NL: 0.15, 
    NS: 0.14, ON: 0.13, PE: 0.15, QC: 0.14975, SK: 0.11
};


// Calculate discount, tax, and final price
function calculateShoppingTotal() {
    const selectedProvince = province.value;
    const originalPrice = Number(price.value);
    const discountPercent = Number(discount.value) || 0;
    
    errorMessage.textContent = "";

    if (selectedProvince === "") {
        errorMessage.textContent = "Please select a province.";
        return; 
    }
    
    if (price.value === "" || originalPrice < 0 || 
        originalPrice > 1000000000) {
        errorMessage.textContent = "Price must be between 0 and 1 billion";
        return; 
    }
    
    if (discountPercent < 0 || discountPercent > 100) {
        errorMessage.textContent = "Discount must be between 0 and 100.";
        return; 
    }


    // Apply discount and provincial tax
    const taxRate = taxRates[selectedProvince];
    const discountedPrice = originalPrice * (1 - discountPercent / 100);
    const taxAmount = discountedPrice * taxRate;
    const finalPrice = discountedPrice + taxAmount;

    discountedPriceOutput.textContent = `$${discountedPrice.toFixed(2)}`;
    taxRateOutput.textContent = 
        `${(taxRate * 100).toFixed(3).replace(/\.?0+$/, "")}%`;
    taxAmountOutput.textContent = `$${taxAmount.toFixed(2)}`;
    finalPriceOutput.textContent = `$${finalPrice.toFixed(2)}`;
}

calculateButton.addEventListener("click", calculateShoppingTotal);