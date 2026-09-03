const convertButton = document.getElementById("convert-button");
const metricButton = document.getElementById("metric-button");
const imperialButton = document.getElementById("imperial-button");

let selectedMode = "";

metricButton.addEventListener("click", function () {
    selectedMode = "metric";
    setMetricMode();
});

imperialButton.addEventListener("click", function () {
    selectedMode = "imperial";
    setImperialMode();
});


// Set the editable side based on the selected unit system
function setMetricMode() {
    document.getElementById("km").readOnly = false;
    document.getElementById("meters").readOnly = false;
    document.getElementById("cm").readOnly = false;
    document.getElementById("kg").readOnly = false;
    document.getElementById("celsius").readOnly = false;
    document.getElementById("litres").readOnly = false;

    document.getElementById("miles").readOnly = true;
    document.getElementById("ft").readOnly = true;
    document.getElementById("in").readOnly = true;
    document.getElementById("pounds").readOnly = true;
    document.getElementById("f").readOnly = true;
    document.getElementById("gallons").readOnly = true;
}

function setImperialMode() {
    document.getElementById("km").readOnly = true;
    document.getElementById("meters").readOnly = true;
    document.getElementById("cm").readOnly = true;
    document.getElementById("kg").readOnly = true;
    document.getElementById("celsius").readOnly = true;
    document.getElementById("litres").readOnly = true;

    document.getElementById("miles").readOnly = false;
    document.getElementById("ft").readOnly = false;
    document.getElementById("in").readOnly = false;
    document.getElementById("pounds").readOnly = false;
    document.getElementById("f").readOnly = false;
    document.getElementById("gallons").readOnly = false;
}


// Convert all entered values
convertButton.addEventListener("click", function () {
    const km = document.getElementById("km");
    const meters = document.getElementById("meters");
    const cm = document.getElementById("cm");
    const kg = document.getElementById("kg");
    const celsius = document.getElementById("celsius");
    const litres = document.getElementById("litres");

    const miles = document.getElementById("miles");
    const feet = document.getElementById("ft");
    const inches = document.getElementById("in");
    const pounds = document.getElementById("pounds");
    const fahrenheit = document.getElementById("f");
    const gallons = document.getElementById("gallons");


    if (selectedMode === "") {
        alert("Please select Metric or Imperial first.");
        return;
    }

    if (selectedMode === "metric") {
        if (km.value === "" && meters.value === "" 
            && cm.value === "" && kg.value === "" 
            && celsius.value === "" && litres.value === "") {
            alert("Please enter at least one value.");
            return;
        }

        if (km.value !== "") {
            miles.value = (km.value * 0.6213711922).toFixed(2);
        }

        if (meters.value !== "") {
            feet.value = (meters.value * 3.280839895).toFixed(2);
        }

        if (cm.value !== "") {
            inches.value = (cm.value * 0.3937007874).toFixed(2);
        }

        if (kg.value !== "") {
            pounds.value = (kg.value * 2.20462262185).toFixed(2);
        }

        if (celsius.value !== "") {
            fahrenheit.value = ((celsius.value * 9 / 5) + 32).toFixed(2);
        }

        if (litres.value !== "") {
            gallons.value = (litres.value * 0.2641720524).toFixed(2);
        }
    }


    if (selectedMode === "imperial") {
        if (miles.value === "" && feet.value === "" 
            && inches.value === "" && pounds.value === "" 
            && fahrenheit.value === "" && gallons.value === "") {
            alert("Please enter at least one value.");
            return;
        }

        if (miles.value !== "") {
            km.value = (miles.value / 0.6213711922).toFixed(2);
        }

        if (feet.value !== "") {
            meters.value = (feet.value / 3.280839895).toFixed(2);
        }

        if (inches.value !== "") {
            cm.value = (inches.value / 0.3937007874).toFixed(2);
        }

        if (pounds.value !== "") {
            kg.value = (pounds.value / 2.20462262185).toFixed(2);
        }

        if (fahrenheit.value !== "") {
            celsius.value = ((fahrenheit.value - 32) * 5 / 9).toFixed(2);
        }

        if (gallons.value !== "") {
            litres.value = (gallons.value / 0.2641720524).toFixed(2);
        }
    }
});