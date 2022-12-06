const Sequelize = require('sequelize');
const database = require('../db');
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
    pagamento: Sequelize.JSON,
});

pedido.hasOne(cliente, {
    foreignKey:'idCliente', allowNull: false,
});
cliente.belongsTo(pedido, {
    foreignKey:'idCliente', allowNull: false,
});

module.exports = pedido;
//isso é a representação de uma tabela que existe no bd
