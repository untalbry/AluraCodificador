function encript() {
    let inputText = document.getElementById("inputText").value;
    let txt = inputText.toLowerCase();
    txt = txtToCript(txt);
    document.getElementById("textarea_field").value = txt;
    document.getElementById("inputText").value = "";
}
function txtToCript(txt){
    return txt.replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat")
}

function copyText() {
    var textArea = document.getElementById("textarea_field");
    textArea.select();
    document.execCommand("copy");
}