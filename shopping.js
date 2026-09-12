const province = document.getElementById("province");
const price = document.getElementById("price");
const discount = document.getElementById("discount");

const calculateButton = document.getElementById("calculate-button");
const discountedPriceOutput = document.getElementById("discounted-price");

const taxRateOutput = document.getElementById("tax-rate");
const taxAmountOutput = document.getElementById("tax-amount");

const finalPriceOutput = document.getElementById("final-price");
const errorMessage = document.getElementById("error-message");


discountedPriceOutput.textContent = formatCurrency(0);
taxAmountOutput.textContent = formatCurrency(0);
finalPriceOutput.textContent = formatCurrency(0);


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
        errorMessage.textContent = translate("selectProvinceError");
        return; 
    }
    
    if (price.value === "" || originalPrice < 0 || 
        originalPrice > 1000000000) {
        errorMessage.textContent = translate("priceError");
        return; 
    }
    
    if (discountPercent < 0 || discountPercent > 100) {
        errorMessage.textContent = translate("discountError");
        return; 
    }


    // Apply discount and provincial tax
    const taxRate = taxRates[selectedProvince];
    const discountedPrice = originalPrice * (1 - discountPercent / 100);

    const taxAmount = discountedPrice * taxRate;
    const finalPrice = discountedPrice + taxAmount;

    
    discountedPriceOutput.textContent = formatCurrency(discountedPrice);
    taxRateOutput.textContent = formatPercent(taxRate);
    taxAmountOutput.textContent = formatCurrency(taxAmount);
    finalPriceOutput.textContent = formatCurrency(finalPrice);
}

calculateButton.addEventListener("click", calculateShoppingTotal);