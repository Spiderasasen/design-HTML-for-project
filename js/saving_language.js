const saved_language = document.getElementById("language-select");
const contuine = document.getElementById("continue-button");

contuine.onclick = () => {
    console.log(saved_language.value);
    localStorage.setItem("language", saved_language.value);
};