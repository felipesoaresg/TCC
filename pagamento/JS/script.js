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

let enviar=document.getElementById("enviar")
let pagamentoSelecionado=[]
function enviarpag(){
  const url = 'http://10.0.0.107:1313/enviar-pedido'
  
  let pagamento = document.getElementsByName("pagamento")

  for(var i=0;i<pagamento.length;i++){
    if(pagamento[i].checked){
      console.log("a forma de pagamento foi:  "+ pagamento[i].value)
      pagamentoSelecionado.push(pagamento[i].value)
    }
  }
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

enviar.addEventListener("click", enviarpag)
