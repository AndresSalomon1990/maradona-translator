/* count the remaining characters of the textarea input */
charactersLeft.textContent = maxCharacters;

function countCharacters(e) { 
   let textEntered, countRemaining, counter;

   textEntered = textareaInput.value;

   counter = (maxCharacters - (textEntered.length));

   charactersLeft.textContent = counter;
};

textareaInput.addEventListener("input", countCharacters, false);