const Sequelize = require('sequelize');
const db = require('./db');

const Orcamento = db.sequelize.define('orcamento', {
  id: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome:{
    type: db.Sequelize.STRING,
      autoIncrement: false,
      allowNull:false
  },
  email:{
      type: db.Sequelize.STRING,
      autoIncrement: false,
      allowNull:false
  },
  mensagem:{
    type: db.Sequelize.STRING,
    autoIncrement: false,
    allowNull:false
  },
  qtd_pagina:{
    type: db.Sequelize.INTEGER,
    autoIncrement: false,
    allowNull:false
  },
  flg_layout:{
    type: db.Sequelize.TINYINT,
    autoIncrement: false,
    allowNull:false
  },
  prazo: {
      type: db.Sequelize.INTEGER,
      autoIncrement: false,
      allowNull: false
  },
  valor: {
      type: db.Sequelize.DECIMAL,
      autoIncrement: false,
      allowNull:false
  }
  
});

/*executar uma unica vez na criacao do projeto pois ele apaga a tabel
 Orcamento.sync({force: true}) */

 module.exports = Orcamento
