const header = document.getElementById("header");
let language = localStorage.getItem("language");
const level = localStorage.getItem("language-level");
const area = localStorage.getItem("area");

//renaming the language
if (language === "es"){
    language = "Spanish";
}
else if (language === "fr"){
    language = "French";
}
else{
    language = "German"
}

header.innerHTML = `
<div>
    <h1>${area}: ${language}</h1>
    <h2>Level: ${level}</h2>
</div>
`