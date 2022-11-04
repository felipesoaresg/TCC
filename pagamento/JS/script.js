var a = document.getElementById('credito');
var b = document.getElementById('debito');
var c = document.getElementById('pix');
var d = document.getElementById('dinheiro');

function marcaDesmarca(id) {
  if (id == "credito") {
    document.getElementById('debito').checked = false;
    document.getElementById('pix').checked = false;
    document.getElementById('dinheiro').checked = false;
  } else if (id == "debito") {
    document.getElementById('credito').checked = false;
    document.getElementById('pix').checked = false;
    document.getElementById('dinheiro').checked = false;
  } else if (id == "pix") {
    document.getElementById('credito').checked = false;
    document.getElementById('debito').checked = false;
    document.getElementById('dinheiro').checked = false;
  } else if (id == "dinheiro") {
    document.getElementById('credito').checked = false;
    document.getElementById('debito').checked = false;
    document.getElementById('pix').checked = false;
  }
}