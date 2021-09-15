const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Orcamento =  require('./model/db/Orcamento')
const Post = require('./model/db/Post')
const admin = require('./routes/admin')
const path = require('path')

//config handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//config body parse
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Public
app.use(express.static(path.join(__dirname, 'public')));

//rotas abaixo
{/*
        app.use(express.static('public'))
        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/views/layouts')
        })

        app.get('/home', (req, res)=>{
            res.render('index')
        })

        app.get('/formulario', (req, res)=>{
            res.render('formulario')
        })

        app.get('/conhecimento', (req, res)=>{
            res.render('conhecimento')
        })

        app.get('/projetos', (req, res)=>{
            res.render('projetos')
        })

        app.get('/orcamento', (req, res)=>{
            res.render('orcamento')
        })
    */}
app.get('/', (req, res)=>{
    res.send('rota principal')
})

app.use('/', admin)


app.post('/add', (req, res)=>{
    Post.create({
        nome: req.body.nome,
        email: req.body.email,
        mensagem: req.body.mensagem
    }).then(()=>{
        res.render('index')
    }).catch((erro)=>{
        res.send('Ocorreu um erro: ' + erro)
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