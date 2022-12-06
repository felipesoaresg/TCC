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

function enviar() {
  const url = 'http://10.0.0.107:1313/enviar-pedido'

  var pagamento = document.querySelectorAll('[name=pagamento]:checked');

  var meusDados = {
      pagamento,
  }
  fetch(url, {
      method: 'Post',
      body: JSON.stringify(meusDados),
      headers: {
          "Content-type": "application/json"
      },
  }).then((resultado) => {
      return resultado.json();
  })
}