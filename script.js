//Function which searcher for the meaning of the word
function meaning() {
    //getting the word written in the input field for searching
    const word = document.getElementById("word").value;

    //Using this API to get the JSON data of the definition of the word
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((data) => {
            const display = document.getElementById("display");

            //displaying the word that is being searched in the span field of the HTML
            const word = data[0].word;
            let header = document.createElement("h5");
            header.innerHTML = `<hr> Word: <b>${word}</b> <hr>`;
            display.innerHTML = "";
            display.appendChild(header);

            //displaying the part of speech and the meaning of the word that is being searched by retirieving it from the 
            //JSON data obatined from the URL
            const meanings = data[0].meanings;
            for(let meaning of meanings){
                const speech = `${meaning.partOfSpeech}`
                let paragraph = document.createElement("p");
                paragraph.innerHTML = `Parts of speech: <b>${speech}</b>`;
                display.appendChild(paragraph);

                
                const definitions = meaning.definitions;
                for(let definition of definitions){
                    output = definition.definition;
                    let paragraph = document.createElement("p");
                    paragraph.innerHTML = `Meaning: <b>${output}</b>`;
                    display.appendChild(paragraph);

                }

                //Creaating a line break between different meanings in the context of part of speech
                const line = document.createElement("hr");
                display.appendChild(line);
            }
        })
        .catch((error) => {
            console.error(error);
        })
}