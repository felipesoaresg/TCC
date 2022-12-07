 //initialising a variable name data
 var data = 0;
  
 //printing default value of data that is 0 in h2 tag
 document.getElementById("counting").innerText = data;

 //creation of increment function
 function increment() {
     data = data + 1;
     document.getElementById("counting").innerText = data;
 }
 //creation of decrement function
 function decrement() {
     data = data - 1;
     document.getElementById("counting").innerText = data;
 }

 
//looping para repetir os food card no HTML
for(var i=0; i < 7; i++){
    //criando variaveis com o elemento já existente 
    let elementoOG = document.querySelector('.mainContainer');

    //criando clone do elemento 
    let elementoCopy = elementoOG.cloneNode(true);
    ///add ao html
    document.querySelector('article').appendChild(elementoCopy);
  }