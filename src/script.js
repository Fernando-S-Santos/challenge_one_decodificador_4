let entradaDeTexto = document.querySelector('#texto');
let saidaDeTexto = document.querySelector('#resultado_texto');
let message = document.getElementById('mensagem');

let botaoCripto = document.querySelector('#criptografar');
let botaoDescripto = document.querySelector('#descriptografar');

document.getElementById('info').innerHTML = '';
entradaTexto.focus();

function criptografarTexto() {
    if(entradaDeTexto.value.length == 0) {
        document.getElementById('info').innerHTML = '<h1 id="info">Nenhuma mensagem encontrada!</h1>';
        entradaDeTexto.focus();
    } else {
        document.getElementById('info').innerHTML = '';
        document.querySelector('.img-lupa').style.display = 'none';

        let chaves = entradaDeTexto.value;
        let keys = chaves.replace(/e/g, 'enter');
        keys = keys.replace(/i/g, 'imes');
        keys = keys.replace(/a/g, 'ai');
        keys = keys.replace(/o/g, 'ober');
        keys = keys.replace(/u/g, 'ufat');

        document.getElementById('resultado_texto').innerHTML = `${keys}`;

        document.getElementById('copiar').innerHTML = '<button class="botao-3" type="button" id="copiar" onclick="criarButtonCopiar()">Copiar</button>';

    }

}

function descriptografarTexto() {
    if(entradaDeTexto.value.length == 0) {
        document.getElementById('info').innerHTML = '<h1 id="info">Nenhuma mensagem encontrada!</h1>';
        document.querySelector('.img-lupa').style.display;
        entradaDeTexto.focus();
    } else {
        document.getElementById('info').innerHTML = '';
        document.querySelector('.img-lupa').style.display = 'none';
        document.getElementById('texto').innerHTML = '';

        let chaves = entradaDeTexto.value;
        let keys = chaves.replace(/enter/g, 'e');
        keys = keys.replace(/imes/g, 'i');
        keys = keys.replace(/ai/g, 'a');
        keys = keys.replace(/ober/g, 'o');
        keys = keys.replace(/ufat/g, 'u');

        document.getElementById('resultado_texto').innerHTML = `${keys}`;

        document.getElementById('copiar').innerHTML = '<button class="botao-3" type="button" id="copiar" onclick="criarButtonCopiar()">Copiar</button>';

    }

}

function criarButtonCopiar() {
    document.querySelector('#resultado_texto').select();
    document.execCommand('#copiar');

    message.innerHTML = alert('Texto copiado com sucesso!');
    document.querySelector('#texto').value = '';
}

