var express = require('express');
const { route } = require('.');
var router = express.Router();


router.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/layouts");
});

router.get('/home', (req, res)=>{
    res.render('index')
})

router.get('/contato', (req, res)=>{
    res.render('contato')
})

router.get('/conhecimento', (req, res)=>{
    res.render('conhecimento')
})

router.get('/projetos', (req, res)=>{
    res.render('projetos')
})

router.get('/orcamento', (req, res)=>{
    res.render('orcamento')
})

module.exports = router