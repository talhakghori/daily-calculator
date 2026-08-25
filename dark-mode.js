const lightButton = document.getElementById("light-button");
const darkButton = document.getElementById("dark-button");

// Apply the selected theme for the current session
if (sessionStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

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