//connectando com o bd
const mysql = require('mysql2');

var connection = mysql.createPool({
    host:"localhost",
    user:"root",
    password: "usbw",
    database: "Lanchonete2",
    port: "3307",
});

//inicia o servidor
const express = require('express');
const clientes = require('./models/cliente');
const produtos = require('./models/produtos');
const carrinho = require('./models/carrinho');
const pedido = require('./models/pedidos');

const app = express();

//inicio da biblioteca JSON -> conversão de dados
app.use(express.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 })


//endpoints
//listar clientes
app.get('/listar-clientes', (req, res, next)=>{
    connection.query("SELECT * FROM clientes", function(error, result, fields) {
        if (error) throw error;
        res.send(result);
        res.end();
    });
});

//listar produtos
app.get('/listar-hamburguers', (req, res, next)=>{
    produtos.findAll({where: {
        categoria: "hamburguer"
    }}).then(result => {
        console.log(result)
        res.send(result);
    }).catch((err) => {
        res.redirect('/')
    })
});

app.get('/listar-bebidas', (req, res, next)=>{
    produtos.findAll({where: {
        categoria: "bebida"
    }}).then(result => {
        console.log(result)
        res.send(result);
    }).catch((err) => {
        res.redirect('/')
    })
});

app.get('/listar-petiscos', (req, res, next)=>{
    produtos.findAll({where: {
        categoria: "petisco"
    }}).then(result => {
        console.log(result)
        res.send(result);
    }).catch((err) => {
        res.redirect('/')
    })
});

app.get('/listar-sobremesas', (req, res, next)=>{
    produtos.findAll({where: {
        categoria: "sobremesa"
    }}).then(result => {
        console.log(result)
        res.send(result);
    }).catch((err) => {
        res.redirect('/')
    })
});

//salvar clientes no BD
app.post("/gravar-cliente", (req, res, next) =>{
    console.log(req.body);
    const nomeCliente = req.body.nomeCliente;
    const mesa = req.body.mesa;

    const save = `INSERT INTO clientes (nomeCliente, mesa) VALUES ('${nomeCliente}','${mesa}')`;
    connection.query(save, function(error, result, fields) {
    if (error) throw error;
    res.end(JSON.stringify({"resultado":"OK!"}))
});
});

//salvar produtos, OK
app.post("/gravar-produto", (req, res, next) =>{
    console.log(req.body);
    const nomeProduto = req.body.nomeProduto;
    const descricao = req.body.descricao;
    const preco = req.body.preco;
    const estoque = req.body.estoque;
    const categoria = req.body.categoria;
    const img = req.body.img;


    const save = `INSERT INTO produtos3s (nomeProduto, descricao, preco, estoque, categoria,img) VALUES ('${nomeProduto}','${descricao}', '${preco}', '${estoque}', '${categoria}', '${img}')`;
    connection.query(save, function(error, result, fields) {
    if (error) throw error;
    res.end(JSON.stringify({"resultado":"OK!"}))
});
});

//estoque , OK
app.get('/listar-produtos', (req, res, next)=>{
produtos.findAll().then(result => {
        console.log(result)
        res.send(result);
    }).catch((err) => {
        res.redirect('/')
    })
});

//editar produtos, OK
app.post("/editar-produto", (req, res, next) =>{
    const nomeProduto = req.body.produto;
    const preco = req.body.preco;
    const estoque = req.body.estoque;
    const idProduto1 = req.body.idProduto1;


    const save = `UPDATE produtos SET nomeProduto = '${nomeProduto}', preco = '${preco}', estoque = '${estoque}' WHERE idProduto = ${idProduto1} ;`;
    connection.query(save, function(error, result, fields) {
    if (error) throw error;
    res.end(JSON.stringify({"resultado":"OK!"}))
});

});

//apagar produtos , OK
app.post("/apagar-produto", (req, res, next) =>{
    produtos.destroy({ where: { idProduto: req.body.id } }).then(() => {
        res.redirect('/produto')
    }).catch((err) => {
        res.redirect('/')
    })
});


app.listen(1313, () => {
    console.log('OK!')
})

//listar produtos do carrinho, retorna undefined
app.get ('/listar-prod-pedido', (req,res,) => {
    carrinho.findAll({
        order: [['createdAt', 'ASC']],
        where: {carrinhoId: 1},
        include: {
            model: produtos,
            attributes: ['nomeProduto', 'preco', 'img'],
            nested:true,
            raw: true
        }, 
        }).then(result => {
        console.log(result)
        res.send(result);
    }).catch((err) => {
        res.redirect('/')          
    })
})

//falta mostrar os produtos
app.get ('/mostrarpedido', (req,res,) => {
    pedido.findAll({
        order: [['createdAt', 'ASC']],
        include: { all: true, nested: true }
        }).then(result => {
        console.log(result)
        res.send(result);
    }).catch((err) => {
        res.redirect('/')
    })
})

//API criar registro do carrinho, OK
app.post('/enviar-pedido', (req,res) => {

    const produtos = req.body.listaprodutos;
    const total =req.body.valorTotal;
    const qtd = req.body.quantd;
    const pagamento = req.body.pagamento;

    pedido.create({
        produtosId: produtos,
        valorTotal: total,
        qtd: qtd,
        pagamento: pagamento,

    }).then(result => {
        console.log(result)
        res.send(JSON.stringify({"resultado":"OK!"}));
    }).catch((err) => { throw new Error(err) })
})

//API atualizar status do pedido
app.post('/atualizar-status', (req,res) => {

    pedido.update(
         {status: req.body.status },
         {where: { pedidoId: req.body.id }}
    ).then(result => {
        console.log(result)
        res.send(JSON.stringify({"resultado":"OK!"}));
    }).catch((err) => { throw new Error(err) })
})