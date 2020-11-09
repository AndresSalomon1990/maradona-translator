// the textarea input
var textareaInput = document.getElementById("textarea-input");
// the textarea output
var textareaOutput = document.getElementById("textarea-output");
// the span that count the characters left
var charactersLeft = document.getElementById("characters-left");
// maximun characters allowed
var maxCharacters = 150;
// array of phrases to splice
var phrases = ["eeeee", "esteeeee", "mmmmm", "laaaa"];

/* generates a random number between 1 and num-1 */
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num) + 1;
};

/* tranlsation */
function translate(str) {
    let splittedStr = str.toLowerCase().split(" ");

    for(let i = 0; i < splittedStr.length; i++) {

        if(splittedStr[i].endsWith('a')) {
            splittedStr[i] += 'a'.repeat(generateRandomNumber(5));
        };

        if(splittedStr[i].endsWith('e')) {
            splittedStr[i] += 'e'.repeat(generateRandomNumber(7));
        };
        
        if(splittedStr[i].endsWith('i')) {
            splittedStr[i] += 'i'.repeat(generateRandomNumber(5));
        };
        
        if(splittedStr[i].endsWith('o')) {
            splittedStr[i] += 'o'.repeat(generateRandomNumber(5));
        };
        
        if(splittedStr[i].endsWith('u')) {
            splittedStr[i] += 'u'.repeat(generateRandomNumber(5));
        };
    };

    let phraseToSplice = phrases[generateRandomNumber(phrases.length)];
    splittedStr.splice(generateRandomNumber(splittedStr.length), 0, phraseToSplice);

    return splittedStr.join(" ");
}

textareaInput.addEventListener("input", () => {
    textareaOutput.value = translate(textareaInput.value);
}, false);