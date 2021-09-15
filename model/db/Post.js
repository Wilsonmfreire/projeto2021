const db = require('./db')

const Post = db.sequelize.define('postagens', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    mensagem: {
        type: db.Sequelize.TEXT
    }
})

/**
     executar uma unica vez na criacao do projeto pois ele apaga a tabel
    Post.sync({force: true})
 */

module.exports = Post