const Sequelize = require('sequelize')
const sequelize = new Sequelize('portifolio', 'root', '',
    {
        dialect: 'mysql',
        host: 'localhost',
        port: 3306
    }
)
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

 