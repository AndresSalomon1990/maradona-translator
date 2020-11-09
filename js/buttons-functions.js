/* clear the text in the textarea input */
function clearText() {
    textareaInput.value = "";
    textareaOutput.value = "";
    charactersLeft.textContent = maxCharacters;
};

/* copy the text from the textarea output */
function copyText() {
  // select the text field
  textareaOutput.select();
  textareaOutput.setSelectionRange(0, 99999); // for mobile devices

  // copy the text inside the text field
  document.execCommand("copy");

  // alert the copied text
  alert("Copied the text: " + textareaOutput.value);
};