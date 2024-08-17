asignarTextoElemento('h1', 'Encriptador de Texto');

function asignarTextoElemento(elemento, texto){
    let elementoTexto = document.querySelector(elemento);
    elementoTexto.innerHTML = texto;
}

function encrypt(text) {
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}

function handleEncrypt() {
    let originalWord = document.getElementById('texto').value;
    document.getElementById('output').innerHTML = encrypt(originalWord);

    testInput();
}

function handleDecrypt() {
    let originalWord = document.getElementById('texto').value;
    document.getElementById('output').innerHTML = decrypt(originalWord);

    testInput();
}

function copiarTexto() {

    const texto = document.getElementById('output').innerText;

    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado al portapapeles!');
    }).catch(err => {
        alert('Error al copiar el texto: ', err);
    });
}

function testInput() {
    var input = document.getElementById("texto").value;
    var result = document.getElementById("output");

    if (input === "") {
        result.textContent = "Ningún mensaje fue encontrado";
    }
}