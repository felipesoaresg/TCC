var a;
var b;
var c;

window.onload = function () {
  a = document.getElementById('a');
  b = document.getElementById('b');
  c = document.getElementById('c');

  var bt1 = document.getElementById("bt1");
  bt1.onclick = mostrarbt1;
  var bt2 = document.getElementById("bt2");
  bt2.onclick = mostrarbt2;
  var bt3 = document.getElementById("bt3");
  bt3.onclick = mostrarbt3;

  a.classList.add("inputs1");
  b.classList.add("inputs2");
  c.classList.add("inputs3");
}

function mostrarbt1() {
  a.classList.remove("inputs1");
  b.classList.add("inputs2");
  c.classList.add("inputs3");
}

function mostrarbt2() {
  b.classList.remove("inputs2");
  a.classList.add("inputs1");
  c.classList.add("inputs3");
}

function mostrarbt3() {
  c.classList.remove("inputs3");
  a.classList.add("inputs1");
  b.classList.add("inputs2");
}

const textpixlabel = document.getElementById('textpix');
    const copyButton = document.getElementById('copy');

    copyButton.addEventListener('click', ()=> {
      textpixlabel.select();
      document.execCommand('copy');
    });

function copiarTexto() {
      let textoCopiado = document.getElementById("textpix");
      textoCopiado.select();
      textoCopiado.setSelectionRange(0, 99999)
      document.execCommand("copy");
  }