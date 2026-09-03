const lightButton = document.getElementById("light-button");
const darkButton = document.getElementById("dark-button");

const textSlider = document.getElementById("text-size");
const textValue = document.getElementById("text-value");


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