const Sequelize = require('sequelize');
const database = require('../db');
const carrinho = require('./carrinho');
const cliente = require('./cliente');

const pedido = database.define( 'pedidos3', {
    pedidoId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    status: Sequelize.STRING(9),
    idCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    carrinhoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    pagamento: Sequelize.STRING(30),
});

pedido.hasOne(cliente, {
    foreignKey:'idCliente', allowNull: false,
});
cliente.belongsTo(pedido, {
    foreignKey:'idCliente', allowNull: false,
});

pedido.hasOne(carrinho,{
    foreignKey:'carrinhoId', allowNull: false,
});
carrinho.belongsTo(pedido, {
    foreignKey:'carrinhoId', allowNull: false,
});

module.exports = pedido;
//isso é a representação de uma tabela que existe no bd