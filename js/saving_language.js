const saved_language = document.getElementById("language-select");
const saved_language_level = document.getElementById("language-level");
const contuine = document.getElementById("continue-button");
const levelSection = document.getElementById("language-level-selection");

// hide on load
levelSection.style.display = "none";

// show/hide when user selects a language
saved_language.addEventListener("change", () => {
    if (saved_language.value !== "") {
        levelSection.style.display = "block";
    } else {
        levelSection.style.display = "none";
    }
});

//checking if the user has selected a language to contuine
function checkLanguage() {
    if (saved_language.value !== "" && saved_language_level.value !== "") {
        return true;
    } else {
        return false;
    }
}

//simple contuine section
contuine.onclick = () => {
    if (!checkLanguage()) {
        alert("Please select a language or level");
        return;
    }
    console.log(saved_language.value);
    console.log(saved_language_level.value);
    localStorage.setItem("language", saved_language.value);
    localStorage.setItem("language-level", saved_language_level.value);
    window.location.href = "selection.html";
};