function enviarDados() {

    var user = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;

    if(user == "felipe23" && senha == "admin"){
        location.href = "../PedidosFuncionarios/index.html";
    }
    else if(user == "yasmin11" && senha == "admin"){
        location.href = "../PedidosFuncionarios/index.html";
    }else(
        alert('Usuário ou senha incorretos')
    
    )
}