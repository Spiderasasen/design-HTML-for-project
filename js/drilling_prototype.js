document.addEventListener("DOMContentLoaded", () => {
    const language = localStorage.getItem("language");
    const word = document.getElementById("drilling_word");

    console.log("language from localStorage:", language);
    console.log("drilling_word element:", word);

    if (!word) {
        console.error("Element with id 'drilling_word' not found.");
        return;
    }

    if (language === "es") {
        word.innerHTML = "<h3>Hola</h3>";
    } else if (language === "fr") {
        word.innerHTML = "<h3>Bonjour</h3>";
    } else {
        word.innerHTML = "<h3>hallo</h3>";
    }
});
