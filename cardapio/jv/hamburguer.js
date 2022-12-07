 //initialising a variable name data
 var data = 0;
  
 //printing default value of data that is 0 in h2 tag
 document.getElementById("counting").innerText = data;

 //creation of increment function
 function increment() {
     data = data + 1;
     document.getElementById("counting").innerText = data;
     var contador = document.getElementById('counting').innerText;
    console.log(contador);
 }
 //creation of decrement function
 function decrement() {
     data = data - 1;
     if(data < 0){data = 0}
     document.getElementById("counting").innerText = data;
 }

  const corpoSite = document.querySelector('.site-content');
  document.body.onload = PegarDados;

  function PegarDados() {
    const url = 'http://10.0.0.107:1313/listar-hamburguers'

    fetch(url, {
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json"
        },
        method: 'GET'
    }).then((resultado) => {
        return resultado.json();
    })
    .then((dados) => {
        corpoSite.innerHTML = ''
        for (var num = 0; num < dados.length; num++) {
            const card = document.querySelector('.main');
            const criaCard = document.createElement(card);

            criaCard.innerHTML = `

            <div class="mainContainer">
                <div class="container" id="container">

                    <div class="standardImg">
                    <img src="img/hamburguer.png" width="75px"> 
                    </div>
                    
                    <div class="textosContainer">
                    <h6 id="nome">${dados[num].nomeProduto}</h6>
                    <p id="desc">${dados[num].descricao}</p><br>
                    <p id="preco">${dados[num].preco}</p>
                    </div>

                    <div class="mainContador zindex">
                        <div class="contador ">            
                            <button  class = "counter" onclick="increment()">+</button>  
                            <h3 id="counting">0</h3>
                            <button class = "counter" onclick="decrement()">-</button>         
                        </div>
                    </div>

                </div>
            </div>`                 
            corpoSite.appendChild(criaCard);

            console.log(dados[num]);
        }
    });
}

var contador = document.getElementById('counting');
console.log(contador);
