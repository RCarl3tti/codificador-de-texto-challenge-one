const textInput = document.querySelector('.input-text');
const buttonCriptografar = document.querySelector('.btn-criptografar');
const buttonDescriptografar = document.querySelector('.btn-descriptografar');



function criptografar() {
    let texto = textInput.value;
    let textoCriptografado = texto.replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    semTextoNaTela();
    mostrarDisplay(textoCriptografado);
    textInput.value = '';
}

function descriptografar() {
    let texto = textInput.value;
    let textoDescriptografado = texto.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    semTextoNaTela();
    mostrarDisplay(textoDescriptografado);
    textInput.value = '';
}

function mostrarDisplay(resultado) {
    document.querySelector('.div-output').innerHTML = `
    <p id="output-text" class="output-text">
    ${resultado}
    </p>
    <button class="btn-copiar" id="btn-copiar" onclick="copiarTexto()">Copiar</button>
    `;
}

function semTextoNaTela() {
    let texto = textInput.value;
    document.querySelector('.div-output').style.display = texto == '' ? 'none' : 'flex';
    document.querySelector('.div-output-vazio').style.display = texto == '' ? 'flex' : 'none';
}

function copiarTexto() {
    var elemento = document.getElementById('output-text');
    var inputTemp = document.createElement("input");
    inputTemp.value = elemento.innerText;
    document.body.appendChild(inputTemp);
    inputTemp.select();
    document.execCommand("copy");
    document.body.removeChild(inputTemp);
    alert('Texto copiado!')
}