const Sequelize = require('sequelize');
const database = require('../db');
const produtos = require('./produtos');

const carrinho = database.define( 'carrinho5s', {
    carrinhoId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    valorTotal:Sequelize.DECIMAL(8,2),
    qtd: Sequelize.INTEGER(4),
    produtosId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    pagamento:Sequelize.STRING(20),
});

carrinho.hasMany(produtos,{
        foreignKey:'idProduto', allowNull: false
});

produtos.belongsTo(carrinho, {
    foreignKey:'idProduto', allowNull: false
});

module.exports = carrinho;
//isso é a representação de uma tabela que existe no bd