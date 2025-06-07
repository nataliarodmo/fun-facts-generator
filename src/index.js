
function generateFact(event){
    event.preventDefault();

    new Typewriter ("#fun-fact", {
        strings: "Generating Fun Fact",
        autoStart: true,
        delay: 1,
        cursor:"",
    });
    
}



let factFormElement = document.querySelector("#fact-generator-form");
factFormElement,addEventListener("submit", generateFact);
