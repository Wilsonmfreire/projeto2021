const Sequelize = require('sequelize');
const db = require('./db')

const Post = db.sequelize.define('postagens', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    mensagem: {
        type: db.Sequelize.TEXT,
        allowNull: false
    }
})


/**
     executar uma unica vez na criacao do projeto pois ele apaga a tabel
    Post.sync({force: true})
 */

module.exports = Post