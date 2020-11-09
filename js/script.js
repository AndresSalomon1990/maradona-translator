// the textarea input
var textareaInput = document.getElementById("textarea-input");

// generates a random number between 1 and num-1
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num) + 1;
};

// clear the text in the textarea input
function clearText() {
    textareaInput.value = "";
};



