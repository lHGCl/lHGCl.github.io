const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async language=>{
    const requestJson = await fetch('./language/'+language+'.json')
    const text = await requestJson.json()

    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = text[section][value];
    }
}

flagsElement.addEventListener("click", (e)=>{
    changeLanguage(e.target.parentElement.dataset.language);
});