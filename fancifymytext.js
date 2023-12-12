// Function to make text bigger
function makeTextBig() {
    document.getElementById("myTextArea").style.fontSize = "24pt";
}

// Function to apply styles based on radio button selection
function sendAlert() {
    var textArea = document.getElementById("myTextArea");
    if (document.getElementById("idFancyShmancy").checked) {
        // Apply fancy styles
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("idBoringBetty").checked) {
        // Apply boring styles
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to transform text into uppercase and add '-Moo' at the end of each sentence
function moo() {
    var textArea = document.getElementById("myTextArea");
    var text = textArea.value.toUpperCase();
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i].trim() + "-MOO";
        }
    }
    textArea.value = sentences.join(". ");
}
