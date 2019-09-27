const express = require('express');
const bodyParser = require('body-parser');

const ObjectId = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://matheus1714:matheus1714@node-rest-quiz-rps7a.mongodb.net/test?retryWrites=true&w=majority"

const app = express();

app.set('view engine', 'ejs');

MongoClient.connect(uri, (err, client) => {
    if(err) return console.log(err);
    db = client.db('node-rest-quiz');
    app.listen(3000, ()=>{
        console.log('Server running on port 3000');
    });
})

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/', (req, res) => {
    var cursor = db.collection('data').find()
})

app.get('/show', (req, res) => {
    db.collection('data').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.render('show.ejs', { data: results })

    })
})

app.post('/show', (req, res) => {
    console.log(req.body);
    db.collection('data').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('Salvo no Banco de Dados')
        res.redirect('/show')
    })
})

app.route('/edit/:id')
.get((req, res)=>{
    var id = req.params.id;

    db.collection('data').find(ObjectId(id)).toArray((err, result)=>{
        if(err) return res.send(err);
        res.render('edit.ejs', {data: result});
    })
})
.post((req,res)=>{
    var id = req.params.id;
    var name = req.body.name;
    var email = req.body.email;
    var cource = req.body.cource;

    db.collection('data').updateOne({_id: ObjectId(id)}, {
        $set: {
            name: name,
            email: email,
            cource: cource
        }
    }, (err, result)=>{
        if(err) return res.send(err);
        res.redirect('/show');
        console.log('Autorizado no Banco de Dados');
    })
})

app.route('/delete/:id')
.get((req,res)=>{
    var id = req.params.id;

    db.collection('data').deleteOne({_id:ObjectId(id)}, (err, result) => {
        if(err) return res.send(500, err);
        console.log('Deletando do Banco de Dados');
        res.redirect('/show');
    })
})