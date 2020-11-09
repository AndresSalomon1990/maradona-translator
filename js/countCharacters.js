// count the remaining characters of the textarea input
let maxChar = 150;
let c = document.getElementById("characters-left");

c.innerHTML = maxchar;

textareaInput.addEventListener("keydown", count());

function count(e) {
    let len =  textareaInput.value.length;
    if(len >= maxchar) {
       e.preventDefault();
    } else {
       c.innerHTML = maxchar - len-1;   
    }
};