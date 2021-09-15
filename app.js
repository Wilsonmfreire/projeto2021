const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Orcamento =  require('./model/db/Orcamento')
const Post = require('./model/db/Post')


//config handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//config body parse
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//rotas
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/layouts')
})

app.get('/home', (req, res)=>{
    res.render('index')
})

app.get('/cad', (req, res)=>{
    res.render('formulario')
})

app.get('/#conhecimento', (req, res)=>{
    res.render('conhecimento')
})

app.get('/projetos', (req, res)=>{
    res.render('projetos')
})

app.get('/orcamento', (req, res)=>{
    res.render('orcamento')
})


app.post('/add', (req, res)=>{
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(()=>{
        res.send('Post criado com sucesso!')
    }).catch((erro)=>{
        res.send('Houve um erro: ' + erro)
    })

})

/*pegando os parametros digitados pelo usuario, no meu projeto vou ter dois input
  presta atenção nisso !!!
formulario: 
<input type="text" name="titulo">
<textarea name="conteudo" ></textarea>*/






/*
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/layout/index.html')
})
*/

app.listen(3000)