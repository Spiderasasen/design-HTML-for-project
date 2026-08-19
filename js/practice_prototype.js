document.addEventListener( 'DOMContentLoaded', () => {
    const language = localStorage.getItem("language");
    const container = document.getElementById("practice-container");

    console.log("language from localStorage:", language);

    //adding stuff in the container
    if (language === "es") {
        container.innerHTML = "<p>Hola, como estás?</p>";
    }
    else if (language === "fr") {
        container.innerHTML = "<p>Bonjour, comment allez-vous?</p>";
    }
    else {
        container.innerHTML = "<p>hallo, wie geht es dir?</p>";
    }
});