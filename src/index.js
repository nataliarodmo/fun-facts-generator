function displayFact(response){
    new Typewriter ("#fun-fact", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor:"",
    });
    
}

function generateFact(event){
    event.preventDefault();
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "cf0o37c8aaf1022e4beeb7d4de3tca0a";
    let prompt = `Can you please generate a fun fact about ${instructionsInput.value}?`;
    let context = " You are a fun fact generator expert and your mission is to generate real fun facts based on the prompt of not more than 4 lines, try to not repeat the facts. Only display the fun fact";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let factElement = document.querySelector("#fun-fact");
    factElement.classList.remove("hidden");
    factElement.innerHTML = `<div class="generating">Generating Fun Fact about ${instructionsInput.value} ⏳ </div>` ;
    axios.get(apiUrl).then(displayFact);

}




let factFormElement = document.querySelector("#fact-generator-form");
factFormElement,addEventListener("submit", generateFact);
